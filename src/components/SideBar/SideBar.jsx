import { UserNav } from '../UserNav/UserNav';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import Button from '../Button/Button';
import LogoImage from '../../images/SideBar/Goose.png';
import icons from '../../assets/images/icons.svg';
import {
  Container,
  LogoContainer,
  LogoImg,
  CloseBtn,
  LogoText,
  LogoPiece,
  CloseIcon,
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
        <LogoText>
          G<LogoPiece>oo</LogoPiece>seTrack
        </LogoText>
        <CloseBtn onClick={onClose}>
          <CloseIcon>
            <use href={`${icons}#icon-close`}></use>
          </CloseIcon>
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
