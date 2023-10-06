import styled from '@emotion/styled';

export const BodyContent = styled.div`
  background-color: ${props => props.theme.bgSecondary};
  /* padding: 150px 20px 40px 20px; */
  width: 100%;
  @media (min-width: 768px) {
    /* padding: 130px 32px 38px 32px; */
  }
  @media (min-width: 1440px) {
    padding: 32px 32px 32px 32px;
  }
`;

export const MainWrap = styled.div`
  display: flex;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
