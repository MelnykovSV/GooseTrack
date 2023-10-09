import {
  Form,
  Input,
  Heading,
  InputHeader,
  Button,
  StyledSpan,
  ParentWrapper,
  ErrorSvg,
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
    loginHandler(data);
  };

  const handleError = () => {};
  return (
    <Form onSubmit={handleSubmit(handleLogin, handleError)}>
      <Heading>Log In</Heading>
      <ParentWrapper>
        <InputHeader
          type="email"
          htmlFor="email"
          status={
            errors?.email ? 'error' : getValues('email') ? 'valid' : 'default'
          }
        >
          Email
        </InputHeader>

        <Input
          placeholder="nadia@gmail.com"
          id="email"
          name="email"
          {...register('email')}
          status={
            errors?.email ? 'error' : getValues('email') ? 'valid' : 'default'
          }
        />
        <ErrorSvg>
          {errors?.email ? errorSVG : getValues('password') ? correctSVG : null}
        </ErrorSvg>

        <StyledSpan
          status={
            errors?.email ? 'error' : getValues('email') ? 'valid' : 'default'
          }
        >
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
              : getValues('email')
              ? 'valid'
              : 'default'
          }
        >
          Password
        </InputHeader>

        <Input
          type="password"
          name="password"
          {...register('password')}
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          id="password"
          status={
            errors?.password
              ? 'error'
              : getValues('email')
              ? 'valid'
              : 'default'
          }
        ></Input>
        <ErrorSvg>
          {errors?.password
            ? errorSVG
            : getValues('password')
            ? correctSVG
            : null}
        </ErrorSvg>
        <StyledSpan
          status={
            errors?.password
              ? 'error'
              : getValues('email')
              ? 'valid'
              : 'default'
          }
        >
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
