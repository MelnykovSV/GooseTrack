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
`;
