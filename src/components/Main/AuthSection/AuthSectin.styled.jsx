import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainSectionContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3e85f3;
`;

export const MainSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

export const MainSectionGoose = styled.picture`
  width: 142px;
  height: 142px;
margin left: auto;
margin right: auto;

 @media screen and (min-width: 1440px) {
     width: 150px;
    height: 149px;
  }
`;

export const MainSectionImageImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainSectionTitle = styled.h1`
  margin-top: 2px;
  font-size: 44px;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  line-height: 1.09;
  color: #fff;
  // width: 258px;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const MainSectionTitleItalic = styled.span`
  font-style: italic;
`;

export const AuthLink = styled(Link)`
  color: #fff;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 116.667% */
  text-decoration-line: underline;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AuthLinkLogIn = styled(Link)`
  color: #3e85f3;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
  background-color: #fff;
  padding: 14px 32px;
  border-radius: 16px;
  margin-bottom: 16px;
  text-decoration: none;
  box-shadow: rgba(136, 165, 191, 0.48) 4px 2px 16px 0px;
  @media screen and (min-width: 768px) {
    padding: 15px 32px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AuthLinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: baseline;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
