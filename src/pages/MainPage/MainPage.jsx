import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Log in</Link>
    </>
  );
};
