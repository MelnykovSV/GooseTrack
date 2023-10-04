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
					style={{
						color: errors?.userName
							? '#E74A3B'
							: getValues('userName')
								? '#3CBC81'
								: '#111',
					}}
				>
					Name
				</InputHeader>
				<ParentWrapper>

					<Input
						placeholder="Enter your name"
						id="userName"
						name="userName"
						{...register('userName')}
						style={{
							borderColor: errors?.userName
								? '#E74A3B'
								: getValues('userName')
									? '#3CBC81'
									: '#111',
						}}
					/>
					<ErrorSvg>
						{errors?.userName ? errorSVG : getValues('userName') ? correctSVG : null}
					</ErrorSvg>
				</ParentWrapper>

				<StyledSpan style={{ color: errors?.userName ? '#E74A3B' : '#3CBC81' }}>
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
					style={{
						color: errors?.email
							? '#E74A3B'
							: getValues('email')
								? '#3CBC81'
								: '#111',
					}}
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
						style={{
							borderColor: errors?.email
								? '#E74A3B'
								: getValues('email')
									? '#3CBC81'
									: 'rgba(17, 17, 17, 0.15)',
						}}
					/>
					<ErrorSvg>
						{errors?.email ? errorSVG : getValues('email') ? correctSVG : null}
					</ErrorSvg>
				</ParentWrapper>

				<StyledSpan style={{ color: errors?.email ? '#E74A3B' : '#3CBC81' }}>
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
					style={{
						color: errors?.password
							? '#E74A3B'
							: getValues('password')
								? '#3CBC81'
								: '#111',
					}}
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
						style={{
							borderColor: errors?.password
								? '#E74A3B'
								: getValues('password')
									? '#3CBC81'
									: 'rgba(17, 17, 17, 0.15)',
						}}
					/>
					<ErrorSvg>
						{errors?.password ? errorSVG : getValues('password') ? correctSVG : null}
					</ErrorSvg>
				</ParentWrapper>

				<StyledSpan style={{ color: errors?.password ? '#E74A3B' : '#3CBC81' }}>
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
