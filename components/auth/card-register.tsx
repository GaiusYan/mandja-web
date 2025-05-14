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
import { RegisterSchema } from '@/schemas';
import {zodResolver } from "@hookform/resolvers/zod"
import { Form,FormControl,FormField, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { FormError } from '@/components/toast/FormError';
import { FormSuccess } from '../toast/FormSucess';
import { Register } from '@/actions/register';


function CardRegister() {

    const [isPending,startTransition] = useTransition();
    const [error, setError] = useState<string >();
    const [success, setSuccess] = useState<string>();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password:"",
            name: ""
        }
    })



    const onSubmit = (values : z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {

            
            
            
            Register(values).then((data) => { 
                
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
          showSocial={false}
          headerTitle='Bienvenue'
          headerLabel="Inscrivez-vous à mandja-web">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                 <div className="flex flex-col space-y-1.5">
                    <FormField 
                        control={form.control}
                        name={"name"}
                        render={({field}) =>(
                            <>
                                <FormLabel className='text-gray-500 text-sm'>
                                    Nom complet
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field} 
                                        disabled={isPending}
                                        id="name" 
                                        type='text' 
                                        placeholder='Nom complet *'/>
                                </FormControl>
                                <FormMessage/>
                            </>
                        )}>
                    </FormField>
                    
                </div>
                <div className="flex flex-col space-y-1.5">
                    <FormField 
                        control={form.control}
                        name={"email"}
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
                        name={"password"}
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
                
                </div>
                <div className='mt-2'>
                    <FormSuccess message={success as string}/>
                    <FormError message={error as string}/>
                    <Button
                        type='submit' 
                        className='mt-5 w-full hover:shadow-sm cursor-pointer'>
                        {"S'inscrire"}
                    </Button>
                </div>
                <CardFooter className='text-xs mt-3'>{"J'ai déjà un compte ?"}
                <span>
                    <Link 
                        className='font-semibold ml-2' 
                        href={"/auth"}>
                    Connexion
                    </Link>
                </span>
                </CardFooter>
            </form>
        </Form>
      </CardAuth>
  );
}

export default CardRegister;
