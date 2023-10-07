import React from 'react'
import { Container } from './LoginContainer.styled'
import LoginRocket1x from '../../images/LoginPage/rocket.png';
import LoginRocket2x from '../../images/LoginPage/rocket@2.png';

import RegistrationGoose1x from '../../images/RegistrationPage/goose.png';
import RegistrationGoose2x from '../../images/RegistrationPage/goose@2.png';


const dpi = Math.round(window.devicePixelRatio);;

const LoginContainer = ({ page, children }) => {
	return (
		<Container
			page={page}
			loginBackground={dpi === 2 ? LoginRocket2x : LoginRocket1x}
			registrationBackground={dpi === 2 ? RegistrationGoose2x : RegistrationGoose1x}
		>
			{children}
		</Container>
	);
};


export default LoginContainer