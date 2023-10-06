import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSlice';
import { UserImg, UserInfoWrapper, UserName } from './UserInfo.styled';
// import { Avatar } from 'components/Avatar/Avatar';

export const UserInfo = () => {
  const user = useSelector(getUser);

  return (
    <UserInfoWrapper>
      <UserName>{user.userName}</UserName>
      {/* <Avatar
        style={{
          width: '32px',
          height: '32px',
        }}
      /> */}
      <UserImg src={user.avatarUrl} alt="user" />
    </UserInfoWrapper>
  );
};
