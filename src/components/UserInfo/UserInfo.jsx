import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSlice';
import { AvatarWrapper, UserInfoWrapper, UserName } from './UserInfo.styled';
import { Avatar } from 'components/Avatar/Avatar';

export const UserInfo = () => {
  const user = useSelector(getUser);

  return (
    <UserInfoWrapper>
      <UserName>{user.userName}ddddddd</UserName>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
    </UserInfoWrapper>
  );
};
