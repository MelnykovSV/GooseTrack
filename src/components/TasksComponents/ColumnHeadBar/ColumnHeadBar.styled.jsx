import styled from '@emotion/styled';
import { LuPlusCircle } from 'react-icons/lu';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
  padding: 6px 0;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  margin: 0;

  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  color: ${({ theme }) => theme.textPrimary};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Button = styled(LuPlusCircle)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.textPrimary};

  transition: stroke 250ms linear;
  &:hover {
    stroke: #3e85f3;
  }
`;
