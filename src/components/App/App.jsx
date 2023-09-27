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

export const App = () => {
  return (
    <Container>
      <ModernNormalize />
      <h1>GooseTrack</h1>

      <Suspense>
        <Routes>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="account"
              element={
                <PrivateRoute>
                  <AccountPage />
                </PrivateRoute>
              }
            />
            <Route
              path="calendar"
              element={
                <PrivateRoute>
                  <Calendar />
                </PrivateRoute>
              }
            />
            <Route
              path="statistics"
              element={
                <PrivateRoute>
                  <Statistics />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
