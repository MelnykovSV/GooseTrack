import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${props => props.theme.bgSecondary};

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
    /* padding-left: 16px; */
    padding-left: 0px;
    /* padding-right: 16px; */
    padding-right: 32px;
    max-width: 1440px;
  }
`;

export default Container;
