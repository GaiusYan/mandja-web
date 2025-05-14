import { auth } from '@/auth';
import {  Inter } from 'next/font/google';

import {NavAvatar} from '@/components/home/nav-avatar';
import { Button } from '@/components/ui/button';

import { LogIn } from 'lucide-react';


const inter = Inter({
   subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})



import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

export const UserLogin =  () => {

    
    const [isConnected,connected] = useState(false);
  
    return (
         <div>
            {
              isConnected ? 
              <NavAvatar 
                src={ ""}
                alt={"YB"}/> : 
              <Button 
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
    )
} 