import { Form, Formik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as IconDown } from '../../../icons/chevron-down.svg';
import {
  Feedback,
  FormInput,
  InvalidFeedback,
  InvalidInputIcon,
  Label,
  LabelText,
  UserFormWrap,
  ValidFeedback,
  ValidInputIcon,
  ValidationIcon,
  DataIconWrap,
} from './UserForm.styled';
import { userFormValidation } from './constants/userFormValidation';
import { useEffect, useState } from 'react';
import { SaveChangesBtn } from 'components/SaveChangesBtn/SaveChangesBtn';
import { CustomFormInput } from './constants/CustomFormInput';
import './custom-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { format } from 'date-fns';
import { editData } from 'redux/auth/operations';
import { getIsLoading } from 'redux/auth/authSlice';

export const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const loading = useSelector(getIsLoading);

  const [isFormChanged, setIsFormChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const initialValues = {
    userName: userInfo.userName || '',
    birthday: userInfo.birthday ? new Date(userInfo.birthday) : new Date(),
    phone: userInfo.phone || '',
    skype: userInfo.skype || '',
    email: userInfo.email || '',
  };

  useEffect(() => {
    setIsLoading(false);
  }, [loading]);

  const handleSubmit = (values, { resetForm, setFieldValue }) => {
    values.birthday = format(values.birthday, 'yyyy-MM-dd');

    try {
      dispatch(editData(values));
      setIsFormChanged(false);
      resetForm();
    } catch (error) {
      console.error('Registration', error);
    }
  };

  return (
    <div>
      {isLoading ? null : (
        <Formik
          initialValues={initialValues}
          validationSchema={userFormValidation}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched, values, dirty, setTouched }) => {
            return (
              <Form autoComplete="off">
                <UserFormWrap>
                  <Label htmlFor="userName">
                    <LabelText
                      status={
                        errors.userName && touched.userName
                          ? 'error'
                          : touched.userName
                          ? 'valid'
                          : 'default'
                      }
                    >
                      User Name
                    </LabelText>
                    <FormInput
                      id="userName"
                      type="text"
                      name="userName"
                      placeholder="User name"
                      status={
                        errors.userName && touched.userName
                          ? 'error'
                          : touched.userName
                          ? 'valid'
                          : 'default'
                      }
                    />
                    {touched.userName && (
                      <ValidationIcon>
                        {errors.userName ? (
                          <InvalidInputIcon />
                        ) : (
                          <ValidInputIcon />
                        )}
                      </ValidationIcon>
                    )}
                    <Feedback>
                      {touched.userName && !errors.userName ? (
                        <ValidFeedback>User name is correct</ValidFeedback>
                      ) : (
                        <InvalidFeedback name="userName" component="div" />
                      )}
                    </Feedback>
                  </Label>

                  <Label htmlFor="phone">
                    <LabelText
                      status={
                        errors.phone && touched.phone
                          ? 'error'
                          : touched.phone
                          ? 'valid'
                          : 'default'
                      }
                    >
                      Phone
                    </LabelText>
                    <FormInput
                      id="phone"
                      type="phone"
                      name="phone"
                      placeholder="Enter your phone"
                      component={CustomFormInput}
                      status={
                        errors.phone && touched.phone
                          ? 'error'
                          : touched.phone
                          ? 'valid'
                          : 'default'
                      }
                    />
                    {touched.phone && (
                      <ValidationIcon>
                        {errors.phone ? (
                          <InvalidInputIcon />
                        ) : (
                          <ValidInputIcon />
                        )}
                      </ValidationIcon>
                    )}
                    <Feedback>
                      {touched.phone && !errors.phone ? (
                        <ValidFeedback>User phone is correct</ValidFeedback>
                      ) : (
                        <InvalidFeedback name="phone" component="div" />
                      )}
                    </Feedback>
                  </Label>

                  <Label htmlFor="birthday">
                    <LabelText style={touched.birthday && { color: '#3cbc81' }}>
                      Birthday
                    </LabelText>
                    <FormInput
                      id="birthday"
                      type="text"
                      name="birthday"
                      style={
                        touched.birthday && { border: '1px solid #3CBC81' }
                      }
                      onChange={e => {
                        setFieldValue('birthday', e);
                        setTouched({ ...touched, birthday: true });
                      }}
                      component={({ field, form, ...props }) => {
                        return (
                          <DatePicker
                            calendarStartDay={1}
                            dropdownMode="select"
                            yearDropdownItemNumber={100}
                            scrollableYearDropdown
                            selected={new Date(values.birthday)}
                            dateFormat="yyyy-MM-dd"
                            maxDate={new Date()}
                            {...field}
                            {...props}
                          />
                        );
                      }}
                    />
                    {touched.birthday ? (
                      <ValidationIcon>
                        <ValidInputIcon />
                      </ValidationIcon>
                    ) : (
                      <DataIconWrap>
                        <IconDown />
                      </DataIconWrap>
                    )}
                    <Feedback>
                      {touched.birthday && (
                        <ValidFeedback>User birthday is selected</ValidFeedback>
                      )}
                    </Feedback>
                  </Label>

                  <Label htmlFor="skype">
                    <LabelText
                      status={
                        errors.skype && touched.skype
                          ? 'error'
                          : touched.skype
                          ? 'valid'
                          : 'default'
                      }
                    >
                      Skype
                    </LabelText>
                    <FormInput
                      id="skype"
                      type="text"
                      name="skype"
                      placeholder="Add a skype number"
                      status={
                        errors.skype && touched.skype
                          ? 'error'
                          : touched.skype
                          ? 'valid'
                          : 'default'
                      }
                    />
                    {touched.skype && (
                      <ValidationIcon>
                        {errors.skype ? (
                          <InvalidInputIcon />
                        ) : (
                          <ValidInputIcon />
                        )}
                      </ValidationIcon>
                    )}
                    <Feedback>
                      {touched.skype && !errors.skype ? (
                        <ValidFeedback>User skype is correct</ValidFeedback>
                      ) : (
                        <InvalidFeedback name="skype" component="div" />
                      )}
                    </Feedback>
                  </Label>

                  <Label htmlFor="email">
                    <LabelText
                      status={
                        errors.email && touched.email
                          ? 'error'
                          : touched.email
                          ? 'valid'
                          : 'default'
                      }
                    >
                      Email
                    </LabelText>
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      status={
                        errors.email && touched.email
                          ? 'error'
                          : touched.email
                          ? 'valid'
                          : 'default'
                      }
                    />
                    {touched.email && (
                      <ValidationIcon>
                        {errors.email ? (
                          <InvalidInputIcon />
                        ) : (
                          <ValidInputIcon />
                        )}
                      </ValidationIcon>
                    )}
                    <Feedback>
                      {touched.email && !errors.email ? (
                        <ValidFeedback>User email is correct</ValidFeedback>
                      ) : (
                        <InvalidFeedback name="email" component="div" />
                      )}
                    </Feedback>
                  </Label>

                  <SaveChangesBtn isChanged={!dirty && !isFormChanged}>
                    Save Changes
                  </SaveChangesBtn>
                </UserFormWrap>
              </Form>
            );
          }}
        </Formik>
      )}
    </div>
  );
};
