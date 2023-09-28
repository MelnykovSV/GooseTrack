const { useSelector } = require('react-redux');
const { Navigate, useLocation, Outlet } = require('react-router-dom');
const { selectToken } = require('redux/selectors');

export const PrivateRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  return token ? <Outlet /> : <Navigate to="/login" state={location} />;
};
