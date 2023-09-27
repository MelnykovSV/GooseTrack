// const { useSelector } = require('react-redux');
// const { Navigate, useLocation } = require('react-router-dom');
// const { selectToken } = require('redux/selectors');

export const PublicRoute = ({ children }) => {
  // const token = useSelector(selectToken);
  // const location = useLocation();
  // return !token ? (
  //   children
  // ) : (
  //   <Navigate to={location.state ? location.state : '/'} />
  // );
  return children;
};
