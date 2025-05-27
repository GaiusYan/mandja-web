import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Champs obligatoire"
    }),
    password: z.string().min(3,{
        message: "Champs obligatoire"
    })
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6,{
        message: "Au moins 6 caractères requis"
    }),
})


export const ResetSchema = z.object({
    email: z.string().email({
        message: "Champs obligatoire"
    }),
  
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Champs obligatoire"
    }),
    password: z.string().min(6,{
        message: "Au moins 6 caractères requis"
    }),
    name: z.string().min(1,{
        message:"Champs obligatoire"
    })
})