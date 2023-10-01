import styled from '@emotion/styled';

export const EditBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Controls = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditIcon = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  
  border-radius: 50%;

  color: ${theme.accentBlue};
  background-color: ${theme.bgEditIcon};
`
);

export const EditIconActive = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  
  border-radius: 50%;

  color: ${theme.white};
  background-color: ${theme.accentBlue};
`
);

export const DeleteIcon = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  
  border-radius: 50%;

  color: ${theme.accentRed};
  background-color: ${theme.bgDeleteIcon};
`
);
