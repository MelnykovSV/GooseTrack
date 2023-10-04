import React from 'react';
import * as S from './UserNav.styled';

export const UserNav = () => {
  return (
    <S.Container>
      <S.Navigation>
        <S.StyledNavLink to="/account">
          <S.UserIcon />
          My account
        </S.StyledNavLink>
        <S.StyledNavLink to="/calendar">
          <S.CalendarIcon />
          Calendar
        </S.StyledNavLink>
        <S.StyledNavLink to="/statistics">
          <S.StatisticsIcon />
          Statistics
        </S.StyledNavLink>
      </S.Navigation>
    </S.Container>
  );
};
