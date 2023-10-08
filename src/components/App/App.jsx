import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Container from './App.styled';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthError } from 'redux/auth/authSlice';
import { getTasksError } from 'redux/tasks/tasksSlice';
import { getReviewsError } from 'redux/reviews/reviewsSlice';
import { ToastContainer, toast } from 'react-toastify';
import { CalendarDatepickerPage } from 'pages/CalendarDatepicerPage/CalendarDatepickerPage';
import { DayTasksListPage } from 'pages/DayTasksListPage/DayTasksListPage';
import { ThemeProvider } from '@mui/material/styles';
import { useThemeContext } from 'theme/ThemeContextProvider';
import { getIsRefreshing } from 'redux/auth/authSlice';
import { refresh } from 'redux/auth/operations';
import { Loader } from 'components/Loader/Loader';

const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const PublicRoute = lazy(() => import('../../PublicRoutes/PublicRoute'));
const PrivateRoute = lazy(() => import('../../PrivateRoutes/PrivateRoute'));
const AccountPage = lazy(() => import('../../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() =>
  import('../../pages/CalendarPage/CalendarPage')
);
const Statistics = lazy(() =>
  import('../../pages/StatisticsPage/StatisticsPage')
);
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const authError = useSelector(getAuthError);
  const tasksError = useSelector(getTasksError);
  const reviewsError = useSelector(getReviewsError);

  const { theme } = useThemeContext();

  useEffect(() => {
    dispatch(refresh());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authError) {
      console.log(authError);
      toast.error(authError.message);
    }
  }, [authError]);

  useEffect(() => {
    if (tasksError) {
      console.log(tasksError);
      toast.error(tasksError.message);
    }
  }, [tasksError]);

  useEffect(() => {
    if (reviewsError) {
      console.log(reviewsError);
      toast.error(reviewsError.message);
    }
  }, [reviewsError]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ModernNormalize />
        <Suspense fallback={<Loader />}>
          {!isRefreshing ? (
            <Routes>
              <Route element={<PublicRoute />}>
                <Route path="/" element={<MainPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegistrationPage />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route element={<SharedLayout />}>
                  <Route path="account" element={<AccountPage />} />
                  <Route path="calendar" element={<CalendarDatepickerPage />}>
                    <Route path="month/:month" element={<CalendarPage />} />
                    <Route path="day/:day" element={<DayTasksListPage />} />
                  </Route>
                  <Route path="statistics" element={<Statistics />} />
                </Route>
              </Route>

              <Route path="*" element={<div>not found</div>} />
            </Routes>
          ) : (
            <Loader />
          )}
        </Suspense>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};
