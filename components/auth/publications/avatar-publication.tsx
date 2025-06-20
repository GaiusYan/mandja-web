import { auth } from "@/auth";
import { AvatarComponent } from "@/components/home/avatar";
import { getInitials } from "@/utils/utils";


export const AvatarPublication = async () => {

    const currentUser = await auth();
    return (
        <div className="p-2 flex flex-row gap-1 ">
                    <AvatarComponent
                        size="w-8 h-8"
                        src={currentUser?.user.image as string} 
                        alt={getInitials(currentUser?.user.name as string) as string}/>
                        <div className="
                            flex
                            flex-col
                            text-xs
                            items-center
                            cursor-pointer">
                            <h5 className="
                                    font-semibold
                                    text-justify
                                    truncate 
                                    w-31">
                                    {currentUser?.user.name}
                            </h5>
                        </div>
                </div>
    );
}