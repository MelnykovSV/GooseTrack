import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 18px;
  width: calc(100vw - 40px);
  min-height: 155px;
  /* max-height: 432px; */

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.stroke};
  background-color: ${({ theme }) => theme.bgPrimary};

  @media screen and (min-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    min-height: 165px;
    /* max-height: 568px; */
    width: calc((100vw - 54px) / 3);
    min-width: 344px;
  }
`;
