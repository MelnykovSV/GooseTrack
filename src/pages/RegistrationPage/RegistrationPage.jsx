// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import LoginContainer from 'components/LoginContainer/LoginContainer';
import { Hyperlink } from 'pages/LoginPage/LoginPage.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const registerHandler = data => {
    // e.preventDefault();
    // const requestBody = {
    // 	userName: e.target.userName.value,
    // 	email: e.target.email.value,
    // 	password: e.target.password.value,
    // };
    dispatch(signUp(data));
  };
  return (
    <>
      {/* <div>registration page</div>

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
			</form> */}

      <LoginContainer>
        <RegisterForm registerHandler={registerHandler}></RegisterForm>
        <Hyperlink to="/login">Log in</Hyperlink>
      </LoginContainer>
    </>
  );
};

export default RegistrationPage;
