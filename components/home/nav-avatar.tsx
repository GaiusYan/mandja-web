import 
{
    Avatar,
    AvatarImage,
    AvatarFallback,
}
from "@/components/ui/avatar";
import  {
} 
from "@/components/ui/dropdown-menu"

import {
    NavDropdown
} from "@/components/home/nav-dropdown";
interface NavAvatarProps {
    src: string;
    alt: string;
}

export const NavAvatar = (
    {src, alt}:
     NavAvatarProps) => {
    return (

        <NavDropdown>
            <Avatar className="w-8 h-8" >
                <AvatarImage src={src} alt={alt} />
                <AvatarFallback>
                    <span className="text-sm font-medium text-gray-500">{alt}</span>
                </AvatarFallback>
            </Avatar>
        </NavDropdown>
    )
}
