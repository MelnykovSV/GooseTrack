import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Container from './App.styled';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { PublicRoute } from 'PublicRoutes/PublicRoute';
import { PrivateRoute } from 'PrivateRoutes/PrivateRoute';
import { AccountPage } from 'pages/AccountPage/AccountPage';
import { Calendar } from 'pages/Calendar/Calendar';
import { Statistics } from 'pages/Statistics/Statistics';
import { MainPage } from 'pages/MainPage/MainPage';

export const App = () => {
  return (
    <Container>
      <ModernNormalize />
      <h1>GooseTrack</h1>

      <Suspense>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<SharedLayout />}>
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
