import { CardNewVerification } from "@/components/auth/card-new-verification";
import {
 Suspense,
} from "react";
import { BeatLoader } from "react-spinners";
const NewVerificationPage = () => {
    return(
        <Suspense fallback={<BeatLoader/>}>
            <CardNewVerification/>
        </Suspense>
    )
} 

export default NewVerificationPage;