import { 
    Card, 
    CardContent } 
    from "@/components/ui/card";
import { Button } from "../ui/button";


interface CardCarouselProps {
    url: string, 
    title: string,
    description: string,
    hrefButton?: string,
    children: React.ReactNode,
}    

export const CardCarousel = ({
    url, 
    title,
    description,
    hrefButton,
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
                                <h1 className="text-5xl font-bold mb-2">{title}</h1>
                                <div>{description}</div>
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