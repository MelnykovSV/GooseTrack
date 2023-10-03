import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const device = {
  tablet: `(min-width: 768px)`,
  desktop: `(min-width: 1440px)`,
};

export const General = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  position: relative;
  background: #ffffff;
  border-radius: 16px;
  background: #ffffff;
`;

export const Option = styled.div`
  padding-top: 28px;
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
    padding-left: 153px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const ButtonData = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 30px;
  color: #ffffff;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: 0em;
  text-transform: uppercase;
  @media ${device.tablet} {
    width: 190px;
    height: 34px;
    margin-right: 8px;
  }
`;

export const ButtonsIcon = styled.div`
  display: flex;
`;

export const ButtonLast = styled.button`
  border-radius: 8px 0 0 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  fill: white;
  overflow: hidden;
  cursor: pointer;
  padding: 8px, 12px, 8px, 12px;
  background-color: #ffffff;

  width: 36px;
  height: 30px;
  margin: 0;
  :hover {
    transform: scale(1.2);
  }
  @media ${device.tablet} {
    width: 38px;
    height: 34px;
  }
`;

export const IconLast = styled(FaChevronLeft)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: #111111;

  :hover {
    transform: scale(1.2);
    fill: #3e85f3;
  }
`;

export const ButtonNext = styled.button`
  border-radius: 0 8px 8px 0;
  border: 1px solid rgba(220, 227, 229, 0.8);
  overflow: hidden;
  cursor: pointer;
  padding: 8px, 12px, 8px, 12px;
  background-color: #ffffff;
  width: 36px;
  height: 30px;
  margin: 0;

  :hover {
    transform: scale(1.2);
  }
  @media ${device.tablet} {
    width: 38px;
    height: 34px;
  }
`;

export const IconNext = styled(FaChevronRight)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: #111111;

  :hover {
    transform: scale(1.2);
    fill: #3e85f3;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  @media ${device.tablet} {
    margin-top: 0px;
  }
`;

export const Item = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: #343434;
  text-align: left;
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media ${device.tablet} {
    font-size: 16px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const Icon = styled.svg`
  width: 8px;
  height: 8px;
  margin-right: 8px;
`;