import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

const PrivateRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  return token ? <Outlet /> : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
