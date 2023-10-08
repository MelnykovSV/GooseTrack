import styled from '@emotion/styled';

export const TaskslistWraper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  gap: 14px;
  /* background-color: ${({ theme }) => theme.bgSecondary}; */
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 18px;
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
