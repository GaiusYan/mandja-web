import { getVerificationTokenByEmail } from '@/data/verificationToken';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '@/lib/db';


/* Generer un token dans 30 minutes */
export const generateVerificationToken = async (email: string) => {

    const token = uuidv4();
    const expires = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes from now

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