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
import {  NewPasswordSchema } from '@/schemas';
import {zodResolver } from "@hookform/resolvers/zod"
import { Form,FormControl,FormField, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { FormError } from '@/components/toast/FormError';
import { FormSuccess } from '../toast/FormSucess';
import { useSearchParams } from 'next/navigation';
import { newPassword } from '@/actions/new-password';

function CardNewPassword() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [isPending,startTransition] = useTransition();
    const [error, setError] = useState<string >();
    const [success, setSuccess] = useState<string>();

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        }
    })



    const onSubmit = (values : z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");
       
        
        startTransition(() => {
            newPassword(values, token).then((data) => {
                console.log(data);
                
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
          headerLabel="Saisir le nouveau mot de passe">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 mb-4">
                    <FormField 
                        control={form.control}
                        name="password"
                        render={({field}) =>(
                            <>
                                <FormLabel className='text-gray-500 text-sm'>
                                    Mot de passe *
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field} 
                                        disabled={isPending}
                                        id="password" 
                                        type='password' 
                                        placeholder='******'/>
                                </FormControl>
                                <FormMessage/>
                            </>
                        )}>
                    </FormField>
                    
                </div>
                
                </div>
                <FormSuccess message={success as string}/>
                <FormError message={error as string}/>
                <Button className='mt-5 w-full hover:shadow-sm cursor-pointer'>
                    Soumettre
                </Button>
                <CardFooter className='text-xs mt-3 items-center justify-center'>
                    
                <span>
                    <Link 
                        className='font-semibold ml-2' 
                        href={"/auth/register"}>
                    Retour au menu
                    </Link>
                </span>
                </CardFooter>
            </form>
        </Form>
      </CardAuth>
  );
}

export default CardNewPassword;
