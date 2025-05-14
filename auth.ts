import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import authConfig  from "@/auth.config";
import {
  PrismaAdapter
} from "@auth/prisma-adapter"

import {
  prisma
} from "@/lib/db"
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail, getUserById } from "./data/user";
import { LoginSchema } from "./schemas";
import { compare } from "bcryptjs";
export const { handlers,
    signIn, signOut, auth 
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session : {
    strategy: "jwt"
  },
  providers: [
    Google, Credentials(
        {
        async authorize(credentials) {
            
            const validatedFields = LoginSchema.safeParse(credentials);
        
            if (validatedFields.success){
                const {email, password } = validatedFields.data;
                const user = await getUserByEmail(email);
                
                if (!user || !user.password) return null;
                
                const passwordMatch = await compare(password,user.password);
                
                if(passwordMatch) return user;
            }

            return null;
        }
    })],
  pages: {
    signIn: "/auth",
  },
  callbacks : {
    async signIn({user, account}) {

      if (account?.provider !== "credentials") return true;
      
      if (!user.id) {
        throw new Error("L'identifiant de l'utilisateur n'existe pas");
      }

      const existingUser =  await getUserById(user.id);
      
      if (existingUser) return true;
      
      return true;
    }
  }
});