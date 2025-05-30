import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
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
                        <Link href={"/"}>
                            {"Retour à l'acceuil"}
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}