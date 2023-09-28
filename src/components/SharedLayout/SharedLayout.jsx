import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
