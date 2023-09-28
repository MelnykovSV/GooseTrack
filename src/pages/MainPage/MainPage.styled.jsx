import styled from 'styled-components';

export const Container = styled.div`
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
    max-width: 1440px;`;

export const Section = styled.section`
  width: 1440px;
  height: 770px;
  background-color: #3e85f3;
`;

export const SectionTitleHero = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 120px;
  font-style: italic;
  font-weight: 700;
  line-height: 150px;
  margin: 0;
  text-align: center;
`;

export const Title = styled.p``;

export const Text = styled.p`
  max-width: 380px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Link = styled.a`
  color: #fff;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  text-decoration-line: underline;
`;
