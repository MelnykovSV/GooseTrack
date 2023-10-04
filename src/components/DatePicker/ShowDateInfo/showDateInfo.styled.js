import styled from 'styled-components';

export const Container = styled.div`


  .dateBox {
    width: 704px;
    height: 68px;
    border: 1px solid rgba(220, 227, 229, 0.8);
    display: flex;
    border-radius: 8px;
    align-items: center;
    margin-top: 10px;
  }

  .dayOfWeek {
    text-align: center;
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
  }


  .container {
    max-width: 1440px;
  }

  .boxButtonDay {
    display: flex;
  }
`;
