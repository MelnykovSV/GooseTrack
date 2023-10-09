import { UserAvatarWrap } from '../UserAvatarWrap/UserAvatarWrap';
import { UserSectionWrap } from './UserSection.styled';
import { TestForm, UserForm } from 'components/UserSectionWrap/UserForm/UserForm';

export const UserSection = () => {
  return (
    <UserSectionWrap>
      <UserAvatarWrap />
      {/* <UserForm /> */}
      {/* <TestForm /> */}
    <UserForm/>
    </UserSectionWrap>
  );
};
