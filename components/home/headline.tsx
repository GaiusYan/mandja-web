
import { MainComponent } 
from "@/components/home/main-component"


export const HeadLine = () => {
    return (
        <>
            <MainComponent
            title="A la une"
            moreInformationLabel="Plus d'article"
            moreInformationHref="/headline"
            >
                <p>
                    More information
                </p>
            </MainComponent>
        </>
    )
}