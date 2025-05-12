
import { MainComponent } 
from "@/components/home/main-component"

import { CardHeadline } from "@/components/home/card-headline"
import { headlineData } from "@/data/data"

export const HeadLine = () => {
    return (
        <>
            <MainComponent
            title="A la une"
            moreInformationLabel="Plus d'article"
            moreInformationHref="/headline"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    }
                </div>
            </MainComponent>
        </>
    )
}