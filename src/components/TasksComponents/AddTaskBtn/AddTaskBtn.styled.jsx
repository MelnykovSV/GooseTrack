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

  transition: background-color 350ms ease-in-out, color 350ms ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => (props.disabled ? '#cccccc' : '#2b78ef')};
    color: ${props => (props.disabled ? '#111111' : '#ffffff')};
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
