
import 
{
    Avatar,
    AvatarImage,
    AvatarFallback,
}
from "@/components/ui/avatar";

interface AvatarProps {
    src: string;
    alt?: string;
}

export const AvatarComponent = ({ src, alt}: AvatarProps) => {
    return (
        <Avatar className="w-8 h-8" >
            <AvatarImage 
                src={src}
                alt={alt}/>
            <AvatarFallback>
                <span className="text-sm font-medium text-gray-500">{alt}</span>
            </AvatarFallback>
        </Avatar>
    );
}