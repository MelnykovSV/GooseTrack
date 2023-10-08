import styled from '@emotion/styled';

export const UserSectionWrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px 18px 40px 18px;
  margin-bottom: 38px;
  margin-top: 31px;
  background: ${p => p.theme.bgUserform};
  border-radius: 16px;

  @media screen and (min-width: 767px) {
    display: flex;
    padding: 40px 175px 40px 175px;
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 165px 60px 165px;
    margin-top: 0px;
  }
`;
