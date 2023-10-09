import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshing } from 'redux/auth/authSlice';

const PrivateRoute = () => {

  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const location = useLocation();
  return isLoggedIn && !isRefreshing ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={location} />
  );
};

export default PrivateRoute;
