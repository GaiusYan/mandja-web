"use server";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

import { AuthError } from "next-auth";

export const Login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success){
        return {
            error: "Champs obligatoires",
        }
    }
    const {email, password} = validatedFields.data;

    try { 
        await signIn("credentials",
            {
                email,
                password,
                redirect:false
            });
        return {success: "Authentification vérifiée..."};        
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