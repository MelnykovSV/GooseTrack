import { object, string, date } from 'yup';

export const userFormValidation = object({
  name: string()
    .min(3, 'Too short!')
    .max(16, 'Too long!')
    .required('Please enter your name'),
  birthday: date(),
  email: string()
    .matches(
      /^([a-z0-9_.-]+)@([a-z09_.-]+).([a-z]{2,6})$/,
      'Email is not valid.'
    )
    .required('Please enter your email.'),
  skype: string().max(16),
  phone: string().matches(/^\+[\d-]+$/, 'Number should start from +'),
});

// /^([+]?[0-9])*$/i;
