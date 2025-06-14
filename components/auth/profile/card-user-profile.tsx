
import { auth } from "@/auth";
import { AvatarComponent } from "@/components/home/avatar";
import { Button } from "@/components/ui/button";
import {

    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { getInitials } from "@/utils/utils";
import { Separator } from "@radix-ui/react-menubar";
export const CardUserProfile = async () => {
     const currentUser = await auth();
    return (
        <Card className="flex w-full mt-4">
            <CardContent className="flex sm:flex-row gap-5 w-full flex-col">
                <AvatarComponent
                    size="lg:w-40 lg:h-40 w-20 h-20"
                    src={currentUser?.user.image as string} 
                    alt={getInitials(currentUser?.user.name as string) as string}/>
                
                <CardDescription className="
                    flex
                    flex-col
                    gap-4 md:w-1/2 w-full">
                    <span className="">
                        {"Personnalizer votre compte à l'aide d'une photo, Votre photo de profil appaîtra sur les applications et appareils qui utilisent votre compte Mandja web."}
                    </span>
                    <Button 
                        className="text-gray-700
                        w-[100px]"
                        size={"default"} 
                        variant={"outline"}>
                        Changer
                    </Button>
                </CardDescription>
            </CardContent>
            <Separator className="w-full mb-4"/>
        </Card>
    )
}