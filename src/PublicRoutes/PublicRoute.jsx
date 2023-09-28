import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  console.log(token);
  return !token ? (
    <Outlet />
  ) : (
    <Navigate to={location.state ? location.state : '/account'} />
  );
};

export default PublicRoute;
