import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  align-items: start;
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
    background-color: ${({ theme }) => theme.scrollbarTrack};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumb};
    border: 4px solid ${({ theme }) => theme.scrollbarTrack};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track:hover {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;
