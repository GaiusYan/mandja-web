import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselPrevious,
    CarouselNext,

} 
from "@/components/ui/carousel"
import { CardCarousel } from "@/components/home/card-carousel"
import { carouselData } from "@/data/data"


export const MainCarousel = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-100 to-indigo-100 text-white w-full">
            <Carousel className="container mx-auto max-w-7xl">
                <CarouselContent>
                    {carouselData.map((carousel,index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-[400px] w-full p-1">
                               <CardCarousel 
                                    url={carousel.url}
                                    description={carousel.description}
                                    title={carousel.title}>
                                    <CarouselPrevious className="left-4" />
                                    <CarouselNext className="right-4" /> 
                                </CardCarousel>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}