import {
  Form,
  Input,
  Heading,
  InputHeader,
  Button,
  StyledSpan,
  WrapperInput,
} from './LoginForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  })
  .required();

export const LoginForm = ({ loginHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const handleLogin = data => {
    console.log(data);
    loginHandler(data);
  };
  const handleError = errors => {};

  return (
    <Form onSubmit={handleSubmit(handleLogin, handleError)}>
      <Heading>Log In</Heading>
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

        <StyledSpan style={{ color: errors?.email ? '#E74A3B' : '#3CBC81' }}>
          {errors?.email
            ? 'This is an ERROR email'
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

        <StyledSpan>
          {errors?.password && 'Must be at least 5 characters'}
        </StyledSpan>
      </WrapperInput>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
