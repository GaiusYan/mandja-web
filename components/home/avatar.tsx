
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
    size: string;
}

export const AvatarComponent = ({ src, alt, size}: AvatarProps) => {
    return (
        <Avatar className={size} >
            <AvatarImage 
                src={src}
                alt={alt}/>
            <AvatarFallback>
                <span className="text-sm font-medium text-gray-500">{alt}</span>
            </AvatarFallback>
        </Avatar>
    );
}