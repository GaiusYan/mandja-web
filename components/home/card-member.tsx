

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import { CardMemberProps } from "@/data/data";


export const CardMember = ({
    author,
    authorAvatar,
    profession,
    contributionNumber
}: CardMemberProps) => {
    return(
        <div className="flex flex-row gap-3 items-center">
            <Avatar className="h-12 w-12">
                <AvatarImage src={authorAvatar} alt={author}/>
                <AvatarFallback>{author ? author.charAt(0) : "W"}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <h5 className="font-medium">{author}</h5>
                <span className="text-sm text-gray-600">{profession}</span>
                <span className="text-xs text-gray-500">{contributionNumber}</span>
            </div>
        </div>
    )
}