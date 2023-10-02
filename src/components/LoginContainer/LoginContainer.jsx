import React from 'react'
import { Container } from './LoginContainer.styled'

const LoginContainer = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	)
}

export default LoginContainer