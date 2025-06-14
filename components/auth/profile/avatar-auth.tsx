import { auth } from "@/auth";
import { AvatarComponent } from "@/components/home/avatar"
import { getInitials } from "@/utils/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from "@/components/ui/tooltip";

export const AvatarAuth = async () => {
    const currentUser = await auth();

    return (
        <Tooltip>
            <TooltipTrigger >
                <div className="p-2 flex flex-row gap-1 ">
                    <AvatarComponent
                        size="w-8 h-8"
                        src={currentUser?.user.image as string} 
                        alt={getInitials(currentUser?.user.name as string) as string}/>
                    <div className="flex flex-col text-xs cursor-pointer">
                        <h5 
                        className="
                            font-semibold
                            text-justify
                            truncate 
                            w-31">
                            {currentUser?.user.name}
                        </h5>
                        <span className="text-justify text-gray-500">
                            {currentUser?.user.email ?
                            currentUser?.user.email :
                            "Email non renseigné"}
                        </span>
                    </div>
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>Gaïus Ocklefort Yan-bena</p>
            </TooltipContent>
        </Tooltip>
    );
}