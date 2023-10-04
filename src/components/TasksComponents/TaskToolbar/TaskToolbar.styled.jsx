import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 14px;
  width: 115px;
  height: 70px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  outline: 1px solid tomato;

  @media screen and (min-width: 768px) {
    width: 147px;
    height: 90px;
    padding: 20px 24px;
  }
`;
export const ToolBarItem = styled.div`
  width: 65px;
  height: 14px;
  outline: 1px solid green;

  margin: 0;
  &:first-child {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 768px) {
    width: 75px;
    height: 18px;
  }
`;
// color: #343434;
// font-family: Inter;
// font-size: 12px;
// font-style: normal;
// font-weight: 500;
// line-height: 14px; /* 116.667% */

// export const Wraper = styled.div`
//   display: flex;
//   align-items: center;
//   @media screen and (min-width: 375px) {
//     gap: 10px;
//   }
// `;
// export const BtnStyled = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
// `;
// export const BtnArrow = styled.div`
//   background-color: transparent;
//   position: relative;
// `;
// export const ChouseCat = styled.div`
//   position: absolute;
//   background-color: var(--bgPrimary);
//   flex-direction: column;
//   gap: 14px;
//   width: 115px;
//   height: 70px;
//   top: -30px;
//   border: transparent;
//   border-radius: 8px;
//   padding: 14px;
//   font-family: Inter;
//   font-style: Medium;
//   font-size: 12px;
// `;
// export const InputStyled = styled.input`
//   position: absolute;
//   opacity: 0;
//   width: 0;
//   height: 0;
// `;
// export const LabelStyled = styled.label`
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
