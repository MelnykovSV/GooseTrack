import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 225px;
  flex-direction: column;
  position: absolute;
  padding: 24px 20px 24px 20px;
  z-index: 99999;
  height: 100vh;
  background-color: ${props => props.theme.white};
  @media (min-width: 768px) {
    max-width: 290px;
    padding: 24px 32px 24px 32px;
  }
  @media (min-width: 1440px) {
    /* position: relative; */
    position: static;
    /* z-index: 0; */
    padding: 32px 24px 24px 24px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 185px;
  height: 68px;
  display: flex;
  @media (min-width: 768px) {
  }
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

export const Logotext = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-left: 6px;
  color: ${props => props.theme.accentPrimary};
  @media (min-width: 1440px) {
    margin-left: 10px;
    font-size: 24px;
  }
`;

export const LogOutBtn = styled.button`
  width: 130px;
  height: 46px;
`;

export const CloseBtn = styled.button`
  height: 24px;
  width: 24px;
  margin-left: 25px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.theme.bgPrimary};
  @media (min-width: 768px) {
    margin-left: 30px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
