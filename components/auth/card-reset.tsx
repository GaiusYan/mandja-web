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
import {  ResetSchema } from '@/schemas';
import {zodResolver } from "@hookform/resolvers/zod"
import { Form,FormControl,FormField, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { FormError } from '@/components/toast/FormError';
import { FormSuccess } from '../toast/FormSucess';

import { Reset } from '@/actions/reset';

function CardReset() {
    const [isPending,startTransition] = useTransition();
    const [error, setError] = useState<string >();
    const [success, setSuccess] = useState<string>();

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        }
    })



    const onSubmit = (values : z.infer<typeof ResetSchema>) => {
        setError("");
        setSuccess("");
       
        
        startTransition(() => {
            Reset(values).then((data) => {
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
          headerLabel="Mot de passe oublié ?">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 mb-4">
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
                
                </div>
                <FormSuccess message={success as string}/>
                <FormError message={error as string}/>
                <Button className='mt-5 w-full hover:shadow-sm cursor-pointer'>
                    Soumettre
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

export default CardReset;
