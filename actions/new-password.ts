"use server";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenByToken } from "./password-reset-token";
import { getUserByEmail } from "@/data/user";
import {prisma} from "@/lib/db";
export const newPassword = async(
    values : z.infer<typeof NewPasswordSchema>,
    token: string | null
) => {
    if (!token) {
        return {
            error: "Token invalide",
        };
    }
    const validatedFields = NewPasswordSchema.safeParse(values);

    if (!validatedFields.success) { 
        return {
            error: "Champs obligatoires",
        };
        
    }

    const { password } = validatedFields.data;
 
    const existingToken = await getPasswordResetTokenByToken(token);

    if (!existingToken) {
        return {
            error: "Token invalide",
        }
    }

    const expires = new Date(existingToken.expires) < new Date();

    if (expires) {
        return {
            error: "Token expiré",
        };  
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
        return {
            error: "Utilisateur invalide",
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.update({
        where: {
            id : existingUser.id,
        },
        data: {
            password: hashedPassword,
        },
    });

    return {
        success: "Mot de passe mis à jour avec succès.",
    }
}