import styled from '@emotion/styled';

import 'react-calendar/dist/Calendar.css';

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

  & .react-calendar {
    width: 235px;
    max-width: 100%;

    font-family: 'Inter';
    line-height: 1.125em;

    border-radius: 8px;

    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.accentPrimary};
  }

  & .react-calendar--doubleView {
    width: 700px;
  }

  & .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  & .react-calendar__year-view {
    padding: 0 18px 18px;
  }

  & .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  & .react-calendar,
  & .react-calendar *,
  & .react-calendar *:before,
  & .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  & .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;

    transition: color 300ms ease, background-color 350ms ease;

    &:enabled:hover {
      cursor: pointer;
    }
  }

  & .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 8px;
    padding: 18px 18px 0;

    & button {
      min-width: 30px;
    }

    & button:enabled:hover,
    button:enabled:focus {
      background: none;
    }
  }

  & .react-calendar__navigation__label {
    margin: 0;
    padding: 0;

    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;

    color: ${({ theme }) => theme.white};
  }

  & .react-calendar__navigation__arrow {
    padding: 0;
    margin: 0;

    color: ${({ theme }) => theme.white};

    & svg {
      width: 12px;
      height: 12px;
    }
  }

  & .react-calendar__navigation__next-button {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & .react-calendar__navigation__prev-button {
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & .react-calendar__year-view__months__month,
  .react-calendar__decade-view__years__year,
  .react-calendar__century-view__decades__decade {
    color: ${({ theme }) => theme.white};
    padding: 0;
  }

  & .react-calendar__month-view__days {
    margin-top: 12px;
    padding: 0 18px 18px;
  }

  & .react-calendar__month-view__weekdays {
    padding: 0 18px;

    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;

    border-bottom: 1px solid ${({ theme }) => theme.calendarInactive};
  }

  & .react-calendar__month-view__weekdays__weekday {
    color: ${({ theme }) => theme.calendarWeekday};

    & abbr[title] {
      text-decoration: none;
    }
  }

  & .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.white};
  }

  & .react-calendar__month-view__days__day,
  .react-calendar__month-view__days__day--weekend {
    color: ${({ theme }) => theme.white};

    &:enabled:hover {
      color: ${({ theme }) => theme.accentPrimary};
    }
  }

  & .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.calendarInactive};
  }

  & .react-calendar__tile {
    max-width: 100%;
    padding: 6px 0;

    background: none;
    text-align: center;
    font-weight: 400;
    line-height: 16px;

    border-radius: 50%;

    &:disabled {
      color: ${({ theme }) => theme.calendarInactive};
    }

    &:enabled:focus,
    :enabled:hover {
      background-color: ${({ theme }) => theme.white};
    }
  }

  & .react-calendar__tile--now,
  .react-calendar__tile--hasActive {
    &:enabled:focus,
    :enabled:hover {
      color: ${({ theme }) => theme.accentPrimary};
      background-color: ${({ theme }) => theme.white};
    }
  }

  & .react-calendar__tile--active {
    color: ${({ theme }) => theme.accentPrimary};
    background-color: ${({ theme }) => theme.white};

    &:enabled:focus,
    :enabled:hover {
      color: ${({ theme }) => theme.accentPrimary};
      background-color: ${({ theme }) => theme.white};
    }
  }

  & .react-calendar--selectRange .react-calendar__tile--hover {
    color: ${({ theme }) => theme.accentPrimary};
    background-color: ${({ theme }) => theme.white};
  }
`;
