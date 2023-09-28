import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const registerHandler = e => {
    e.preventDefault();
    const requestBody = {
      userName: e.target.userName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(signUp(requestBody));
  };
  return (
    <>
      <div>registration page</div>

      <form onSubmit={registerHandler}>
        <label>
          User name:
          <input type="text" name="userName" />
        </label>
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
      <Link to="/login">Log in</Link>
    </>
  );
};

export default RegistrationPage;
