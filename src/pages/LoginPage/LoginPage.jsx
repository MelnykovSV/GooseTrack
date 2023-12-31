// import { Link } from 'react-router-dom';
import { signIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import LoginContainer from 'components/LoginContainer/LoginContainer';
import { Hyperlink } from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginHandler = data => {
    dispatch(signIn(data));
  };

  return (
    <LoginContainer page="login">
      <LoginForm loginHandler={loginHandler}></LoginForm>
      <Hyperlink to="/register">Sign up</Hyperlink>
    </LoginContainer>
  );
};
export default LoginPage;
