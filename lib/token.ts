import { getVerificationTokenByEmail } from '@/data/verificationToken';
import { v4 as uuid } from 'uuid';
import { prisma } from '@/lib/db';
import { getPasswordResetTokenByEmail } from '@/actions/password-reset-token';


export const generatePasswordResetToken = async (email : string) => {
    const token = uuid();
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000); // 30 minutes from now

    const existingToken = await getPasswordResetTokenByEmail(email);

    if (existingToken) {
        await prisma.passwordResetToken.delete({
            where: {
                id: existingToken.id,
            }
        })
    }

    const passwordResetToken = await prisma.passwordResetToken.create({
        data: {
            email,
            token,
            expires,
        },
    });

    return passwordResetToken;
}


/* Generer un token dans 30 minutes */
export const generateVerificationToken = async (email: string) => {

    const token = uuid();
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000); // 30 minutes from now

    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
        await prisma.verificationToken.delete({
            where: {
                id: existingToken.id,
            }
        })
    }

    const verificationToken = await prisma.verificationToken.create({
        data: {
            email,
            token,
            expires,
        },
    });

    return verificationToken;
}