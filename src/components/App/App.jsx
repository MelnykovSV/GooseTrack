import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Container from './App.styled';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from 'redux/auth/operations';
import { useEffect } from 'react';
import { getRefreshToken, getAccessToken } from 'redux/auth/authSlice';

const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const PublicRoute = lazy(() => import('../../PublicRoutes/PublicRoute'));
const PrivateRoute = lazy(() => import('../../PrivateRoutes/PrivateRoute'));
const AccountPage = lazy(() => import('../../pages/AccountPage/AccountPage'));
const Calendar = lazy(() => import('../../pages/Calendar/Calendar'));
const Statistics = lazy(() => import('../../pages/Statistics/Statistics'));
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));

export const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);
  const refreshToken = useSelector(getRefreshToken);

  useEffect(() => {
    if (!accessToken && !refreshToken) {
      return;
    }
    dispatch(getUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ModernNormalize />
      <h1>GooseTrack</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<SharedLayout />}>
              <Route path="account" element={<AccountPage />} />
              <Route path="calendar" element={<Calendar />}>
                <Route
                  path="month/:currentMonth"
                  element={<div>current month</div>}
                />
                <Route
                  path="day/:currentDay"
                  element={<div>current day</div>}
                />
              </Route>
              <Route path="statistics" element={<Statistics />} />
            </Route>
          </Route>

          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </Suspense>
    </Container>
  );
};
