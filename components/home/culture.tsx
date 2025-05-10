import { MainComponent } from "@/components/home/main-component"
import { CardCulture } from "./card-culture"


export const Culture = () => {
    return (
        <>
            <MainComponent
                title="Culture"
                moreInformationHref="/culture"
                moreInformationLabel="Voir tout"
            >
                <div className="grid md:grid-cols-2 gap-4 w-full">
                    <CardCulture/>
                </div>
            </MainComponent>
        </>
    )
}