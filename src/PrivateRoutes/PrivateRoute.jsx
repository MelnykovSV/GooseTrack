// const { useSelector } = require('react-redux');
// const { Navigate, useLocation } = require('react-router-dom');
// const { selectToken } = require('redux/selectors');

export const PrivateRoute = ({ children }) => {
  // const token = useSelector(selectToken);
  // const location = useLocation();
  // return token ? children : <Navigate to="/login" state={location} />;
  return children;
};
