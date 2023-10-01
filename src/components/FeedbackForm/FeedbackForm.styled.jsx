import styled from '@emotion/styled';
import Button from 'components/Button/Button';

export const StyledForm = styled.form(
  ({ theme }) => `
  padding: 20px 28px;
  max-width: 100%;
  width: 335px;

  border-radius: 8px;
  border: 1px solid ${theme.strokeTransparant};
  background-color: ${theme.bgPrimary};
  box-shadow: 0px 4px 57px 0px ${theme.shadowColor};
`
);

export const Textarea = styled.textarea(
  ({ theme }) => `
  padding: 12px 14px;
  width: 100%;
  height: 130px;
  resize: none;

  color: ${theme.textPrimaryLight};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
`
);

export const Label = styled.p(
  ({ theme }) => `
  font-size: 12px;
  line-height: 1.16;

  color: ${theme.textModalTransparent};`
);
export const TextareaBox = styled.label`
  margin-top: 20px;
`;

export const ButtonBox = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 8px;
`;

export const StyledButton = styled(Button)`
  padding: 12px;
  width: 144px;
  max-width: 100%;

  border-radius: 8px;
`;
