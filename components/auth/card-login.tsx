"use client";
import React, { useState, useTransition } from 'react'

import {
  CardFooter,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import * as z from 'zod';
import {Input} from "@/components/ui/input";
import Link from 'next/link';
import { CardAuth } from '@/components/auth/card-auth';
import { LoginSchema } from '@/schemas';
import {zodResolver } from "@hookform/resolvers/zod"
import { Form,FormControl,FormField, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Login } from '@/actions/login';
import { FormError } from '@/components/toast/FormError';
import { FormSuccess } from '../toast/FormSucess';


function CardLogin() {

    const [isPending,startTransition] = useTransition();
    const [error, setError] = useState<string >();
    const [success, setSuccess] = useState<string>();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password:""
        }
    })



    const onSubmit = (values : z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
       
        startTransition(() => {
            Login(values).then((data) => {
                
                if (data?.success){
                    setSuccess(data?.success);
                    return;
                }

                if (data?.error){
                    setError(data?.error);
                    return;
                }
            }).catch(() => {
                setError("Erreur survenue...");
            })
        })
    }

  return (
      <CardAuth 
          showSocial
          headerTitle='Bienvenue'
          headerLabel="Connectez-vous à mandja-web">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({field}) =>(
                            <>
                                <FormLabel className='text-gray-500 text-sm'>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field} 
                                        disabled={isPending}
                                        id="email" 
                                        type='email' 
                                        placeholder='Email *'/>
                                </FormControl>
                                <FormMessage/>
                            </>
                        )}>
                    </FormField>
                    
                </div>
                <div className="flex flex-col space-y-1.5">
                    <FormField 
                        control={form.control}
                        name="password"
                        render={({field}) =>(
                            <>
                                <FormLabel className='text-gray-500 text-sm'>
                                    Mot de passe
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field} 
                                        disabled={isPending}
                                        id="password" 
                                        type='password' 
                                        placeholder='Mot de passe *'/>
                                </FormControl>
                                <FormMessage/>
                            </>
                        )}>
                    </FormField>
                </div>
                <span className='font-normal text-xs mb-2'>
                    <Link href={"/"}>
                    Mot de passe oublié ?
                    </Link>
                </span>
                </div>
                <FormSuccess message={success as string}/>
                <FormError message={error as string}/>
                <Button className='mt-5 w-full hover:shadow-sm cursor-pointer'>
                Continuer
                </Button>
                <CardFooter className='text-xs mt-3'>{"Vous n'avez pas de compte ?"}
                <span>
                    <Link 
                        className='font-semibold ml-2' 
                        href={"/auth/register"}>
                    Inscription
                    </Link>
                </span>
                </CardFooter>
            </form>
        </Form>
      </CardAuth>
  );
}

export default CardLogin
