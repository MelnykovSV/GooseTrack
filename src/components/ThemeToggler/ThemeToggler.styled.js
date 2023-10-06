import styled from '@emotion/styled';
import { BiMoon } from 'react-icons/bi';

export const ThemeToggle = styled.div`
  min-width: 20px;
  min-height: 20px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media (min-width: 768px) {
    min-width: 26px;
    min-height: 26px;
    margin-left: 28px;
  }
`;

export const ThemeBtn = styled.button`
  background-color: ${props => props.theme.bgSecondary};
  border: none;
  margin-left: 18px;
  padding: 0px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-left: 24px;
  }
`;

export const MoonIcon = styled(BiMoon)`
  height: 24px;
  width: 24px;
  color: ${props => props.theme.accentPrimary};
  background-color: ${props => props.theme.bgSecondary};
  @media (min-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;
