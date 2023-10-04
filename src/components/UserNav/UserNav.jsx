import React from 'react';
import {
  Container,
  Navigation,
  StyledNavLink,
  CommonSvgStyled,
} from './UserNav.styled';
import { ReactComponent as UserAccountIcon } from '../../icons/SideBarIcons/user-check-01.svg';
import { ReactComponent as CalendarIcon } from '../../icons/SideBarIcons/calendar-check-02.svg';
import { ReactComponent as StatisticsIcon } from '../../icons/SideBarIcons/chart.svg';

export const UserNav = () => {
  return (
    <Container>
      <Navigation>
        <StyledNavLink to="/account">
          <CommonSvgStyled>
            <UserAccountIcon />
          </CommonSvgStyled>
          My account
        </StyledNavLink>
        <StyledNavLink to="/calendar">
          <CommonSvgStyled>
            <CalendarIcon />
          </CommonSvgStyled>
          Calendar
        </StyledNavLink>
        <StyledNavLink to="/statistics">
          <CommonSvgStyled>
            <StatisticsIcon />
          </CommonSvgStyled>
          Statistics
        </StyledNavLink>
      </Navigation>
    </Container>
  );
};
