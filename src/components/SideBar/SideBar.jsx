// import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { UserNav } from '../UserNav/UserNav';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  Container,
  LogoContainer,
  LogoImg,
  Logotext,
  LogOutBtn,
  CloseBtn,
} from './SideBar.styled';

export const SideBar = ({ onClose }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log('click');
    dispatch(logOut());
  };
  return (
    <Container>
      <LogoContainer>
        <LogoImg src="" alt="" />
        <Logotext>GooseTrack</Logotext>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </LogoContainer>
      <UserNav />
      <LogOutBtn onClick={logoutHandler}>log out</LogOutBtn>
      {/* <LogoutBtn  /> */}
    </Container>
  );
};
