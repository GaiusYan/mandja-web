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
import {getInitials} from "@/utils/utils";

export const UserLogin =  async () => {

    
    const user = await auth();

    console.log(user);
    return (
         <div>
            {
              user ? <NavAvatar 
                src={user.user?.image as string}
                alt={getInitials(user?.user?.name as string) as string}/>  :
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