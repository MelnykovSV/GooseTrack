import {
  Form,
  Input,
  Heading,
  InputHeader,
  Button,
  StyledSpan,
  WrapperInput,
} from './RegisterForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { emailRegexp, userNameRegexp, passwordRegexp } from 'regExp';

const schema = yup
  .object({
    userName: yup
      .string()
      .required('User name is required')
      .max(16, 'Username can be up to 16 characters in length')
      .matches(
        userNameRegexp,
        'Your username should consist of letters, numbers, and underscores only'
      ),
    email: yup
      .string()
      .required('Email is required')
      .matches(emailRegexp, 'Invalid email'),
    password: yup
      .string()
      .required('User name is required')
      .min(
        8,
        'For added security, please ensure that your password contains a minimum of 8 characters.'
      )
      .matches(
        passwordRegexp,
        'Please ensure your password includes at least one lowercase letter, one uppercase letter, and one symbol or number for enhanced security.'
      ),
  })
  .required();

export const RegisterForm = ({ registerHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
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
      <WrapperInput>
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
        <StyledSpan style={{ color: errors?.userName ? '#E74A3B' : '#3CBC81' }}>
          {errors?.userName
            ? errors?.userName.message
            : getValues('userName')
            ? 'This is a CORRECT user name'
            : ''}
        </StyledSpan>
      </WrapperInput>
      <WrapperInput>
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

        <StyledSpan style={{ color: errors?.email ? '#E74A3B' : '#3CBC81' }}>
          {errors?.email
            ? errors?.email.message
            : getValues('email')
            ? 'This is a CORRECT email'
            : ''}
        </StyledSpan>
      </WrapperInput>
      <WrapperInput>
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
          placeholder="Enter your password"
          id="password"
          style={{
            borderColor: errors?.password
              ? '#E74A3B'
              : getValues('password')
              ? '#3CBC81'
              : 'rgba(17, 17, 17, 0.15)',
          }}
        ></Input>

        <StyledSpan style={{ color: errors?.password ? '#E74A3B' : '#3CBC81' }}>
          {errors?.password
            ? errors?.password.message
            : getValues('password')
            ? 'This is a CORRECT password'
            : ''}
        </StyledSpan>
      </WrapperInput>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
