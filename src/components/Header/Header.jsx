import { useEffect, useState } from 'react';
import { AddFeedbackBtn } from '../AddFeedbackBtn/AddFeedbackBth';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFeedbackModal';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';
import { HeaderWrapper, PageTitle, UserWrapper } from './Header.styled';
import useResize from 'utils/useResize';

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
        <PageTitle>
          {size[0] < 1440 ? (
            <button onClick={onToggle}>=</button>
          ) : (
            <p>{activePage}</p>
          )}
        </PageTitle>
        <UserWrapper>
          <AddFeedbackBtn onFeedbackBtn={handleOpen} />
          <ThemeToggler />
          <UserInfo />
          <AddFeedbackModal open={open} onClose={handleClose} />
        </UserWrapper>
      </HeaderWrapper>
    </>
  );
};
