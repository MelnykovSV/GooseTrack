import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const MainButton = styled(Button)`
  padding: 12px;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;

  border-radius: 8px;

  text-transform: none;
  box-shadow: none;
  color: ${({ theme, secondary }) =>
    secondary ? theme.textPrimaryLight : theme.white};
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.bgSecondaryBtn : theme.accentPrimary};

  &:hover,
  &:focus {
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.bgSecondaryBtn : theme.accentPrimaryHover};
    box-shadow: none;
  }
`;

export const SecondaryButton = styled(Button)`
  padding: 12px;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;

  border-radius: 8px;

  text-transform: none;
  box-shadow: none;
  color: ${({ theme }) => theme.textPrimaryLight};
  background-color: ${({ theme }) => theme.bgSecondaryBtn};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.bgSecondaryBtn};
    box-shadow: none;
  }
`;
