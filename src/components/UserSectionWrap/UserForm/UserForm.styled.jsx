import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import { ReactComponent as ErrorIcon } from '../../../icons/error.svg';
import { ReactComponent as ValidIcon } from '../../../icons/valid.svg';
import { IoIosArrowDown } from 'react-icons/io';

export const UserFormWrap = styled.div`
  margin-top: 135px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 767px) {
    gap: 26px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
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
  color: ${({ status, theme }) => {
    switch (status) {
      case 'error':
        return `${theme.error}`;
      case 'valid':
        return `${theme.success}`;
      default:
        return `${theme.textLabel}`;
    }
  }};
  text-align: left;
  margin-bottom: 8px;
  margin-top: 0px;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1440px) {
    position: relative;
  }
`;

export const FormInput = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  margin: 0px;
  padding: 14px 18px 14px 18px;
  border: ${({ status, theme }) => {
    switch (status) {
      case 'error':
        return `1px solid ${theme.error}`;
      case 'valid':
        return `1px solid ${theme.success}`;
      default:
        return `1px solid ${theme.borderUserTextarea}`;
    }
  }};
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: ${({ theme }) => theme.bgUserform};
  color: ${({ theme }) => theme.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.textPrimaryTransparent};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.borderHover};
  }
`;

export const DataIconWrap = styled.span`
  position: absolute;
  right: 10px;
  top: 31px;
  font-size: x-large;

  @media screen and (min-width: 1200px) {
    right: 10px;
  }
`;

export const Feedback = styled.div`
  height: 25px;
  margin-top: 8px;
  margin-left: 10px;
`;

export const ValidFeedback = styled.div`
  color: ${({ theme }) => theme.success};
  font-size: 12px;
`;

export const InvalidFeedback = styled(ErrorMessage)`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
`;

export const ValidationIcon = styled.span`
  border: none;
  position: absolute;
  right: 10px;
  top: 34px;
  font-size: x-large;

  @media screen and (min-width: 1200px) {
    right: 10px;
  }
`;

export const InvalidInputIcon = styled(ErrorIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.error};
`;

export const ValidInputIcon = styled(ValidIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.success};
`;

export const ChevronDownIcon = styled(IoIosArrowDown)`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.textPrimary};
`;
