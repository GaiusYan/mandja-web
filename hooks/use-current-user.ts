import { auth } from "@/auth";

export const useCurrentUser = async () => {
    const authenticated = await auth();
    return  authenticated ? authenticated?.user : null;
}