import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 16px;
  overflow-x: auto;
  width: 100%;
  /* background-color: ${({ theme }) => theme.bgSecondary}; */

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.accentPrimary};

    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #e7e5e5;
  }
`;
