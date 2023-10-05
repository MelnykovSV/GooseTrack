import {
	Form,
	Input,
	Heading,
	InputHeader,
	Button,
	StyledSpan,
	ParentWrapper,
	ErrorSvg,
} from './RegisterForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormValidation } from './constants/registerFormValidaton';
import { correctSVG, errorSVG } from 'components/LoginForm/constants/svgValue';



export const RegisterForm = ({ registerHandler }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(registerFormValidation),
	});
	const handleRegister = data => {
		console.log(data);
		registerHandler(data);
	};
	const handleError = error => {
		console.log(error);
	};

	return (
		<Form onSubmit={handleSubmit(handleRegister, handleError)}>
			<Heading>Sign Up</Heading>
			<ParentWrapper>
				<InputHeader
					type="text"
					htmlFor="userName"
					status={
						errors?.userName
							? 'error'
							: getValues('userName')
								? 'valid'
								: 'default'
					}
				>
					Name
				</InputHeader>
				<ParentWrapper>

					<Input
						placeholder="Enter your name"
						id="userName"
						name="userName"
						{...register('userName')}
						status={
							errors?.userName
								? 'error'
								: getValues('userName')
									? 'valid'
									: 'default'
						}
					/>
					<ErrorSvg>
						{errors?.userName ? errorSVG : getValues('userName') ? correctSVG : null}
					</ErrorSvg>
				</ParentWrapper>

				<StyledSpan status={
					errors?.userName
						? 'error'
						: getValues('userName')
							? 'valid'
							: 'default'
				}>
					{errors?.userName
						? errors?.userName.message
						: getValues('userName')
							? 'This is a CORRECT user name'
							: ''}
				</StyledSpan>
			</ParentWrapper>
			<ParentWrapper>
				<InputHeader
					type="email"
					htmlFor="email"
					status={
						errors?.email
							? 'error'
							: getValues('email')
								? 'valid'
								: 'default'
					}
				>
					{' '}
					Email
				</InputHeader>
				<ParentWrapper>

					<Input
						placeholder="Enter your email address"
						id="email"
						name="email"
						{...register('email')}
						status={
							errors?.email
								? 'error'
								: getValues('email')
									? 'valid'
									: 'default'
						}
					/>
					<ErrorSvg>
						{errors?.email ? errorSVG : getValues('email') ? correctSVG : null}
					</ErrorSvg>
				</ParentWrapper>

				<StyledSpan status={
					errors?.email
						? 'error'
						: getValues('email')
							? 'valid'
							: 'default'
				}>
					{errors?.email
						? errors?.email.message
						: getValues('email')
							? 'This is a CORRECT email'
							: ''}
				</StyledSpan>
			</ParentWrapper>
			<ParentWrapper>
				<InputHeader
					htmlFor="password"
					status={
						errors?.password
							? 'error'
							: getValues('password')
								? 'valid'
								: 'default'
					}
				>
					Password
				</InputHeader>
				<ParentWrapper>

					<Input
						type="password"
						name="password"
						{...register('password')}
						placeholder="Enter your password"
						id="password"
						status={
							errors?.password
								? 'error'
								: getValues('email')
									? 'valid'
									: 'default'
						}
					/>
					<ErrorSvg>
						{errors?.password ? errorSVG : getValues('password') ? correctSVG : null}
					</ErrorSvg>
				</ParentWrapper>

				<StyledSpan status={
					errors?.password
						? 'error'
						: getValues('password')
							? 'valid'
							: 'default'
				}>
					{errors?.password
						? errors?.password.message
						: getValues('password')
							? 'This is a CORRECT password'
							: ''}
				</StyledSpan>
			</ParentWrapper>
			<Button type="submit">Sign Up</Button>
		</Form>
	);
};
