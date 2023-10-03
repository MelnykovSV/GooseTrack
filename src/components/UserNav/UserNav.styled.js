import styled from '@emotion/styled';

export const NavLink = styled.a`
  min-width: 185px;
  min-height: 56px;
  text-align: left;
  display: flex;
  align-items: center;
  color: ${props => props.theme.textPrimaryLightTransparent};
  @media (min-width: 768px) {
    min-width: 225px;
  }
  @media (min-width: 1440px) {
    min-width: 240px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Container = styled.div`
  margin-top: 100px;
  height: 100vh;
`;
