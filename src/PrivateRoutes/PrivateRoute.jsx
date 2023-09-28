import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  return token ? <Outlet /> : <Navigate to="/login" state={location} />;
};
