import styled from '@emotion/styled';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 252px;

  @media screen and (min-width: 768px) {
    width: 503px;
  }
`;

export const Description = styled.p`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  text-align: center;

  color: ${({ theme }) => theme.textNotFound};
`;

export const StyledBtn = styled(Button)`
  margin-top: 24px;
  padding: 14px 32px;

  border-radius: 16px;

  font-weight: 600;
  letter-spacing: -0.28px;

  box-shadow: 4px 2px 16px 0px ${({ theme }) => theme.shadowNotFound};

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    padding: 16px 48px;

    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  color: ${({ theme }) => theme.white};

  @media screen and (min-width: 768px) {
  }
`;
