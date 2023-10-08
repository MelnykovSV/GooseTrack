import { UserAvatarWrap } from '../UserAvatarWrap/UserAvatarWrap';
import { UserForm } from '../UserForm/UserForm';
import { UserSectionWrap } from './UserSection.styled';
import { TestForm } from 'components/TestForm/TestForm';

export const UserSection = () => {
  return (
    <UserSectionWrap>
      <UserAvatarWrap />
      <UserForm />
      <TestForm />
    </UserSectionWrap>
  );
};
