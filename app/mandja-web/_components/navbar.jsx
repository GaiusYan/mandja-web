
"use client";
import clsx from 'clsx';
import { Roboto } from 'next/font/google';
import { useState } from 'react';
import {NavAvatar} from '@/components/home/nav-avatar';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
})


const  Navbar = () => {
  
  const [isConnected, setIsConnected] = useState(true);
  
  return (
    <div className="p-5
      flex
      justify-between
      items-center bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <p className={clsx(roboto.className,"text-2xl text-purple-300 font-extrabold")}>Mandja-web</p>
        <div className='flex flex-row gap-10 items-center'>
          <ul className="hidden md:flex items-center gap-5">
            <li className={clsx(roboto.className,"text-lg text-gray-500")}>Découvrir</li>
            <li className={clsx(roboto.className,"text-lg text-gray-500")}>Galérie</li>
            <li className={clsx(roboto.className,"text-lg text-gray-500")}>Communauté</li>
          </ul>
          <div>
            {
              isConnected ? 
              <NavAvatar 
              src={""}
              alt={"GY"}/> : 
              <div></div>
            }
             
          </div>
        </div>
    </div>
  )
}

export default Navbar;
