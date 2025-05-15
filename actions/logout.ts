import { signOut } from "next-auth/react";


export const Logout = async () => {
    signOut();
}