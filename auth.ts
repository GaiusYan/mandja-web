import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import { compare } from "bcryptjs";
 
export const { 
  auth,
  handlers,
  signIn,
  signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      credentials: {
        email: {label : "email" },
        password : {label : "password"},
      },
      async authorize(credentias){

        const validatedFields = LoginSchema.safeParse(credentias);

        console.log({validatedFields});
        


        if (validatedFields.success) {

          const {email, password} = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const passwordMatch = await compare(password, user.password);
          if (passwordMatch) return user;
        }
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  }
})