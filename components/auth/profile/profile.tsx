import {
    InformationTitle
} from "@/components/auth/profile/information-title";  
import { CardUserProfile } from "./card-user-profile";
import { UserDetails } from "./user-details";
 
export const Profile = () => {
    return (
        <div className="flex flex-col mt-4 p-7 sm:p-9">
            <InformationTitle/>
            <CardUserProfile/>
            <UserDetails/>
        </div>
    );
} 