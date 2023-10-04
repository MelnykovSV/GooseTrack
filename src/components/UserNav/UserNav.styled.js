import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CommonSvgStyled = styled.svg`
  stroke: ${props => props.theme.textPrimaryLight};
  margin-right: 10px;
  height: 24px;
  width: 24px;
  &:focus {
    stroke: ${props => props.theme.accentPrimary};
  }
  &:active {
    stroke: ${props => props.theme.accentPrimary};
  }
  &:hover {
    stroke: ${props => props.theme.accentPrimary};
  }
`;

export const StyledNavLink = styled(NavLink)`
  min-width: 185px;
  min-height: 56px;
  text-align: left;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: ${props => props.theme.textPrimaryLight};
  background-color: ${props => props.theme.white};
  text-decoration: none;
  padding: 16px 16px 16px 20px;

  &.active {
    color: ${props => props.theme.accentPrimary};
    background-color: ${props => props.theme.bgToggleUnactive};
  }

  &:hover {
    color: ${props => props.theme.accentPrimary};
    background-color: ${props => props.theme.bgToggleUnactive};
  }
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
