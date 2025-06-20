"use client";
import { CardFooter } from "@/components/ui/card"
import { CardContentUserProfile } from "./card-content-user-profile"



export const AccountInfo = () => {
    return (
        <CardContentUserProfile
            handleActionButton={() => alert("Hello world")} 
            cardTittleLabel="Information sur le compte"
            cardActionLabel="Modifier les informations du compte">
                <div>
                    <div
                        className={"md:grid-cols-4 grid grid-rows-1 border-b-0 border-t p-4"}>
                        <div className="text-sm text-gray-500">Adresse e-mail</div>
                        <div className="font-semibold text-sm md:truncate md:w-[100px] lg:">gaiusyanbena11@gmail.com</div>
                        <div className="text-sm text-gray-500 hidden md:block">
                            {"L'adresse e-mail que vous utilisez pour vous connecter à votre compte mandja-web"}
                        </div>
                        <div className="text-sm hidden md:block text-blue-500">Préférence de communication</div>
                    </div>
                    <div
                        className={"md:grid-cols-4 grid grid-rows-1 border-b border-t p-4"}>
                        <div className="text-sm text-gray-500">Pays ou region</div>
                        <div className="font-semibold text-sm">République centrafricaine</div>
                        <div className="text-sm text-gray-500 hidden md:block">Votre pays et région sont utilisés pour les paramètres de confidentialité</div>
                    </div>
                </div>
            <CardFooter className="flex flex-row gap-4">
                <div className="text-sm text-blue-500 cursor-pointer">Fermer le compte</div>
                <div className="text-sm text-blue-500 cursor-pointer">Modifier les informations</div>
                <div className="text-sm text-blue-500 cursor-pointer">Rubliques associées</div>
            </CardFooter>
        </CardContentUserProfile>
    )
}