import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const MainButton = styled(Button)(
  ({ theme }) => `
  padding: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;

  border-radius: 8px;

  text-transform: none;
  box-shadow: none;
  color: ${theme.white};
  background-color: ${theme.accentPrimary};

  &:hover {
    background-color: ${theme.accentPrimaryHover};
    box-shadow: none;
  }
`
);

export const SecondaryButton = styled(Button)(
  ({ theme }) => `
  padding: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;

  border-radius: 8px;

  text-transform: none;
  box-shadow: none;
  color: ${theme.textPrimaryLight};
  background-color: ${theme.bgSecondaryBtn};

  &:hover {
    background-color: ${theme.bgSecondaryBtn};
    box-shadow: none;
  }
`
);
