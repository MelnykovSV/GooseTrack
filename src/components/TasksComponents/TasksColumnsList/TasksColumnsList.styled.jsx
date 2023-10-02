import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 16px;
  overflow-x: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.bgSecondary};

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #e7e5e5;
  }
`;
