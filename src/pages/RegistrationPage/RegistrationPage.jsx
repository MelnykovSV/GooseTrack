// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import LoginContainer from 'components/LoginContainer/LoginContainer';
import { Hyperlink } from 'pages/LoginPage/LoginPage.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const registerHandler = data => {
    dispatch(signUp(data));
  };
  return (
  
      <LoginContainer>
        <RegisterForm registerHandler={registerHandler}></RegisterForm>
        <Hyperlink to="/login">Log in</Hyperlink>
      </LoginContainer>

  );
};

export default RegistrationPage;
