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

  max-width: 100%;
  height: 100%;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.bgStatistics};
  /* background-color: #ffffff; */
`;

export const Option = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  /* padding-top: 28px;
  padding-right: 14px;
  padding-left: 14px;

  @media ${device.tablet} {
    padding-top: 132px;
    padding-right: 64px;
    padding-left: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.desktop} {
    padding-top: 134px;
    padding-right: 154px;
    padding-left: 153px; */
  /* } */
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const ButtonData = styled(Button)`
  max-width: 190px;
  padding: 6px 12px;

  font-weight: 700;
  line-height: 1.28;
  text-transform: uppercase;

  @media ${device.tablet} {
    /* width: 190px;
    height: 34px; */
    margin-right: 8px;
  }
`;

export const Arrows = styled.div`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7px 10px;

  /* border: 1px solid rgba(220, 227, 229, 0.5); */
  border: 1px solid ${({ theme }) => theme.borderStatistics};
  border-radius: ${props => (props.next ? '0 8px 8px 0' : '8px 0 0 8px;')};

  /* color: #343434; */
  color: ${({ theme }) => theme.textPrimaryLight};
  /* background-color: #ffffff; */
  background-color: ${({ theme }) => theme.bgStatistics};

  cursor: pointer;

  &:hover > svg {
    transform: scale(1.2);
    /* color: #3e85f3; */
    color: ${({ theme }) => theme.accentPrimary};
  }

  /* @media ${device.tablet} {
    width: 38px;
    height: 34px;
  } */
`;

export const IconPrev = styled(FaChevronLeft)`
  width: 16px;
  height: 16px;

  fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconNext = styled(FaChevronRight)`
  width: 16px;
  height: 16px;

  fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 0;
  list-style-type: none;

  /* @media ${device.tablet} {
    margin-top: 0px;
  } */
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Poppins;
  font-weight: 400;

  /* color: #343434; */
  color: ${({ theme }) => theme.textPrimaryLight};

  /* &:not(:last-child) {
    margin-right: 15px;
  }

  @media ${device.tablet} {
    font-size: 16px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  } */
`;

export const Icon = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 8px;

  border-radius: 50%;

  background-color: ${({ theme, showFor }) =>
    showFor === 'day' ? theme.accentPrimary : theme.accentRedLight};
`;
