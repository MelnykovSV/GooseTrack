import styled from '@emotion/styled';
import { LuPlus } from 'react-icons/lu';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 11px;
  width: 100%;

  cursor: pointer;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: rgb(62, 133, 243); stroke-width: 2; stroke-dasharray: 5 5'/></svg>");

  background-color: ${({ theme }) => theme.accentSecondary};
  border:
   /* 1px dashed */ ${({ theme }) => theme.accentPrimary};
  border-radius: 8px;

  transition: background-color
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.accentPrimary};
    color: ${({ theme }) => theme.bgPrimary};
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    margin-bottom: 14px;
  }
`;

export const Icon = styled(LuPlus)`
  width: 22px;
  height: 22px;

  stroke: currentColor;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
