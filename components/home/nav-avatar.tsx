
import  {
} 
from "@/components/ui/dropdown-menu"

import {
    NavDropdown
} from "@/components/home/nav-dropdown";
import { AvatarComponent } from "@/components/home/avatar";

interface NavAvatarProps {
    src: string;
    alt: string;
}

export const NavAvatar = (
    {src, alt}:
     NavAvatarProps) => {
    return (

        <NavDropdown>
            <AvatarComponent 
                size="h-8 w-8"
                src={src} 
                alt={alt}/>
        </NavDropdown>
    )
}
