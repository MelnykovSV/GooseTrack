import {
	Form,
	Input,
	Heading,
	InputHeader,
	Button,
	StyledSpan,
	ParentWrapper,
	ErrorSvg
} from './LoginForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormValidation } from './constants/loginFormValidation';
import { correctSVG, errorSVG } from './constants/svgValue';


export const LoginForm = ({ loginHandler }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(LoginFormValidation),
	});
	const handleLogin = async data => {
		console.log(data);
		loginHandler(data);
	};


	const handleError = () => { }
	return (
		<Form onSubmit={handleSubmit(handleLogin, handleError)}>
			<Heading>Log In</Heading>
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
					Email
				</InputHeader>

				<Input
					placeholder="nadia@gmail.com"
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
					{errors?.email ? errorSVG : getValues('password') ? correctSVG : null}
				</ErrorSvg>

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

				<Input
					type="password"
					name="password"
					{...register('password')}
					placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
					id="password"
					style={{
						borderColor: errors?.password
							? '#E74A3B'
							: getValues('password')
								? '#3CBC81'
								: 'rgba(17, 17, 17, 0.15)',
					}}
				></Input>
				<ErrorSvg>
					{errors?.password ? errorSVG : getValues('password') ? correctSVG : null}
				</ErrorSvg>
				<StyledSpan style={{ color: errors?.password ? '#E74A3B' : '#3CBC81' }}>
					{errors?.password
						? errors?.password.message
						: getValues('password')
							? 'This is a CORRECT password'
							: ''}
				</StyledSpan>
			</ParentWrapper>
			<Button type="submit">Log In</Button>
		</Form>
	);
};
