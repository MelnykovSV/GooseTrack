import styled from '@emotion/styled';

export const TaskslistWraper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  gap: 14px;

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
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #e7e5e5;
  }

  ::-webkit-scrollbar-track:hover {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;
