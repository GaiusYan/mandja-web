import { CardCarouselProps } from "@/data/data"
import React from "react";
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from "@/components/ui/card"



interface CardCultureProps  {
    children: React.ReactNode;
}


export const CardCulture = (
    {
    name,
    icon,
    color,
    description,
    }: CardCarouselProps, 
    children: CardCultureProps
) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">
                    {icon}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}