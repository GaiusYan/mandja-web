"use client";
import 
{ Logout } from "@/actions/logout";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";


interface NavDropdownProps {
    children: React.ReactNode;
}
export const NavDropdown = ({children} : NavDropdownProps) => {
    
    
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                        <Link href={"/auth/profile"} className="flex flex-row gap-2">
                            <DropdownMenuItem className="w-full">
                                <User/>
                                Profile
                            </DropdownMenuItem>
                        </Link>
                    <DropdownMenuItem>
                        <Settings/>
                        Paramètres
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => Logout()}>
                        <LogOut/>
                        Déconnexion
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}