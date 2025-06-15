import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./Separator";

/* interface ProfileCardProps {
    title: string,
    updateInformationLabel : string,

}
 */

export const ProfileCard = () => {
    return (
        <Card className="flex w-full mt-4 shadow-xs">
            <CardHeader>
                <CardTitle>Tittle</CardTitle>
                <CardAction>
                    <Button 
                        className="text-blue-400" 
                        variant={"link"} 
                    >Modifier les informations de compte</Button>
                </CardAction>
            </CardHeader>
            <Separator/>
            <div className="grid grid-rows-3 md:grid-cols-3">
                <div>Date de naissance</div>
                <div>12/06/2003</div>
                <div className="text-sm text-gray-500">Votre date de naissance est utilisé pour les paramètres de sécurité de votre compte</div>
            </div>
            <Separator/>
        </Card>
    );
}