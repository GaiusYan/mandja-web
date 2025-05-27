"use server";
import  {prisma} from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken }
 from "@/data/verificationToken";


 export const newVerification = async (token : string) => {

    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken){
        return { error : "Le token n'existe pas"}
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired) {
        return { error : "Votre token est expiré"}
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if(!existingUser){
        return { error :"Cette adresse n'existe pas"}
    }

    await prisma.user.update({
        where : {
            id: existingUser.id,
        },
        data: {
            emailVerified : new Date(),
            email : existingToken.email
        }
    });

    await prisma.verificationToken.delete({
        where : {
            id : existingToken.id
        }
    });

    return { success : "Adresse email verifiée !"}
}