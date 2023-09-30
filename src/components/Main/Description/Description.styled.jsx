import styled from '@emotion/styled';

export const DescriptionContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1440px;
  }
`;

export const DescriptionContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 64px 20px;
  margin-top: 0;
  }

  & > li:nth-of-type(2) > :first-of-type {
    margin-left: auto;
  }

  @media (min-width: 768px) {
    padding: 64px 32px;
  }
  @media (min-width: 1440px) {
    padding: 64px 128px;
  }
`;

export const DescriptionBlock = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  @media (min-width: 1440px) {
    align-items: center;
    flex-direction: row;
    gap: 228px;
    margin-left: 205px;

    &:nth-of-type(2) {
      flex-direction: row-reverse;
      margin-right: auto;
      margin-left: 100px;
    }
  }
`;

export const DescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 275px;
  }
`;

export const DescriptionNumber = styled.h2`
  display: flex;
  font-size: 80px;
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -4px;
  color: #3e85f3;
  margin: 0;
`;

export const DescriptionNameAccent = styled.h2`
  display: inline-block;
  width: fit-content;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 8px 18px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: #3e85f3;
  text-transform: uppercase;
  border-radius: 44px;
  background-color: #dcebf7;

  @media (min-width: 768px) {
    line-height: 1.1;
    padding: 6px 18px;
    max-width: 264px;
    font-size: 40px;
  }
`;

export const DescriptionName = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: #171820;
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    line-height: 1.1;
    font-size: 40px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: #111111e5;
  margin-bottom: 40px;
  margin-top: 14px;
  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const DescritpionPicture = styled.picture`
  width: 335px;
  height: 457px;

  @media (min-width: 768px) {
    width: 704px;
    height: 700px;
  }
  @media (min-width: 1440px) {
    width: 604px;
    height: 700px;
  }
`;

export const DescriptionImg = styled.img`
  width: 100%;
  height: 100%;
`;
