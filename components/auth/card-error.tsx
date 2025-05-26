import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "../ui/button";
export const CardError = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Card>
                <CardHeader className='flex flex-col justify-center items-center mt-5 w-[400px]'>
                    <CardTitle className='text-[#7E69AB]'>Erreur</CardTitle>
                    <CardDescription>
                        {"Une erreur s'est produite. Veuillez réessayer plus tard."}</CardDescription>
                </CardHeader>
                <CardContent className='flex justify-center items-center'>
                    <Button>
                        {"Retour à l'acceuil"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}