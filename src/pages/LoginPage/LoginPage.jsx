import LoginContainer from 'components/LoginContainer/LoginContainer';
import { Hyperlink } from './LoginPage.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const LoginPage = () => {
	const onSubmit = (values) => {
		console.log(values);
	}

	return (
		<LoginContainer>
			<LoginForm>
			</LoginForm>
			<Hyperlink to="/register">Sign up</Hyperlink>
		</LoginContainer>
	)
};
