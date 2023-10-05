
import { object, string } from 'yup';
import { emailRegexp, passwordRegexp } from 'regExp';


export const LoginFormValidation = object({
	email: string()
		.required('Email is required')
		.matches(emailRegexp, 'Invalid email'),
	password: string()
		.required('Password is required')
		.matches(passwordRegexp, 'Invalid password',
		),
})