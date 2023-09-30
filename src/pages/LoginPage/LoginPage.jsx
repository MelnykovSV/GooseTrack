// import { Link } from 'react-router-dom';
import { signIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import LoginContainer from 'components/LoginContainer/LoginContainer';
import { Hyperlink } from './LoginPage.styled';

const LoginPage = () => {
	const dispatch = useDispatch();
	const loginHandler = data => {
		// e.preventDefault();
		// const requestBody = {
		// 	email: e.target.email.value,
		// 	password: e.target.password.value,
		// };
		dispatch(signIn(data));
	};

	return (
		<>
			{/* <div>login page</div>
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
			</form> */}
			<LoginContainer>
				<LoginForm loginHandler={loginHandler}></LoginForm>
				<Hyperlink to="/register">Sign up</Hyperlink>
			</LoginContainer>

		</>
	);
};
export default LoginPage;
