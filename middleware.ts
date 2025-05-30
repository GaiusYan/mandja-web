import authConfig from "@/auth.config";
import NextAuth from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT, 
  authRootes,
  privateRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig)


export default auth(async function auth(req) : Promise<Response | undefined> {
  
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;
  const isAuthRoute = authRootes.includes(nextUrl.pathname);
  const isProtectedRoute = privateRoutes.includes(nextUrl.pathname);
  
  if (isLoggedIn && isAuthRoute){
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl));
  } 


  if(isProtectedRoute){
    if (!isLoggedIn) {
      console.log("Authenticating user for route:", nextUrl.pathname);
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    console.log("User is authenticated for route:", nextUrl.pathname);
    
  }

  return undefined;

});


export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ]
}