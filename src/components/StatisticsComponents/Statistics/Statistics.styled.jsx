import styled from '@emotion/styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from 'components/Button/Button';

export const device = {
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1440px)`,
};

export const General = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 28px 14px 135px;

  width: 335px;
  max-width: 100%;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.bgStatistics};

  @media ${device.tablet} {
    width: 704px;
    padding: 132px 32px 224px;
  }

  @media ${device.desktop} {
    width: 1087px;
    padding: 134px 114px 104px;
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

export const Option = styled.div`
  margin-bottom: 40px;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-right: 32px;
    margin-left: 32px;
  }

  @media ${device.desktop} {
    margin-right: 40px;
    margin-left: 40px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 259px;
  }
`;

export const ButtonData = styled(Button)`
  width: 175px;
  padding: 6px 12px;

  font-weight: 700;
  line-height: 1.28;
  text-transform: uppercase;

  @media ${device.tablet} {
    padding-top: 8px;
    padding-bottom: 8px;

    font-size: 14px;
    line-height: 1.28;
  }
`;

export const Arrows = styled.div`
  display: flex;
  align-items: center;
`;
export const IconPrev = styled(FaChevronLeft)`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.textPrimaryLight};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconNext = styled(FaChevronRight)`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.textPrimaryLight};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7px 10px;

  border: 1px solid ${({ theme }) => theme.borderStatistics};
  border-radius: ${props => (props.next ? '0 8px 8px 0' : '8px 0 0 8px;')};

  color: ${({ theme }) => theme.textPrimaryLight};
  background-color: ${({ theme }) => theme.bgStatistics};

  cursor: pointer;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover > svg {
    transform: scale(1.2);
    fill: ${({ theme }) => theme.accentPrimary};
  }

  @media ${device.tablet} {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;

  margin: 0;
  padding: 0;
  margin-top: 20px;

  list-style-type: none;

  @media ${device.tablet} {
    margin-top: 0px;
    gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Poppins;
  font-weight: 400;
  line-height: 1.28;

  color: ${({ theme }) => theme.textPrimaryLight};

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const Icon = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 8px;

  border-radius: 50%;

  background-color: ${({ theme, showFor }) =>
    showFor === 'day' ? theme.accentPrimary : theme.accentRedLight};
`;
