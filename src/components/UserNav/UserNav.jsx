import { Link } from 'react-router-dom';

export const UserNav = () => {
  return (
    <>
      <nav>
        <Link to="/account">my account</Link>
        <Link to="/calendar">calendar</Link>
        <Link to="/statistics">statistics</Link>
      </nav>
    </>
  );
};
