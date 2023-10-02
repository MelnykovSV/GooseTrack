import styled from '@emotion/styled';
import Button from 'components/Button/Button';

export const Form = styled.form`
  padding: 20px 28px;
  max-width: 100%;
  width: 335px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.strokeTransparant};
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: 0px 4px 57px 0px ${({ theme }) => theme.shadowColor};

  @media screen and (min-width: 768px) {
    width: 468px;
    padding: 32px;
  }
`;

export const CloseIcon = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 24px;
  height: 24px;

  color: ${({ theme }) => theme.iconClose};

  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;

  fill: currentColor;
`;

export const Label = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.16;

  color: ${({ theme }) => theme.textModalTransparent};
`;
export const TextareaBox = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 14px;
  width: 100%;
  height: 130px;
  resize: none;

  outline: none;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.bgTextarea};
  background-color: ${({ theme }) => theme.bgTextarea};

  color: ${({ theme }) => theme.textPrimaryLight};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }
`;

export const StyledButton = styled(Button)`
  padding: 12px;
  width: 144px;
  max-width: 100%;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 198px;
  }
`;
