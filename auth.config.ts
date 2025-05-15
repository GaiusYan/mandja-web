import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import { compare } from "bcryptjs";
import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./schemas";
import Credentials from "next-auth/providers/credentials";



export default
 { providers: [
    Google,
    Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);
                
                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordMatch = await compare(password,user.password);

                    console.log({passwordMatch});
                    
                    if (passwordMatch) return user;
                }
                return null;
            }
        }) 
] 
} satisfies NextAuthConfig