const { useSelector } = require('react-redux');
const { Navigate, useLocation, Outlet } = require('react-router-dom');
const { selectToken } = require('redux/selectors');

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  return !token ? (
    <Outlet />
  ) : (
    <Navigate to={location.state ? location.state : '/'} />
  );
};
