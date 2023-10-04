import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 20px 0px 20px;
  position: fixed;
  z-index: 1;
  align-items: center;
  @media (min-width: 768px) {
    padding: 24px 32px 0px 32px;
  }
  @media (min-width: 1440px) {
    position: relative;
    z-index: 0;
    background-color: ${props => props.theme.bgSecondary};
  }
`;

export const BurgerBtn = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  background-color: ${props => props.theme.bgSecondary};
  @media (min-width: 768px) {
    height: 34px;
    width: 34px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const PageTitle = styled.div``;

export const UserWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;
