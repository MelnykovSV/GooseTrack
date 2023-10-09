import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { editData } from 'redux/auth/operations';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormValidation } from 'components/UserSectionWrap/UserForm/constants/userFormValidation';

export const TestForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({resolver: yupResolver(userFormValidation)});

  useEffect(() => {
    setValue('userName', userInfo.userName);
    setValue('phone', userInfo.phone);
    setValue('birthday', userInfo.birthday);
    setValue('skype', userInfo.skype);
    setValue('email', userInfo.email);
  }, [setValue, userInfo]);

  const onSubmit = data => {
    console.log(data);
    dispatch(editData(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={userInfo.userName} {...register('userName')} />
      <div>{errors.userName?.message}</div>

      <input defaultValue={userInfo.phone} {...register('phone')} />
      <div>{errors.phone?.message}</div>

      <input
        defaultValue={
          userInfo.birthday ? new Date(userInfo.birthday) : new Date()
        }
        {...register('birthday')}
      />

      <input defaultValue={userInfo.skype} {...register('skype')} />
      <div>{errors.skype?.message}</div>

      <input defaultValue={userInfo.email} {...register('email')} />
      <div>{errors.email?.message}</div>

      <button type="submit">Submit</button>
    </form>
  );
};
