"use client";

import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {FcGoogle} from "react-icons/fc";
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import 
{
  DEFAULT_LOGIN_REDIRECT
}
from "@/routes";



interface CardAuthProps {
    children: React.ReactNode,
    showSocial?: boolean,
    headerTitle:string,
    headerLabel: string
}


export const CardAuth = ({
    children,
    showSocial,
    headerTitle,
    headerLabel,
} : CardAuthProps) => {


    const onClick = (provider: "google")  => {
      signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT
      });
    };
    return (
      <div className='flex justify-center items-center min-h-screen'>
      <Card className='w-[350px] shadow-lg'>
        <CardHeader className='flex flex-col justify-center items-center mt-5'>
          <CardTitle className='text-[#7E69AB]'>{headerTitle}</CardTitle>
          <CardDescription>{headerLabel}</CardDescription>
          {
           showSocial && (
            <Button className='mt-5 w-full hover:border-gray-200 hover:shadow-sm cursor-pointer'
              onClick={() => onClick("google")}
              size={"icon"} 
              variant={"outline"}>
              <FcGoogle/>
              Continuer avec google
            </Button>
            )
          }
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
    )
}