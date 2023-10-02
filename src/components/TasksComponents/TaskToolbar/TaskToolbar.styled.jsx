import styled from '@emotion/styled';
export const ToolBarItem = styled.svg`
  stroke: var(--textPrimary);
  fill: transparent;
  width: 16px;
  height: 16px;
  :hover {
    stroke: var(--accentPrimary);
  }
`;
export const Wraper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 375px) {
    gap: 10px;
  }
`;
export const BtnStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const BtnArrow = styled.div`
  background-color: transparent;
  position: relative;
`;
export const ChouseCat = styled.div`
  position: absolute;
  background-color: var(--bgPrimary);
  flex-direction: column;
  gap: 14px;
  width: 115px;
  height: 70px;
  top: -30px;
  border: transparent;
  border-radius: 8px;
  padding: 14px;
  font-family: Inter;
  font-style: Medium;
  font-size: 12px;
`;
export const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
export const LabelStyled = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
