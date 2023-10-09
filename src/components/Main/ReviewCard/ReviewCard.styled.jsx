import styled from '@emotion/styled';
import Rating from '@mui/material/Rating';

export const Container = styled.div`
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: min(100%, 335px);

  height: 194px;
  align-items: start;
  gap: 18px;
  transition: height 0.3s linear;

  /* @media screen and (min-width: 375px) {
    height: 243px;
  } */

  @media screen and (min-width: 768px) {
    padding: 22px 32px;
    width: 580px;
    height: 187px;
  }
  .avatar-container {
    display: flex;
    gap: 18px;
    h3 {
      margin: 0;
      color: #343434;
      /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
      font-family: 'Inter';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 13px;
    }
  }
  .review-container {
    p {
      margin: 0;
      width: 100%;
      color: rgba(17, 17, 17, 0.7);
      font-family: 'Inter';
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      overflow: auto;
      height: 72px;
      line-height: calc(18 / 14); /* 128.571% */

      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        background-color: #f2f2f2;
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #e7e5e5;
        border: 4px solid #f2f2f2;
        border-radius: 12px;
      }

      ::-webkit-scrollbar-track:hover {
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
      }
      @media screen and (min-width: 768px) {
        /* width: 400px; */
        padding-left: 68px;
      }

      @media screen and (min-width: 1440px) {
        height: 54px;
      }
    }
  }
`;

export const StyledStarRating = styled(Rating)``;
