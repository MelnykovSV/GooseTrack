// import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { UserNav } from '../UserNav/UserNav';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import Button from '../Button/Button';
import LogoImage from '../../images/SideBar/GOOSE_1.png';
import CloseIcon from '../../images/SideBar/x-close.svg';
import {
  Container,
  LogoContainer,
  LogoImg,
  Logotext,
  LogOutBtn,
  CloseBtn,
} from './SideBar.styled';
import { ReactComponent as LogoutBtnIcon } from '../../icons/SideBarIcons/log-out-01.svg';

export const SideBar = ({ onClose }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log('click');
    dispatch(logOut());
  };
  return (
    <Container>
      <LogoContainer>
        <LogoImg src={LogoImage} alt="logo" />
        <Logotext>GooseTrack</Logotext>
        <CloseBtn onClick={onClose}>
          <img src={CloseIcon} alt="close" />
        </CloseBtn>
      </LogoContainer>
      <UserNav />
      <Button
        onClick={logoutHandler}
        style={{
          maxWidth: '140px',
          maxHeight: '56px',
          borderRadius: '16px',
        }}
      >
        Log out
        <LogoutBtnIcon
          style={{
            marginLeft: '12px',
          }}
        />
      </Button>
    </Container>
  );
};
