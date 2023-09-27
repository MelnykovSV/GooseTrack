import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};
