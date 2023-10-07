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
    justify-content: flex-start;
    gap: 8px;
  }
`;

export const ButtonData = styled(Button)`
  max-width: 190px;
  padding: 6px 12px;

  font-weight: 700;
  line-height: 1.28;
  text-transform: uppercase;

  @media ${device.tablet} {
    padding-top: 8px;
    padding-bottom: 8px;

    font-size: 16px;
    line-height: 1.12;
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

  border: 1px solid ${({ theme }) => theme.borderStatistics};
  border-radius: ${props => (props.next ? '0 8px 8px 0' : '8px 0 0 8px;')};

  color: ${({ theme }) => theme.textPrimaryLight};
  background-color: ${({ theme }) => theme.bgStatistics};

  cursor: pointer;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover > svg {
    transform: scale(1.2);
    color: ${({ theme }) => theme.accentPrimary};
  }

  @media ${device.tablet} {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const IconPrev = styled(FaChevronLeft)`
  width: 16px;
  height: 16px;

  fill: currentColor;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconNext = styled(FaChevronRight)`
  width: 16px;
  height: 16px;

  fill: currentColor;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
