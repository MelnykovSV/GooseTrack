import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import { ReactComponent as UpdateAvatarIcon } from '../../icons/plus.svg';
import { ReactComponent as UserIcon } from '../../icons/ph_user.svg';
import { ReactComponent as ErrorIcon } from '../../icons/error.svg';
import { ReactComponent as ValidIcon } from '../../icons/valid.svg';

export const UserSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 18px 40px 18px;
  margin-top: 64px;
  margin-bottom: 40px;
  background-color: #ffffff;
  border-radius: 16px;

  @media screen and (min-width: 767px) {
      margin-top: 64px;
      padding-top: 40px
      display: flex;
      padding: 40px 175px 40px 175px;
  }

  @media screen and (min-width: 1200px) {
    width: inherit;
    padding: 60px 165px 60px 165px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
    // -o-object-fit: cover;
    // object-fit: cover;
  margin-bottom: 20px;

  @media screen and (min-width: 767px) {
    width: 124px;
    height: 124px;
  }
`;

export const CircularAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  //   border: 2px solid #3e85f3;
  border-radius: 50%;
`;

export const DefaultUserIcon = styled(UserIcon)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 30%;
  right: 30%;

  @media screen and (min-width: 767px) {
    width: 48px;
    height: 48px;
    top: 30%;
    right: 30%;
  }
`;

export const UserName = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #343434;
  margin-top: 0px;
  margin-bottom: 8px;
`;

export const UserRole = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #343434;
  flex: none;
  order: 1;
  flex-grow: 0;

  margin-top: 0px;
  margin-bottom: 0px;
`;

export const AvatarUploadContainer = styled.div`
  position: relative;
`;

export const AvatarUploadBtn = styled.label`
  position: absolute;
  width: 14px;
  height: 14px;
  z-index: 1;

  @media screen and (min-width: 767px) {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const UpdateIcon = styled(UpdateAvatarIcon)`
  position: absolute;
  fill: #3e85f3;
  width: 14px;
  height: 14px;
  top: 52px;
  left: 54px;
  cursor: pointer;
  z-index: 1;

  :hover {
    fill: #2b78ef;
  }

  @media screen and (min-width: 767px) {
    width: 24px;
    height: 24px;
    top: 95px;
    left: 90px;
  }
`;

export const UserFormWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 767px) {
    gap: 26px;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px 50px;
    justify-content: center;
    margin-top: 44px;
  }
`;

export const LabelText = styled.p`
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  color: ${({ status }) => {
    switch (status) {
      case 'error':
        return '#E74A3B';
      case 'valid':
        return '#3CBC81';
      default:
        return '#111111';
    }
  }};
  text-align: left;
  margin-bottom: 8px;
  margin-top: 0px;
`;

export const Label = styled.label`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  color: #111111;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1200px) {
    position: relative;
  }
`;

export const FormInput = styled(Field)`
  box-sizing: border-box;
  min-width: 300px;
  height: 42px;
  margin: 0px;
  padding: 14px 18px 14px 18px;
  border: ${p => {
    switch (p.status) {
      case 'error':
        return '1px solid #E74A3B';
      case 'valid':
        return '1px solid #3CBC81';
      default:
        return '1px solid #11111126';
    }
  }};
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: #fff;
  color: #111;

  :hover {
    border: 1px solid #111111;
  }

  @media screen and (min-width: 768px) {
    min-width: 350px;
  }

  @media screen and (min-width: 1200px) {
    &:nth-of-type(1),
    &:nth-of-type(3) {
      margin-right: 50px;
    }
  }
`;

export const DataIconWrap = styled.span`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 31px;
  font-size: x-large;

  @media screen and (min-width: 1200px) {
    right: 60px;
  }
`;


export const Feedback = styled.div`
  height: 25px;
  margin-top: 8px;
  margin-left: 10px;
`;

export const ValidFeedback = styled.div`
  color: #3cbc81;
  font-size: 12px;
`;

export const InvalidFeedback = styled(ErrorMessage)`
  color: #da1414;
  font-size: 12px;
`;

export const ValidationIcon = styled.span`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 34px;
  font-size: x-large;

  @media screen and (min-width: 1200px) {
    right: 60px;
  }
`;

export const InvalidInputIcon = styled(ErrorIcon)`
  width: 24px;
  height: 24px;
  fill: #E74A3B;
`;
export const ValidInputIcon = styled(ValidIcon)`
  width: 24px;
  height: 24px;
  fill: #3cbc81;
`;
