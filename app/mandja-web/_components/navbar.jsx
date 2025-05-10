
"use client";
import clsx from 'clsx';
import { Inter, Poppins, Roboto } from 'next/font/google';
import { useState } from 'react';
import {NavAvatar} from '@/components/home/nav-avatar';
import { Button } from '@/components/ui/button';

import { LogInIcon } from 'lucide-react';
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



 
const  Navbar = () => {
  
  const [isConnected, setIsConnected] = useState(false);
  
  return (
    <div className="p-5
      flex
      justify-between
      items-center bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <p className={clsx(roboto.className,"text-2xl text-[#7E69AB] font-extrabold")}>Mandja-web</p>
        <div className='flex flex-row gap-10 items-center'>
          <NavNavigationMenu/>
          <div>
            {
              isConnected ? 
              <NavAvatar 
              src={""}
              alt={"GY"}/> : 
              <Button 
                variant={"default"}
                value={"Se connecter"}>
                  <LogInIcon 
                    className="h-4 w-4 mr-2" />
                    Se connecter
                </Button>
            }
          </div>
        </div>
    </div>
  )
}

export default Navbar;
