import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { LoginSchema } from "./schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/db";




 
export const { 
  auth,
  handlers,
  signIn,
  signOut } = NextAuth({
  events: {
    async linkAccount({user}){
      await prisma.user.update({
        where: { id: user.id! },
        data: {
          emailVerified: new Date(),
        }
      })
    }
  },
  callbacks:{
    async session({token, session}){
      console.log({sessionToken: token,session});

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }


      if (token.role && session.user){
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token}) {
     
      if(!token) return token;
      
      const existingUser = await getUserById(token.sub!);
      console.log({existingUser});
      
      token.role = existingUser?.role;
      return token;
    },

    async signIn({ user, account }) {

      if (account?.provider !== "credentials") return true;
      
      const existingUser = await getUserById(user.id!);
      if (!existingUser?.emailVerified) return false;

      //todo : add 2fa check here
      return true;
    }
  },
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
  },
  pages:{
    signIn: "/auth",
    error: "/auth/error",
  },
  adapter: PrismaAdapter(prisma),
})