import { Card} from "@/components/ui/card";
import { AvatarUser } from "../profile/avatar-user";
import { CardHeadline } from "@/components/home/card-headline";
import { headlineData } from "@/data/data"
import { auth } from "@/auth";
import { CreatePublication } from "./create-publication";
import Link from "next/link";
export const Publication = async () => {

    const currentUser = await auth();
    return (
            <div className="flex flex-col mt-4 p-4 md:p-7">
                <h1 className="text-2xl font-bold mb-4">Publication</h1>
                <div className="">
                    <Card className="w-full mb-4">
                        <div className="
                            flex md:flex-row 
                            justify-between
                            items-center
                            gap-4
                            p-4
                            border-b-1">
                            <div className="flex flex-row gap-2">
                               <Link href={"/auth/profile"} className="cursor-pointer">
                                    <AvatarUser size="h-10 w-10"/>
                               </Link>
                                
                            </div>
                            <div className="
                                        w-full
                                        flex 
                                        items-center
                                        border-0
                                        bg-gray-200 
                                        rounded-3xl p-4
                                        text-gray-500 cursor-pointer h-10">
                                    <p className="truncate w-30 md:w-full">
                                        Quoi de neuf ? {currentUser?.user.name}
                                    </p>
                                </div>
                            <CreatePublication/>
                        </div>
                        <div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            headlineData.map((article,index) => (
                                <CardHeadline 
                                    imageUrl={article.imageUrl}
                                    title={article.title}
                                    author={article.author}
                                    authorAvatar={article.authorAvatar}
                                    date={article.date}
                                    description={article.description}
                                    key={index}/>
                            ))
                        };
                    </div>
                </div>
            </div>

    )
}