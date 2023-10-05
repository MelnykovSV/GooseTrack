import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { BodyContent, MainWrap, HeaderWrap } from './SharedLayout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken, getRefreshToken } from 'redux/auth/authSlice';
import { getUserData } from 'redux/auth/operations';
import { SideBar } from 'components/SideBar/SideBar';
import useResize from 'utils/useResize';

export const SharedLayout = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);
  const refreshToken = useSelector(getRefreshToken);

  const [isOpen, setOpen] = useState(false);
  const size = useResize();

  // const handleOpenClick = useCallback(e => {
  //   e.preventDefault();
  //   setOpen(true);
  // }, []);

  const handleCloseClick = useCallback(e => {
    e.preventDefault();
    setOpen(false);
  }, []);

  const handleToggleClick = useCallback(
    e => {
      e.preventDefault();
      setOpen(!isOpen);
    },
    [isOpen]
  );

  useEffect(() => {
    if (!accessToken && !refreshToken) {
      return;
    }
    dispatch(getUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleEscKeyPress = e => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscKeyPress);
    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, []);

  return (
    <main>
      <MainWrap>
        {size[0] < 1440 ? (
          isOpen && <SideBar onClose={handleCloseClick}>sideMenu</SideBar>
        ) : (
          <SideBar onClose={handleCloseClick}>sideMenu</SideBar>
        )}
        <HeaderWrap >
          <Header onToggle={handleToggleClick} />
          <BodyContent>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </BodyContent>
        </HeaderWrap>
      </MainWrap>
    </main>
  );
};
