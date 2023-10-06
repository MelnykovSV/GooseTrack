import { useEffect, useState } from 'react';
import { AddFeedbackBtn } from '../AddFeedbackBtn/AddFeedbackBth';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFeedbackModal';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';
import BurgerIcon from '../../images/SideBar/menu-01.svg';
import {
  HeaderWrapper,
  // PageTitle,
  UserWrapper,
  BurgerBtn,
  PageTitleActive,
  // MoonIcon,
} from './Header.styled';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import useResize from 'utils/useResize';
// import { CloseBtn } from 'components/SideBar/SideBar.styled';

export const Header = ({ onToggle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [activePage, setActivePage] = useState('');
  const size = useResize();

  useEffect(() => {
    const path = window.location.pathname;
    let pageTitle = '';

    switch (path) {
      case '/GooseTrack/account':
        pageTitle = 'User Profile';
        break;
      case '/GooseTrack/calendar':
        pageTitle = 'Calendar';
        break;
      case '/GooseTrack/statistics':
        pageTitle = 'Statistics';
        break;
      default:
        pageTitle = '';
    }
    setActivePage(pageTitle);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <div>
          {size[0] < 1440 ? (
            <BurgerBtn onClick={onToggle}>
              <img src={BurgerIcon} alt="close" />
            </BurgerBtn>
          ) : (
            <PageTitleActive>{activePage}</PageTitleActive>
          )}
        </div>
        <UserWrapper>
          <AddFeedbackBtn onFeedbackBtn={handleOpen} />
          <ThemeToggler />
          {/* <button>
            <MoonIcon />
          </button> */}
          <ThemeSwitcher />
          <UserInfo />
          <AddFeedbackModal open={open} onClose={handleClose} />
        </UserWrapper>
      </HeaderWrapper>
    </>
  );
};
