import { Session } from "inspector/promises"
import { ProfileCard } from "./profile-card"


interface UserDetailsProps {
    user : Session | null,
}
export const UserDetails = (
    { user } : UserDetailsProps
) => {
    return (
        <>
            <ProfileCard/>
        </>
    )
}