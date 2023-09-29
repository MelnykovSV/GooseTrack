import { Form, Formik } from 'formik';
import {
  AvatarContainer,
  AvatarUploadBtn,
  AvatarUploadContainer,
  CircularAvatar,
  DefaultUserIcon,
  Feedback,
  FormInput,
  InvalidFeedback,
  Label,
  LabelText,
  UpdateIcon,
  UserAvatar,
  UserFormWrap,
  UserName,
  UserRole,
  UserSection,
} from './UserForm.styled';
import { userFormValidation } from './constants';
import { useState } from 'react';
import { SaveChangesBtn } from 'components/SaveChangesBtn/SaveChangesBtn';

const initialValues = {
  phone: '',
  telegram: '',
  name: '',
  email: '',
  birthday: new Date(),
  avatarURL: null,
};

export const UserForm = () => {
  const [profileImg, setProfileImg] = useState(null);
  //   const [isFormChanged, setIsFormChanged] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <UserSection>
      <Formik
        initialValues={initialValues}
        validationSchema={userFormValidation}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <AvatarContainer>
            <UserAvatar>
              <DefaultUserIcon />
              {/* {avatarUrl ? ( */}
              {/* <CircularAvatar */}
              {/* src={ */}
              {/* // typeof avatarUrl === 'string' && avatarUrl
                    // ? avatarUrl
                    // : URL.createObjectURL(avatarUrl)
                //   }
                //   alt="avatar" */}
              {/* /> */}
              {/* ) : ( */}
              {/* <svg>
              <use href={userIcon}></use>
              </svg>  */}
              {/* )} */}

              <AvatarUploadContainer>
                <input
                  id="avatar-upload"
                  name="avatar"
                  type="file"
                  accept="image/*,.png,.jpg,.gif"
                  onChange={async e => {
                    const file = e.target.files[0];

                    setProfileImg(file);
                  }}
                  style={{ display: 'none' }}
                />

                <AvatarUploadBtn htmlFor="avatar-upload">
                  <UpdateIcon />
                </AvatarUploadBtn>
              </AvatarUploadContainer>
            </UserAvatar>

            <UserName>user</UserName>
            <UserRole>User</UserRole>
          </AvatarContainer>

          <UserFormWrap>
            <Label htmlFor="name">
              <LabelText>User Name</LabelText>
              <FormInput
                id="name"
                type="text"
                name="name"
                placeholder="User name"
              />
              <Feedback>
                <InvalidFeedback name="name" component="div" />
              </Feedback>
            </Label>

            <Label htmlFor="phone">
              <LabelText>Phone</LabelText>
              <FormInput
                id="phone"
                type="number"
                name="phone"
                placeholder="Enter your phone"
              />
              <Feedback>
                <InvalidFeedback name="phone" component="div" />
              </Feedback>
            </Label>

            <Label htmlFor="birthday">
              <LabelText>Birthday</LabelText>
              <FormInput id="birthday" type="date" name="birthday" />
              <Feedback>
                <InvalidFeedback name="birthday" component="div" />
              </Feedback>
            </Label>

            <Label htmlFor="skype">
              <LabelText>Skype</LabelText>
              <FormInput
                id="skype"
                type="text"
                name="skype"
                placeholder="Add a skype number"
              />
              <Feedback>
                <InvalidFeedback name="skype" component="div" />
              </Feedback>
            </Label>

            <Label htmlFor="email">
              <LabelText>Email</LabelText>
              <FormInput
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <Feedback>
                <InvalidFeedback name="email" component="div" />
              </Feedback>
            </Label>

            <SaveChangesBtn>Save Changes</SaveChangesBtn>
          </UserFormWrap>
        </Form>
      </Formik>
    </UserSection>
  );
};
