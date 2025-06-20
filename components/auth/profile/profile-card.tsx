"use client";
import {  CardFooter} from "@/components/ui/card";
import { CardContentUserProfile } from "./card-content-user-profile";



export const ProfileCard = () => {
    return (
        <CardContentUserProfile
            handleActionButton={() => alert("Hello world")} 
            cardTittleLabel="Informations du profil"
            cardActionLabel="Modifier les informations du profil">
                <div>
                    <div
                        className={"md:grid-cols-3 grid grid-rows-1 border-b-0 border-t p-4 hover:bg-gray-100 hover:cursor-pointer"}>
                        <div className="text-sm text-gray-500">Date de naissance</div>
                        <div className="font-semibold text-sm">12/06/2000</div>
                        <div className="text-sm text-gray-500 hidden md:block">Votre date de naissance est utilisé pour les paramètres de sécurité de votre compte</div>
                    </div>
                    <div
                        className={"md:grid-cols-3 grid grid-rows-1 border-b-0 border-t p-4 hover:bg-gray-100 hover:cursor-pointer"}>
                        <div className="text-sm text-gray-500">Pays ou region</div>
                        <div className="font-semibold text-sm">République centrafricaine</div>
                        <div className="text-sm text-gray-500 hidden md:block">Votre pays et région sont utilisés pour les paramètres de confidentialité</div>
                    </div>
                    <div
                        className={"md:grid-cols-3 grid grid-rows-1 border-b-0 border-t p-4 hover:bg-gray-100 hover:cursor-pointer"}>
                        <div className="text-sm text-gray-500">Langue</div>
                        <div className="font-semibold text-sm">{"Sango (République centrafricaine)"}</div>
                        <div className="text-sm text-gray-500 hidden md:block">Me demander avant de traduire</div>
                    </div>
                    <div
                        className={"md:grid-cols-3 grid grid-rows-1 border-b border-t p-4 hover:bg-gray-100 hover:cursor-pointer"}>
                        <div className="col-span-1 text-sm text-gray-500">Formats régionaux</div>
                        <div className="col-span-2 font-semibold text-sm w-full">{"Sango (France); 31/08/2000; 01:01 - 23:59"}</div>
                    </div>
                </div>
            <CardFooter className="flex flex-row">
                <div className="text-sm text-gray-500">Rubliques associées</div>
            </CardFooter>
        </CardContentUserProfile>
    );
}