import { Link } from 'react-router-dom';
import { signIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginHandler = e => {
    e.preventDefault();
    const requestBody = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(signIn(requestBody));
  };

  return (
    <>
      <div>login page</div>
      <form onSubmit={loginHandler}>
        <label>
          email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Link to="/register">Sign up</Link>
    </>
  );
};

export default LoginPage;
