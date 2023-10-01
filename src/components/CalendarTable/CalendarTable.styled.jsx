import styled from '@emotion/styled';

export const TableContainer = styled.div`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;

export const Table = styled.div`
  border: 1px solid ${({ theme }) => theme.strokeTransparant};
  border-radius: 8px;

  overflow: hidden;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  min-height: 94px;

  background-color: ${({ theme }) => theme.bgPrimary};

  &:not(:last-child) {
    border-bottom-color: ${({ theme }) => theme.strokeTransparant};
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }

  @media screen and (min-width: 768px) {
    min-height: 144px;
  }

  @media screen and (min-width: 1440px) {
    min-height: 125px;
  }
`;

export const TableCell = styled.div`
  position: relative;

  padding-left: 2px;
  padding-right: 2px;
  padding-top: 48px;
  padding-bottom: 2px;

  overflow: hidden;

  cursor: ${({ $isEmpty }) => ($isEmpty ? 'default' : 'pointer')};

  &:not(:first-of-type) {
    border-left-color: ${({ theme }) => theme.strokeTransparant};
    border-left-width: 1px;
    border-left-style: solid;
  }

  &:hover {
    & .disabled-hover:not(:hover) + .container {
      background-color: ${({ theme }) => theme.accentBlueLight};

      & .value {
        color: ${({ theme }) => theme.textPrimaryLight};
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 58px;
    padding-bottom: 4px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
  }
`;

export const DayOfMonthContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;

  padding: 4px 6px;

  background-color: ${({ theme, $isCurrentDate }) =>
    $isCurrentDate ? theme.accentBlue : 'transparent'};
  border-radius: 6px;

  cursor: pointer;

  transition: background-color
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;

    padding: 4px 8px;
  }
`;

export const DayOfMonth = styled.p`
  margin: 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.16;
  text-transform: uppercase;
  color: ${({ theme, $isCurrentDate }) =>
    $isCurrentDate ? theme.white : theme.textPrimaryLight};

  user-select: none;

  transition: color
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

const Button = styled.button`
  padding-top: 2px;
  padding-right: 2px;
  padding-bottom: 2px;
  padding-left: 6px;
  width: 100%;

  font-size: 10px;
  font-weight: 700;
  line-height: 1.4;
  white-space: nowrap;
  text-align: start;

  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;

  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;

  user-select: none;

  transition: border-color
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};

  @media screen and (min-width: 768px) {
    padding: 1px 5px;

    font-size: 14px;
    line-height: 1.28;

    border-width: 3px;
  }

  @media screen and (min-width: 1440px) {
    padding: 1px 7px;

    border-width: 3px;
  }
`;

export const MiniCard = styled(Button)`
  color: ${({ theme, $priority }) => {
    switch ($priority) {
      case 'low':
        return theme.accentPrimary;
      case 'medium':
        return theme.accentYellow;
      case 'high':
        return theme.accentRed;
      default:
        throw new Error('Invalid status');
    }
  }};

  background: ${({ theme, $priority }) => {
    switch ($priority) {
      case 'low':
        return theme.accentBlueLight;
      case 'medium':
        return theme.accentYellowLight;
      case 'high':
        return theme.accentRedLight;
      default:
        throw new Error('Invalid status');
    }
  }};

  &:not(:last-child) {
    margin-bottom: 2px;
  }

  &:hover,
  &:focus {
    border-color: ${({ theme, $priority }) => {
      switch ($priority) {
        case 'low':
          return theme.accentPrimary;
        case 'medium':
          return theme.accentYellow;
        case 'high':
          return theme.accentRed;
        default:
          throw new Error('Invalid status');
      }
    }};
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const MoreButton = styled(Button)`
  margin-top: 2px;

  color: #333333;

  background: #e5e5e5;

  &:hover,
  &:focus {
    border-color: #333333;
  }

  @media screen and (min-width: 768px) {
    margin-top: 4px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 8px;
  }
`;
