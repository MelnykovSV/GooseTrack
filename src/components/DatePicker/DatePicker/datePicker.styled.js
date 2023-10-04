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
  }

  .buttonLeft {
    color: rgba(220, 227, 229, 1);
    width: 38px;
    height: 34px;
    padding: 8px 12px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px;
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
  }
  .buttonRight:focus {
    color: rgba(52, 52, 52, 1);
  }

  .navigation {
    display: flex;
    justify-content: space-between;
  }

  .boxButton {
    display: flex;
    gap: 2px;
  }
  .wrapBox {
    display: flex;
    align-items: baseline;
    gap: 15px;
  }
  .wrap {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .myDatepicker {
    text-transform: uppercase;
  }
  .showMonths {
    background-color: rgba(227, 243, 255, 1);
    color: rgba(62, 133, 243, 1);
    font-size: 16px;
    border: 1px solid rgba(227, 243, 255, 1);
    width: 82px;
    height: 34px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  .showDay {
    background-color: rgba(227, 243, 255, 1);
    color: rgba(62, 133, 243, 1);
    font-size: 16px;
    border: 1px solid rgba(227, 243, 255, 1);
    width: 82px;
    height: 34px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
  }

  .showDay.active {
    background-color: rgba(202, 232, 255, 1);
  }

  .showMonths.active {
    background-color: rgba(202, 232, 255, 1);
  }
  .boxButtonDayMonth {
    display: flex;
    justify-content: end;
  }
`;
