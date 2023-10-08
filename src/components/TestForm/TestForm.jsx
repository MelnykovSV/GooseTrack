import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { editData } from 'redux/auth/operations';
import { useEffect } from 'react';

export const TestForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // Этот useEffect, чтобы перебить дефолтное поведение формы. Без этого, если на каком-то из инпутов не было фокуса, форма при сабмите отправит с этого поля пустую строку, даже если там есть какое-то дефолтное значение.

  useEffect(() => {
    setValue('userName', userInfo.userName);
    setValue('email', userInfo.email);
  }, [setValue, userInfo]);

  const onSubmit = data => {
    dispatch(editData(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={userInfo.userName} {...register('userName')} />
      <input defaultValue={userInfo.email} {...register('email')} />
      <button type="submit">Submit</button>
    </form>
  );
};
