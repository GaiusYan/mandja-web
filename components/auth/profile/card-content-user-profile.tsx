import { Button } from "@/components/ui/button"
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react";

interface CardContentUserProfileProps  {
    cardTittleLabel: string;
    cardActionLabel: string;
    children: ReactNode,
    handleActionButton: () => void
}

export const CardContentUserProfile = ({
    cardTittleLabel,
    cardActionLabel,
    children,
    handleActionButton
} : CardContentUserProfileProps) => {
    return (
        <Card className="flex w-full mt-4 shadow-xs">
            <CardHeader>
                <CardTitle>{cardTittleLabel}</CardTitle>
                <CardAction>
                    <Button 
                        onClick={handleActionButton}
                        className="text-blue-400" 
                        variant={"link"} 
                    >{cardActionLabel}</Button>
                </CardAction>
            </CardHeader>
            {children}
        </Card>
    )
}