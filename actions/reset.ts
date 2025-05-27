"use server";
import {
    ResetSchema
} from "@/schemas";

import  * as z 
 from "zod";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/token";

export const Reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Champs obligatoires",
        };
    }
    
    const { email } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    console.log("Existing User", existingUser);
    
    if(!existingUser) {
        return { error: "Utilisateur invalide" };
    }

    const passwordResetToken = await generatePasswordResetToken(email);

    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    );

    return {
        success: "Un email de réinitialisation a été envoyé à l'adresse fournie.",
    }
}