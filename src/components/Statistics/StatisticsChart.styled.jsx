import styled from '@emotion/styled';

export const device = {
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1440px)`,
};

export const Container = styled.div`
  padding: 40px 14px;

  border-radius: 20px;
  border: 0.8px solid ${({ theme }) => theme.borderChart};

  @media ${device.tablet} {
    padding: 32px;

    border-radius: 29px;
  }

  @media ${device.desktop} {
    padding: 40px;
  }
`;

export const Title = styled.p`
  margin-bottom: 8px;

  font-weight: 600;
  line-height: 1.5;

  color: ${({ theme }) => theme.textPrimaryLight};

  @media ${device.tablet} {
    margin-bottom: 12px;
  }
`;
