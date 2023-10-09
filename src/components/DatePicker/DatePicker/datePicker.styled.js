import styled from '@emotion/styled';

export const DatePickerContainer = styled.div`
  .myDatepicker {
    color: white;
    background-color: #3e85f3;
    width: 125px;
    height: 34px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    text-align: center;
    width: 160px;
    cursor: pointer;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: calc(18 / 14);
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      width: 175px;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 7px 10px;

    border: 1px solid ${({ theme }) => theme.borderStatistics};
    color: ${({ theme }) => theme.textPrimaryLight};
    background-color: ${({ theme }) => theme.bgStatistics};

    cursor: pointer;

    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover > svg {
      transform: scale(1.2);
      color: ${({ theme }) => theme.accentPrimary};
    }

    @media screen and (min-width: 768px) {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
  .buttonLeft {
    color: rgba(220, 227, 229, 1);
    width: 38px;
    height: 34px;
    padding: 8px 12px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px;
    cursor: pointer;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover > svg {
      transform: scale(1.2);
      fill: ${({ theme }) => theme.accentPrimary};
    }
    svg {
      width: 16px;
      height: 16px;

      fill: ${({ theme }) => theme.textPrimaryLight};
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  .buttonLeft:focus {
    color: rgba(52, 52, 52, 1);
  }

  .buttonRight {
    color: rgba(220, 227, 229, 1);
    width: 38px;
    height: 34px;
    padding: 8px 12px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    border: 1px;
    cursor: pointer;
    &:hover > svg {
      transform: scale(1.2);
      fill: ${({ theme }) => theme.accentPrimary};
    }
    svg {
      width: 16px;
      height: 16px;

      fill: ${({ theme }) => theme.textPrimaryLight};
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  .buttonRight:focus {
    color: rgba(52, 52, 52, 1);
  }

  .navigation {
    /* display: flex;
    justify-content: space-between; */
  }
  .date-controllers-wrapper {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 32px;
    }
  }

  .boxButton {
    display: flex;
    gap: 2px;
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    @media screen and (min-width: 768px) {
      width: 258px;
    }
    button {
      display: block;
    }
  }
  .myDatepicker {
    text-transform: uppercase;
  }
  .showMonths {
    background-color: ${({ theme }) => theme.bgToggleUnactive};
    color: ${({ theme }) => theme.toggleUnactive};
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.bgToggleUnactive};
    width: 82px;
    height: 34px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    color: #3e85f3;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: calc(18 / 16);
  }

  .showDay {
    background-color: ${({ theme }) => theme.bgToggleUnactive};
    color: ${({ theme }) => theme.toggleUnactive};
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.bgToggleUnactive};
    width: 82px;
    height: 34px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    color: #3e85f3;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: calc(18 / 16);
  }

  .showDay.active {
    background-color: ${({ theme }) => theme.bgToggleActive};
    color: ${({ theme }) => theme.toggleActive};
  }

  .showMonths.active {
    background-color: ${({ theme }) => theme.bgToggleActive};
    color: ${({ theme }) => theme.toggleActive};
  }
  .boxButtonDayMonth {
    display: flex;
    justify-content: start;
    a {
      display: flex;
      /* padding: 8px 25px; */
      font-size: 14px;
      line-height: calc(18 / 14);
      /* vertical-align: center; */
      justify-content: center;
      align-items: center;

      text-decoration: none;
    }
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker-wrapper {
    display: block;
  }
  .react-datepicker__day {
    color: #fff;
  }

  .react-datepicker__day:hover {
    background-color: #fff;
    color: #3e85f3;
    border-radius: 100%;
  }

  .react-datepicker__day--weekend {
    color: rgba(255, 255, 255, 0.3);
  }

  .react-datepicker__day--selected {
    color: #3e85f3;
    background-color: #fff;
    border-radius: 100%;
  }

  .react-datepicker {
    background-color: #3e85f3;
  }

  .react-datepicker__header {
    background-color: #3e85f3;
    color: #fff;
    border: none;
  }

  .react-datepicker__current-month {
    color: #fff;
  }

  .react-datepicker__navigation {
    color: #fff;
  }

  .react-datepicker__day-name {
    color: #fff;
  }

  .react-datepicker {
    border-radius: 10px;
  }

  .react-datepicker__month-text {
    color: #fff;
    font-size: 14px;
    line-height: calc(18 / 14);
    font-weight: 600;
    :hover {
      color: #3e85f3;
    }
  }

  /* .react-datepicker__day--weekend {
  color: rgba(255, 255, 255, 0.3);
} */

  .react-datepicker__day--outside-month {
    color: transparent;
  }
  .react-datepicker__navigation--previous {
    left: 3px;
    top: 8px;
  }
  .react-datepicker__navigation--next {
    right: 3px;
    top: 8px;
  }

  .react-datepicker__header {
    height: 83px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: none;
    position: relative;
  }
  .react-datepicker__day-names {
    /* border-bottom: 1px solid ${({ theme }) => theme.calendarInactive}; */
    :after {
      content: '';
      position: absolute;
      width: 90%;
      height: 1px;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.calendarInactive};
    }
  }

  .react-datepicker__day-name {
    color: #ffff;
    font-family: inherit;
    font-size: 16px;
  }
`;
