import styled from '@emotion/styled';
import { CgClose } from 'react-icons/cg';

export const Form = styled.form`
  position: relative;

  padding: 48px 18px 40px;
  width: 303px;

  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.strokeTransparant};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
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
`;

export const LabelText = styled.span`
  display: block;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.textPrimaryLightTransparent};
  font-size: 12px;
  line-height: 1.16;
`;

export const Input = styled.input``;

export const InputContainer = styled.div`
  display: grid;
  gap: 15px;
`;
