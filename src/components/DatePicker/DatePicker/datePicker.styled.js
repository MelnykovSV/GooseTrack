import styled from '@emotion/styled';

export const DatePickerContainer = styled.div`
  .myDatepicker {
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
        background-color: ${({ theme }) => theme.accentPrimary};
    color: ${({ theme }) => theme.white};
    width: 118px;
    height: 30px;
    border-radius: 8px;
    text-align: center;
    border: none;
    @media screen and (min-width: 768px) {
      width: 121px;
      height: 34px;

      @media screen and (min-width: 1440px) {
        width: 125px;
        height: 34px;
      }
    }
  }

  .buttonLeft {
    background-color: ${({ theme }) => theme.bgStatistics};
    width: 38px;
    height: 34px;
    padding: 8px 12px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 38px;
    border: 1px solid ${({ theme }) => theme.iconDisabled};
    border-right: 1px solid ${({ theme }) => theme.stroke}; 
  }
  // .buttonLeft:focus {
  //   color: rgba(52, 52, 52, 1);
  // }

  .buttonRight {
    color: ${({ theme }) => theme.iconDisabled};
    background-color: ${({ theme }) => theme.bgStatistics};
    width: 38px;
    height: 34px;
    padding: 8px 12px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    border: 1px solid ${({ theme }) => theme.iconDisabled};
  }
  .buttonRight:focus {
    color: rgba(52, 52, 52, 1);
  }

  .navigation {
    display: flex;
    justify-content: space-between;
  }

  .boxButtonDayMonth {
    display: flex;
    text-align: center;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (min-width: 768px) {
      position: relative;
      top: -52px;
      left: 476px;
      @media screen and (min-width: 1440px) {
        position: relative;
        left: 920px;
      }
    }
  }
  .wrapBox {
    display: flex;
    align-items: baseline;
    flex-direction: column;
    gap: 18px;
    padding: 0px;
    max-width: 100%;
    width: 100%;
    @media screen and (min-width: 768px) {
      flex-direction: column;
      padding-left: 0;
      padding-right: 0;
      @media screen and (min-width: 1440px) {
        width: 1087px;
        padding: 0;
        margin-bottom: 34px;
      }
    }
  }
  .wrap {
    display: flex;
    align-items: baseline;
    width: 100%;
    max-width: 100%;
    margin-top: 64px;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      justify-content: unset;
      gap: 8px;
    }
  }
  .myDatepicker {
    text-transform: uppercase;
  }
  .showDay.active {
    background-color: ${({ theme }) => theme.bgToggleActive}; 
  }
  .showMonths.active {
    background-color: ${({ theme }) => theme.bgToggleActive};
  }
  .showDay {
    background-color: ${({ theme }) => theme.bgToggleUnactive};
    color: ${({ theme }) => theme.gooseTrackIconLabel};
    font-size: 16px;
    border: 1px solid rgba(227, 243, 255, 1);
    width: 82px;
    height: 34px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    text-decoration: none;    align-items: center;
        display: flex;
    text-align: center;
    justify-content: center;}
  }
    
  .showMonths {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    background-color: ${({ theme }) => theme.bgToggleUnactive};
    color: ${({ theme }) => theme.gooseTrackIconLabel};
    font-size: 16px;
    border: 1px solid rgba(227, 243, 255, 1);
    width: 82px;
    height: 34px;
    border-bottom-left-radius: 8px;
    text-decoration: none;
    border-top-left-radius: 8px;
        display: flex;
        justify-content: center;
   align-items: center;}
    
  }
  'datePickerButtonBox {
    @media screen and (min-width: 768px) {
      display: flex;
    }
    // .dayContainerBox {
    //   border: solid;
    // }
  }
`;
