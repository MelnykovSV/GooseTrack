import styled from '@emotion/styled';
import { ReactComponent as Arrow } from '../../../images/TaskIcons/arrow-circle-broken-right.svg';

export const StatusButton = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  cursor: pointer;

  color: ${({ theme }) => theme.textPrimaryLight};
  border: none;
  background-color: transparent;

  transition: color
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const Status = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const ArrowIcon = styled(Arrow)`
  height: 14px;
  width: 14px;
  stroke: currentColor;

  transition: stroke
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }
`;
