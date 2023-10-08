import styled from 'styled-components';

export const Container = styled.div`

.dateNumberBox{
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
}
 .date {

    background-color: ${({ theme }) => theme.bgToggleActive};
 height: 50px;
 margin-bottom: 14px;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
   border-radius: 8px;
   border:1px solid ${({ theme }) => theme.iconDisabled};
align-items: center;
    @media screen and (min-width: 1440px){
    width: 1087px;
    margin-bottom: 18px;
    }
  }
.dayContainer {
display: flex;

width: 100%;
 justify-content: center;
align-items: center;
@media screen and (min-width: 768px) {
width: 740px;
height: 68px;

@media screen and (min-width: 1440px){
width: 1087px;
    }
  }
    }

 .dateNumber{
 display: flex;
    flex-direction: column-reverse;
    align-items: center;
 }

    .dateText {
      text-transform: uppercase;
      margin:0;
      margin-bottom: 8px
      font-size: 16px;
      ;
    }

    .dayOfWeek:hover {
   color:rgba(62, 133, 243, 1);
      cursor: pointer;
    }
    .dayOfWeek{
      color: ${({ theme }) => theme.bgStatistics};
       font-size: 0;
        @media screen and (min-width: 768px) {
          font-size: 14px;
   @media screen and (min-width: 1440px){
          font-size: 16px;
        }
    }}
   .dayOfWeek::first-letter{

  font-size: 16px;
   @media screen and (min-width: 768px) {
          font-size: 14px;
           @media screen and (min-width: 1440px){
          font-size: 16px;
        }
        };
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
         width: 20px;
      height: 22px;

    }
    .active{
         b${({ theme }) => theme.bgToggleActive};
    }

    .dayOfMonth:hover{
  cursor:pointer;
  color:rgba(62, 133, 243, 1);
    }
    .dayContainer:hover{
      cursor:pointer;
  color:rgba(62, 133, 243, 1);}

  .dayOfWeek{
    text-transform: uppercase;
   @media screen and (min-width: 1440px){
          font-size: 16px;
        }
.dayOfWeek {
:
  color:red;}

`;
