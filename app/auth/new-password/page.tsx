import CardNewPassword from "@/components/auth/card-new-password";
import { Suspense } from 'react';
import {
BeatLoader
} from "react-spinners";

const NewPasswordPage = () => {
    return (
        <Suspense fallback={<BeatLoader/>}>
            <CardNewPassword/>
        </Suspense>
    )
}

export default NewPasswordPage;