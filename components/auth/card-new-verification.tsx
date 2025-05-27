"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { CardAuth } from "./card-auth";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "../toast/FormError";
import { FormSuccess } from "../toast/FormSucess";
import Link from "next/link";

export const CardNewVerification = () => {

    const [error, setError] = useState<string |undefined>();
    const [success, setSuccess] = useState<string |undefined>();

    const token = useSearchParams().get("token");

    const onSubmit = useCallback(() => {

        if (success || error) return;

        if (!token) {
            setError("Aucun token");
            return;
        };
        newVerification(token as string).then((data) => {
            setSuccess(data.success);
            setError(data.error);
        })
        .catch(() => {
            setError("Erreur survenue...");
        })
    },[token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardAuth
            headerLabel="Confirmer votre identité"
            headerTitle="Verification">
                { !success && !error && (
                    <div className="flex items-center w-full justify-center mb-2">
                        <BeatLoader/>
                    </div>
                )}
                <FormSuccess message={success || ""}/>
                {
                    !success && (
                        <FormError message={error || ""}/>
                    )
                }
                <Link href={"/auth"} className="w-full flex mt-4 text-xs justify-center font-semibold">
                    Connectez-vous maintenant
                </Link>
        </CardAuth>
    );
}