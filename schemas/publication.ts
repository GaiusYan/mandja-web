import * as z from "zod";

export const createPublicationSchema = z.object({
    title: z.string().min(5, {
        message: "Champs obligatoire"
    }),
    description: z.string().max(255,{
        message: "Attention ce champs prendre 255 élements",

    }),
    image : z
        .any()
        .refine((file) => file instanceof File || file?.construc?.name == 'File',{
            message: "Une image est réquises",
        })
        .refine((file) => file?.size <= 5 * 1024 * 1024, {
            message: "L'image ne doit pas dépasser 5 Mo"
        })
        .refine((file) => file?.type?.startsWith("image/"), {
            message: "Le fichier doit être une image",
        }),
})