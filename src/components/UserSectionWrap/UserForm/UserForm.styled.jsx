import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import { ReactComponent as ErrorIcon } from '../../../icons/error.svg';
import { ReactComponent as ValidIcon } from '../../../icons/valid.svg';

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
    width: 350px;
  }
`;

export const FormInput = styled(Field)`
  box-sizing: border-box;
  min-width: 300px;
  // width: 100%;
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

`;

export const DataIconWrap = styled.span`
  border: none;
  background-color: transparent;
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
    right: 10px;
  }
`;

export const InvalidInputIcon = styled(ErrorIcon)`
  width: 24px;
  height: 24px;
  fill: #e74a3b;
`;
export const ValidInputIcon = styled(ValidIcon)`
  width: 24px;
  height: 24px;
  fill: #3cbc81;
`;
