

import { Menubar } from "@radix-ui/react-menubar";
import clsx from "clsx";
import { MenuIcon } from "lucide-react";
import { Inter } from "next/font/google";

const components : {
    title: string;
    href: string;
    description: string;
}[] = [
    {
        title: "Découvrir",
        href: "/discover",
        description: "Découvrez les dernières tendances et les contenus populaires.",
    }, 
    {
        title: "Galerie",
        href: "/gallery",
        description: "Explorez notre galerie d'images et de vidéos"
    },
    {
        title: "Événements",
        href: "/events",
        description: "Restez informé sur les événements à venir et les activités culturelles.",
    }
]

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})


import {
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
} from "@/components/ui/menubar"

export const NavNavigationMenu = () => {
    return (
        <>
        <Menubar className="md:hidden">
            <MenubarMenu>
                <MenubarTrigger>
                    <MenuIcon/>
                </MenubarTrigger>
                <MenubarContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => 
                        <li key={component.title} title={component.title} 
                            className="hover:bg-purple-50 rounded-md p-1">
                            <a href={component.href} >
                                <span
                                    className={clsx(
                                        inter.className,
                                        "text-sm font-bold")}>
                                    {component.title}
                                </span> 
                                <p className="text-sm text-gray-500">
                                    {component.description}
                                </p>
                            </a>
                        </li>)}
                    </ul>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>

        <ul className="hidden md:flex items-center gap-5">
            {components.map((component) => 
                <li key={component.title} title={component.description} className="hover:bg-purple-50 rounded-md p-1">
                    <a href={component.href}>
                        <span 
                            className={clsx(inter.className,"text-sm")}>                                    
                            {component.title}
                        </span>  
                    </a>
                </li>)}
        </ul>
    </>
    )
}