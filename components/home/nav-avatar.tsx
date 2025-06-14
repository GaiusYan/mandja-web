
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
    size : string;
}

export const NavAvatar = (
    {src, alt, size}:
     NavAvatarProps) => {
    return (

        <NavDropdown>
            <AvatarComponent 
                size={size}
                src={src} 
                alt={alt}/>
        </NavDropdown>
    )
}
