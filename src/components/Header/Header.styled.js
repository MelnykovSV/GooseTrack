import styled from '@emotion/styled';
// import { BiMoon } from 'react-icons/bi';

// export const MoonIcon = styled(BiMoon)`
//   margin-right: 10px;
//   height: 24px;
//   width: 24px;
//   background-color: ${props => props.theme.bgSecondary};
//   @media (min-width: 768px) {
//     height: 32px;
//     width: 32px;
//   }
//   stroke: ${props => props.theme.accentPrimary};
// `;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 24px;
  /* padding: 24px 20px 0px 20px; */
  /* position: fixed; */
  /* z-index: 1; */
  align-items: center;

  @media (min-width: 768px) {
    /* padding: 24px 32px 0px 32px; */
  }

  @media (min-width: 1440px) {
    padding-left: 32px;
    padding-right: 32px;
    /* padding: 40px 32px 38px 32px; */
    /* position: relative;
    z-index: 0; */
    /* background-color: ${props => props.theme.bgSecondary}; */
  }
`;

export const PageTitleActive = styled.h1`
  margin: 0;
  line-height: 32px;
  font-size: 32px;
  color: ${props => props.theme.textPrimary};
`;

export const BurgerBtn = styled.button`
  border: none;

  color: ${props => props.theme.textPrimaryLight};
  background-color: ${props => props.theme.bgMain};

  cursor: pointer;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerIcon = styled.svg`
  height: 24px;
  width: 24px;

  stroke: currentColor;

  @media (min-width: 768px) {
    height: 34px;
    width: 34px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
