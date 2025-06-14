import {
    InformationTitle
} from "@/components/auth/profile/information-title";  
import { CardUserProfile } from "./card-user-profile";
 
export const Profile = () => {
    return (
        <div className="flex flex-col mt-4 p-7 sm:p-9">
            <InformationTitle/>
            <CardUserProfile/>
        </div>
    );
} 