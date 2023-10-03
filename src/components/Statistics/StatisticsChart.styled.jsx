import styled from 'styled-components';

export const device = {
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1440px)`,
};

export const Schedule = styled.div`
  padding-right: 14px;
  padding-left: 14px;
  margin-top: 40px;
  padding-bottom: 135px;
  width: 100%;
  height: auto;
  @media ${device.tablet} {
    padding-bottom: 224px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media ${device.desktop} {
    padding-bottom: 104px;
    padding-right: 114px;
    padding-left: 113px;
  }
`;

export const Container = styled.div`
  border: 0.8px solid #3e85f3;
  border-radius: 16px;
  padding-right: 14px;
  padding-left: 14px;
  padding-bottom: 40px;
  @media ${device.tablet} {
    padding-bottom: 32px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media ${device.desktop} {
    padding-bottom: 40px;
    padding-right: 40px;
    padding-left: 40px;
  }
`;

export const Title = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  color: #343434;

  padding-top: 40px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    padding-top: 32px;
  }

  @media ${device.desktop} {
    padding-top: 40px;
  }
`;