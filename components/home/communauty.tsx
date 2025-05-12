import { 
    MainComponent
} from 
"@/components/home/main-component";
import { CardCommunauty } from "@/components/home/card-communauty";

export const Communauty = () => {
    return (
        <MainComponent 
            moreInformationHref="/communauty"
            moreInformationLabel="Rejoindre"
            title="Notre communauté">
            {
                
            <CardCommunauty/>
            }
            
        </MainComponent>
    )
}