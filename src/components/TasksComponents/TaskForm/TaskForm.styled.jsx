import styled from '@emotion/styled';
import { CgClose } from 'react-icons/cg';
import { ReactComponent as PencilIcon } from '../../../images/TaskIcons/pencil-01.svg';
import { HiPlus } from 'react-icons/hi';

export const Form = styled.form`
  position: relative;
  padding: 48px 18px 40px;
  width: 303px;

  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.strokeTransparant};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  @media screen and (min-width: 768px) {
    padding: 40px 28px;
    width: 396px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.textPrimary};

  background-color: transparent;
  border: none;

  cursor: pointer;

  transition: color
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.accentPrimary};
  }
`;

export const CloseIcon = styled(CgClose)`
  width: 24px;
  height: 24px;

  fill: currentColor;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const LabelText = styled.span`
  display: block;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.labelTaskForm};

  font-size: 12px;
  line-height: 1.16;
`;

export const Input = styled.input`
  padding: 12px 14px;
  width: 100%;

  color: ${({ theme }) => theme.textPrimaryLight};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  border-color: ${({ theme }) => theme.borderInputTaskForm};
  border-radius: 8px;
  background: ${({ theme }) => theme.bgTextarea};

  &::placeholder {
    color: ${({ theme }) => theme.textPrimaryLight};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 14px;
    margin-bottom: 28px;
  }
`;

export const RadioBtnContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

export const RadioBtnLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover .active {
    border-color: ${({ theme, $priority }) => {
      switch ($priority) {
        case 'low':
          return 'rgba(114, 194, 248, 0.5)';
        case 'medium':
          return '#fce7b8';
        case 'high':
          return theme.accentRedLight;
        default:
          throw new Error('Invalid status');
      }
    }};
  }

  & .active {
    border-color: ${({ theme, $priority, $selected }) => {
      if ($selected) {
        switch ($priority) {
          case 'low':
            return 'rgba(114, 194, 248, 0.5)';
          case 'medium':
            return '#fce7b8';
          case 'high':
            return theme.accentRedLight;
          default:
            throw new Error('Invalid status');
        }
      }
    }};
  }
`;

export const RadioBtnLabelText = styled.span`
  color: ${({ theme }) => theme.textPrimaryLight};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
`;

export const RadioBtn = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Indicator = styled.span`
  display: block;
  width: 10px;
  height: 10px;

  background-color: ${({ theme, $priority }) => {
    switch ($priority) {
      case 'low':
        return '#72c2f8';
      case 'medium':
        return theme.accentYellow;
      case 'high':
        return theme.accentRed;
      default:
        throw new Error('Invalid status');
    }
  }};
  border: 0.7px solid ${({ theme }) => theme.bgPrimary};
  border-radius: 50%;
`;

export const IndicatorBorder = styled.span`
  display: inline-block;

  border: 2px solid transparent;
  border-radius: 50%;

  transition: border-color
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 12px;
  width: 100%;

  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;

export const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  max-width: 135px;

  color: ${({ theme }) => theme.white};

  background-color: ${({ theme }) => theme.accentPrimary};

  @media screen and (min-width: 768px) {
    max-width: 182px;
  }
`;

export const CancelButton = styled(Button)`
  max-width: 118px;

  color: ${({ theme }) => theme.taskFormCancelButton};

  background-color: #efefef;

  @media screen and (min-width: 768px) {
    max-width: 144px;
  }
`;

export const EditIcon = styled(PencilIcon)`
  width: 16px;
  height: 16px;

  stroke: currentColor;
`;

export const AddIcon = styled(HiPlus)`
  width: 18px;
  height: 18px;

  stroke: currentColor;
`;

export const ErrorText = styled.span`
  margin-top: 4px;
  padding-left: 8px;
  min-height: 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #e74a3b;
`;
