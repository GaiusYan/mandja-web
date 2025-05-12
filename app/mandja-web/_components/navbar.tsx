
"use client";

import {  Inter, Roboto } from 'next/font/google';
import { useState } from 'react';
import {NavAvatar} from '@/components/home/nav-avatar';
import { Button } from '@/components/ui/button';

import { LogIn } from 'lucide-react';
import { NavNavigationMenu } from '@/components/home/nav-navigation-menu';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const inter = Inter({
   subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})



import { cn } from '@/lib/utils';
import Link from 'next/link';



 
const  Navbar = () => {
  
  const [isConnected, setIsConnected] = useState<boolean>(false);
  
  const onClick = () : void => {
    if (true){
      setIsConnected(false);
    }
    setIsConnected(true)
  }
  return (
    <div className="p-5
      flex
      justify-between
      items-center bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className='flex flex-row gap-1 items-center'>
          <p className=
            {cn(roboto.className,
            " flex items-center text-xl text-[#7E69AB] font-extrabold")}>Mandja-web</p>
        </div>
        <div className='flex flex-row items-center'>
          <NavNavigationMenu/>
          <div>
            {
              isConnected ? 
              <NavAvatar 
                src={""}
                alt={"GY"} onClick={onClick}/> : 
              <Button 
                onClick={onClick}
                variant={"default"}
                value={"Se connecter"}>
                  <Link href={"/auth"} className='flex flex-row items-center'>
                    <LogIn 
                      className="h-4 w-4 mr-2" />
                      <span className={cn(inter)}>Connexion</span>
                  </Link>
              </Button>
            }
          </div>
        </div>
    </div>
  )
}

export default Navbar;
