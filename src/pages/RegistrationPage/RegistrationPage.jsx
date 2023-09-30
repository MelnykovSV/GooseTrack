import LoginContainer from 'components/LoginContainer/LoginContainer';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Hyperlink } from 'pages/LoginPage/LoginPage.styled';

export const RegistrationPage = () => {


	return (
		<LoginContainer>
			<RegisterForm />
			<Hyperlink to="/login">Log in</Hyperlink>
		</LoginContainer>
	);
};
