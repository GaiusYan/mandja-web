import { 
    Card, 
    CardContent } 
    from "@/components/ui/card";
import { Button } from "../ui/button";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '800'],
    display: 'swap',
})

const jetBrains_Mono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '800'],
    display: 'swap',
})



interface CardCarouselProps {
    url: string, 
    title: string,
    description: string,
    children: React.ReactNode,
}    

export const CardCarousel = ({
    url, 
    title,
    description,
    children
    }: CardCarouselProps) => {

    return (
        <Card className="w-full h-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">  
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                            backgroundImage: `url(${url})`,
                            backgroundPosition: "center",
                            
                        }}
                    >
                        <div className="
                            flex flex-col
                            justify-center
                            items-center h-full text-white">
                            <div className="">
                                <h1 className=
                                {cn("text-5xl font-bold mb-2",poppins)} >{title}</h1>
                                <div className={cn(jetBrains_Mono)}>{description}</div>
                                <Button  
                                    className="mt-4 cursor-pointer font-semibold">
                                    Découvrir
                                </Button>
                            </div>
                        </div>
                    </div>
            </CardContent>
                {children}
        </Card>
    );
}