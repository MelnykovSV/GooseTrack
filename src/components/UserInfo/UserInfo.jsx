import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSlice';
import { UserImg, UserInfoWrapper, UserName } from './UserInfo.styled';

export const UserInfo = () => {
  const user = useSelector(getUser);

  return (
    <UserInfoWrapper>
      <UserName>{user.userName}ddddddd</UserName>
      <UserImg src={user.avatarUrl} alt="user" />
    </UserInfoWrapper>
  );
};
