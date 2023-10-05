import styled from 'styled-components';

export const Container = styled.div`
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

  .showDay:focus {
    background-color: rgba(202, 232, 255, 1);
  }

  .showMonths:focus {
    background-color: rgba(202, 232, 255, 1);
  }

  .dateBox {
    width: 704px;
    height: 68px;
    border: 1px solid rgba(220, 227, 229, 0.8);
    display: flex;
    border-radius: 8px;
    align-items: center;
    margin-top: 10px;
    position: absolute;
    left: 0;
    top: 58px;
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
    margin:0;
    margin-bottom: 8px
    font-size: 16px;
    ;
  }

  .boxButtonDayMonth {
    display: flex;
    position: absolute;
    left: 539px;
    top: 0px;
    height: 34px;
  }

  .container {
    max-width: 1440px;
  }

  .boxButtonDay {
    display: flex;
  }

  .dateText:hover {
 color:rgba(62, 133, 243, 1);
    cursor: pointer;
  }

  .myDatepicker:focus {
    color:gba(62, 133, 243, 1);
    cursor: pointer;
  }
  .selected-date {
    background-color:rgba(62, 133, 243, 1);
color:white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
  

  }
  .active{
        background-color:rgba(202, 232, 255, 1);
  }

  .dayOfMonth:hover{
cursor:pointer;
color:rgba(62, 133, 243, 1);
  }
  .dayContainer:hover{
    cursor:pointer;
color:rgba(62, 133, 243, 1);
  }
`;
