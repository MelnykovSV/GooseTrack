import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};
