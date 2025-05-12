import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Champs obligatoire"
    }),
    password: z.string().min(3,{
        message: "Champs obligatoire"
    })
})