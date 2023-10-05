
import { object, string } from 'yup';
import { emailRegexp, passwordRegexp, userNameRegexp } from 'regExp';


export const registerFormValidation = object({
	userName:
		string()
			.required('User name is required')
			.max(16, 'Username can be up to 16 characters in length')
			.matches(
				userNameRegexp,
				'Your username should consist of letters, numbers, and underscores only'
			),
	email: string()
		.required('Email is required')
		.matches(emailRegexp, 'Invalid email'),
	password:
		string()
			.required('Password is required')
			.min(
				8,
				'For added security, please ensure that your password contains a minimum of 8 characters.'
			)
			.matches(
				passwordRegexp,
				'Please ensure your password includes at least one lowercase letter, one uppercase letter, and one symbol or number for enhanced security.'
			),
})


