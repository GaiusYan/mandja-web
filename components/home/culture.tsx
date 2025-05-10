import { MainComponent } from "@/components/home/main-component"
import { CardCulture } from "./card-culture"
import { cultureCategorie } from "@/data/data"


export const Culture = () => {
    return (
        <>
            <MainComponent
                title="Culture"
                moreInformationHref="/culture"
                moreInformationLabel="Voir tout"
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {
                        cultureCategorie.map((categorie,index) => (
                            <CardCulture
                                icon={categorie.icon}
                                key={index}
                                buttonLabel="Explorer"
                                name={categorie.name}
                                color={categorie.color}
                                description={categorie.description}
                            />
                        ))
                    }
                </div>
            </MainComponent>
        </>
    )
}