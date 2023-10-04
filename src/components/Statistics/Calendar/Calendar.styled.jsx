import styled from 'styled-components';

export const MiniCalendar = styled.div`
  position: absolute;
  top: 66px;
  left: 14px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    top: 174px;
    left: 64px;
  }

  @media screen and (min-width: 1440px) {
    top: 176px;
    left: 153px;
  }
`;