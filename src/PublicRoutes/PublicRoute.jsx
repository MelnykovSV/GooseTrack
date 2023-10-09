import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getIsLoggedIn} from 'redux/auth/authSlice';

const PublicRoute = () => {

  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();
  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={location.state ? location.state : '/account'} />
  );
};

export default PublicRoute;
