import { auth } from "@/auth";
import { AvatarComponent } from "@/components/home/avatar"
import { getInitials } from "@/utils/utils";

interface AvatarUserProps {
    size: string;
}
export const AvatarUser = async ({
    size
}: AvatarUserProps) => {
    const currentUser = await auth();

    return (      
        <AvatarComponent
            size={size}
            src={currentUser?.user.image as string} 
            alt={getInitials(currentUser?.user.name as string) as string}/>
                   
    );
}