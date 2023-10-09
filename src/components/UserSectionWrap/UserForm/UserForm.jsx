import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { selectUser } from 'redux/selectors';
import { editData } from 'redux/auth/operations';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormValidation } from 'components/UserSectionWrap/UserForm/constants/userFormValidation';
import {
  ChevronDownIcon,
  DataIconWrap,
  Form,
  Input,
  Label,
  LabelText,
  ValidInputIcon,
  ValidationIcon,
} from './UserForm.styled';
import { FeedbackValidIcon } from '../FeedbackValidIcon/FeedbackValidIcon';
import { FeedbackMessage } from '../FeedbackMessage/FeedbackMessage';
import { SaveChangesBtn } from 'components/SaveChangesBtn/SaveChangesBtn';
import { CustomFormInput } from '../CustomFormInput/CustomFormInput';
import { Calendar } from '../Calendar/Calendar';
import './custom-datepicker.css';

export const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const {
    getFieldState,
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userFormValidation) });

  useEffect(() => {
    setValue('userName', userInfo.userName);
    setValue('phone', userInfo.phone);
    setValue('birthday', userInfo.birthday);
    setValue('skype', userInfo.skype);
    setValue('email', userInfo.email);
  }, [setValue, userInfo]);

  const onSubmit = data => {
    data.birthday = format(data.birthday, 'yyyy-MM-dd');
    console.log(data);
    dispatch(editData(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <LabelText
          status={
            errors.userName && getFieldState('userName').isDirty
              ? 'error'
              : getFieldState('userName').isDirty
              ? 'valid'
              : 'default'
          }
        >
          User Name
        </LabelText>
        <Input
          placeholder="User name"
          defaultValue={userInfo.userName}
          {...register('userName')}
          status={
            errors.userName && getFieldState('userName').isDirty
              ? 'error'
              : getFieldState('userName').isDirty
              ? 'valid'
              : 'default'
          }
        />

        {getFieldState('userName').isDirty && (
          <FeedbackValidIcon errors={errors.userName} />
        )}

        <FeedbackMessage
          getFieldState={getFieldState('userName')}
          errors={errors.userName}
        />
      </Label>

      <Label>
        <LabelText
          status={
            errors.phone && getFieldState('phone').isDirty
              ? 'error'
              : getFieldState('phone').isDirty
              ? 'valid'
              : 'default'
          }
        >
          Phone
        </LabelText>
        <Controller
          control={control}
          defaultValue={userInfo.phone}
          name="phone"
          render={CustomFormInput}
        />

        {getFieldState('phone').isDirty && (
          <FeedbackValidIcon errors={errors.phone} />
        )}

        <FeedbackMessage
          getFieldState={getFieldState('phone')}
          errors={errors.phone}
        />
      </Label>

      <Label>
        <LabelText
          status={
            errors.phone && getFieldState('birthday').isDirty
              ? 'error'
              : getFieldState('birthday').isDirty
              ? 'valid'
              : 'default'
          }
        >
          Birthday
        </LabelText>
        <Controller
          control={control}
          name="birthday"
          defaultValue={
            userInfo.birthday ? new Date(userInfo.birthday) : new Date()
          }
          onChange={e => {
            setValue('birthday', e);
          }}
          render={Calendar}
        />

        {getFieldState('birthday').isDirty ? (
          <ValidationIcon>
            <ValidInputIcon />
          </ValidationIcon>
        ) : (
          <DataIconWrap>
            <ChevronDownIcon />
          </DataIconWrap>
        )}

        <FeedbackMessage
          getFieldState={getFieldState('birthday')}
          errors={errors.birthday}
        />
      </Label>

      <Label>
        <LabelText
          status={
            errors.skype && getFieldState('skype').isDirty
              ? 'error'
              : getFieldState('skype').isDirty
              ? 'valid'
              : 'default'
          }
        >
          Skype
        </LabelText>
        <Input
          placeholder="Add a skype number"
          defaultValue={userInfo.skype}
          {...register('skype')}
          status={
            errors.skype && getFieldState('skype').isDirty
              ? 'error'
              : getFieldState('skype').isDirty
              ? 'valid'
              : 'default'
          }
        />
        {getFieldState('skype').isDirty && (
          <FeedbackValidIcon errors={errors.skype} />
        )}

        <FeedbackMessage
          getFieldState={getFieldState('skype')}
          errors={errors.skype}
        />
      </Label>

      <Label>
        <LabelText
          status={
            errors.email && getFieldState('email').isDirty
              ? 'error'
              : getFieldState('email').isDirty
              ? 'valid'
              : 'default'
          }
        >
          Email
        </LabelText>
        <Input
          placeholder="Enter your email"
          defaultValue={userInfo.email}
          {...register('email')}
          status={
            errors.email && getFieldState('email').isDirty
              ? 'error'
              : getFieldState('email').isDirty
              ? 'valid'
              : 'default'
          }
        />

        {getFieldState('email').isDirty && (
          <FeedbackValidIcon errors={errors.email} />
        )}

        <FeedbackMessage
          getFieldState={getFieldState('email')}
          errors={errors.email}
        />
      </Label>

      <SaveChangesBtn>Submit</SaveChangesBtn>
    </Form>
  );
};
