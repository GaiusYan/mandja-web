import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { headlineProps } from "@/data/data";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { 
    Avatar,
    AvatarFallback,

} from "@/components/ui/avatar";


const poppins = Poppins({
    weight:"100",
})

export const CardHeadline = ({
    title,
    imageUrl,
    author,
    authorAvatar,
    date,
    description,
}: headlineProps ) => {
    return (
        <div>
            <Card className="
                overflow-hidden 
                flex 
                flex-col 
                h-full
                hover:shadow-md 
                transition-shadow">
                    <CardHeader
                        className="
                            h-48 
                            bg-cover
                            bg-center
                            w-full"
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                        }}
                    >
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                        <CardTitle className={cn(poppins,"text-xl font-semibold mb-2")}>
                            {title}
                        </CardTitle>
                        <p className="text-gray-600 mb-4 flex-grow">
                            {description}
                        </p>
                    </CardContent>
                    <CardFooter className="flex items-center mt-auto pt-4 border-t">
                        <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>
                                {authorAvatar ? authorAvatar : author.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium">{author}</p>
                            <p className="text-xs text-gray-500">{date}</p>
                        </div>
                    </CardFooter>
            </Card>
        </div>
    );
}