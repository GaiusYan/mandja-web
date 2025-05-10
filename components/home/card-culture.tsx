import { CardCarouselProps } from "@/data/data"
import React from "react";
import { 
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
 } from "@/components/ui/card"
import { cn } from "@/lib/utils";




export const CardCulture = (
    {
    name,
    icon,
    color,
    description,
    buttonUrl,
    buttonLabel,
    }: CardCarouselProps, 
) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">
                    <div className=
                        {cn(
                            "flex items-center justify-center p-4 mb-4 rounded-full w-16 h-16 text-white",
                            color
                        )}>
                        {icon && React.createElement(icon)}
                    </div>
                </CardTitle>
                <CardDescription>
                    <h3 className="text-xl font-semibold mb-2">
                        {name}
                    </h3>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600">
                    {description}
                </p>
            </CardContent>
            <div className="">
                <a href={buttonUrl}>
                    {buttonLabel}
                </a>
            </div>
        </Card>
    )
}