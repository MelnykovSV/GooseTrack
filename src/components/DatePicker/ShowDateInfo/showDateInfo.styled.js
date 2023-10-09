import styled from '@emotion/styled';

export const Container = styled.div`
  .dateBox {
    width: 100%;
    height: 68px;
    border: 1px solid ${({ theme }) => theme.strokeTransparant};
    display: flex;
    border-radius: 8px;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 14px;
    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
    }
  }

  .dayOfWeek {
    text-align: center;
    padding: 4px 6px;
    color: ${({ theme }) => theme.textPrimaryLight};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 112.5% */
    text-transform: uppercase;
  }

  .dateNumber {
    text-align: center;
  }

  .dayContainer {
    display: flex;
    flex-direction: column;
    width: 20px;
  }

  .dayContainer {
    width: 704px;
    height: 68px;
    border: 1px;
    border-color: rgba(220, 227, 229, 0.8);
    align-items: center;
    justify-content: center;
    display: flex;
    &.day {
      cursor: pointer;
    }
  }
  .dayContainer.current {
    pointer-events: none;

    .dayOfWeek {
      border-radius: 6px;
      background-color: #3e85f3;
      color: white;
    }
  }

  .containerMonth {
    width: 704px;
    height: 68px;
    border: 1px;
    border-color: rgba(220, 227, 229, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dateText {
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 6px;

    color: ${({ theme }) => theme.userProfileLabel};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(18 / 16);
    text-transform: uppercase;
  }
  .dateText.month {
    color: ${({ theme }) => theme.textPrimaryLight};
  }
  .dateText.month.weakend {
    color: ${({ theme }) => theme.weakend};
  }

  .container {
    max-width: 1440px;
  }

  .boxButtonDay {
    display: flex;
  }
`;
