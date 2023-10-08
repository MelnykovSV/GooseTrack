import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 225px;
  height: 100vh;
  padding: 24px 20px 24px 20px;

  background-color: ${({ theme }) => theme.bgSidebar};

  @media (min-width: 768px) {
    max-width: 290px;
    padding: 24px 32px 24px 32px;
  }

  @media (min-width: 1440px) {
    padding: 32px 24px 24px 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  width: 185px;
  height: 68px;
`;

export const LogoImg = styled.img`
  width: 36px;
  height: 36px;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 1440px) {
    width: 70px;
    height: 70px;
  }
`;

export const LogoText = styled.p`
  display: inline;
  margin-left: 6px;

  font-family: Inter;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;

  color: ${({ theme }) => theme.textLogo};

  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  @media (min-width: 1440px) {
    margin-left: 10px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const LogoPiece = styled.p`
  display: inline;

  font-family: Inter;
  font-style: italic;
`;

export const CloseBtn = styled.button`
  margin-left: 25px;

  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.textPrimaryLight};
  background-color: ${({ theme }) => theme.bgSidebar};

  @media (min-width: 768px) {
    margin-left: 30px;
    height: 34px;
    width: 34px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const CloseIcon = styled.svg`
  height: 24px;
  width: 24px;

  fill: currentColor;

  @media (min-width: 768px) {
    height: 34px;
    width: 34px;
  }
`;
