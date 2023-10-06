import { UserAvatarWrap } from "../UserAvatarWrap/UserAvatarWrap"
import { UserForm } from "../UserForm/UserForm"
import { UserSectionWrap } from "./UserSection.styled"

export const UserSection = () => {
    return (
        <UserSectionWrap>
            <UserAvatarWrap />
            <UserForm/>
        </UserSectionWrap>
    )
}