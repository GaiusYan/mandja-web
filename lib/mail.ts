import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
    email : string,
    token : string) => {

    const confirmationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/new-verification?token=${token}`;
    const {error} =  await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirmer votre adresse e-mail",
        html: `<p><strong>Salut,</strong><a href="${confirmationLink}">cliquez ici</a> pour confirmer votre compte utilisateur</p>`,
    });


    if (error) {
        console.log("Error sending email:", error);
        
        return {error: error};
    }
}


export const sendPasswordResetEmail = async (
    email : string,
    token : string) => {

    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/new-password?token=${token}`;
    const {error} =  await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Initialiser votre mot de passe",
        html: `<p><strong>Salut,</strong><a href="${resetLink}">cliquez ici</a> pour rénitialiser votre mot de passe</p>`,
    });


    if (error) {
        console.log("Error sending email:", error);
        
        return {error: error};
    }
}