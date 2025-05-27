"use server";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";

export const Login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success){
        return {
            error: "Champs obligatoires",
        }
    }
    const {email, password} = validatedFields.data;


    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.password || !existingUser.password){
        return { error: "Utilisateur invalide" };
    }
     
    console.log("Verification Email", existingUser.emailVerified);
    
    if (!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(
            existingUser.email as string
        );

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        );
        return {success : "Le code de confirmation envoyée sur l'adresse mail" }
    }

    try { 
        await signIn("credentials",
            {
                email,
                password,
                redirect:false
            });
        return {authorize: "Authentification vérifiée..."};        
    } catch (error) {
        console.log(error);
    
        if (error instanceof AuthError){
            switch (error.type){
                case "CredentialsSignin":
                    return {
                        error : "Utilisateur invalide"
                    }
                default: 
                    return {
                        error : "Erreur survenue..."
                    }
            }
        }
        return { error : "Une erreur survenue..."}
    }
}