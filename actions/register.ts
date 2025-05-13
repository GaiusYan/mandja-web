"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import {hash} from "bcryptjs";
import { prisma } from "@/lib/db";



export const Register = async (values : z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return {
            error: "Champs obligatoires",
        }
    }


    const {email,password,name} = validatedFields.data;
    const hashedPassword = await hash(password,10);

    const existingUser = await prisma.user.findUnique({
        where : {
            email,
        } 
    });

    if (existingUser) {
        return {error : "Cette adresse email existe déjà"}
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password : hashedPassword
        }
    })

    /* TODO : send verification token email */
    return {success: "Inscription effectuée!"}
}