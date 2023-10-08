import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TbCalendarCheck, TbUserCheck } from 'react-icons/tb';
import { HiOutlineChartBar } from 'react-icons/hi2';

export const CommonSvgStyled = styled.svg`
  margin-right: 10px;
  height: 24px;
  width: 24px;

  stroke: currentColor;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;

  min-width: 185px;
  min-height: 56px;
  padding: 16px 16px 16px 20px;

  border-radius: 8px;

  color: ${({ theme }) => theme.textPrimaryLightTransparent};

  text-align: left;
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.textNav};
    background-color: ${({ theme }) => theme.bgToggleUnactive};

    pointer-events: none;
  }

  &:hover {
    color: ${({ theme }) => theme.textNav};
    background-color: ${({ theme }) => theme.bgToggleUnactive};
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

export const UserIcon = styled(TbUserCheck)`
  margin-right: 10px;
  height: 24px;
  width: 24px;

  stroke: currentColor;
`;

export const CalendarIcon = styled(TbCalendarCheck)`
  margin-right: 10px;
  height: 24px;
  width: 24px;

  stroke: currentColor;
`;

export const StatisticsIcon = styled(HiOutlineChartBar)`
  margin-right: 10px;
  height: 24px;
  width: 24px;

  stroke: currentColor;
`;
