import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {FcGoogle} from "react-icons/fc";
import { Button } from '@/components/ui/button';

import {Input} from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import Link from 'next/link';
function AuthPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className='w-[350px] shadow-lg'>
        <CardHeader className='flex flex-col justify-center items-center mt-5'>
          <CardTitle className='text-[#7E69AB]'>Bienvenue</CardTitle>
          <CardDescription>Connectez-vous à Mandja-web</CardDescription>
          <Button className='mt-5 w-full hover:border-gray-200 hover:shadow-sm cursor-pointer'
            size={"icon"} 
            variant={"outline"}>
              <FcGoogle/>
              Continuer avec google
          </Button>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label 
                  htmlFor="name" 
                  className='text-gray-500 text-sm'>
                    Nom
                  </Label>
                <Input 
                  id="name" 
                  type='name' 
                  placeholder='Nom *'></Input>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label 
                  htmlFor="name"
                  className='text-gray-500 text-sm'>
                    Mot de passe
                  </Label>
                <Input id="name" type='password' placeholder='Mot de passe *'></Input>
              </div>
              <span className='font-normal text-xs'>
                <Link href={"/"}>
                  Mot de passe oublié ?
                </Link>
              </span>
            </div>
            <Button className='mt-5 w-full hover:shadow-sm cursor-pointer'>
              Continuer
            </Button>
            <CardFooter className='text-xs mt-3'>{"Vous n'avez pas de compte ?"}
              <span>
                <Link className='font-semibold ml-2' href={"/register"}>
                  Inscription
                </Link>
              </span>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthPage
