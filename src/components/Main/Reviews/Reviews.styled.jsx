import styled from '@emotion/styled';

export const ReviewsSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 100px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 150px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: #3e85f3;
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    line-height: 1.1;
    font-size: 40px;
  }
`;

export const SliderCustom = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: -10px;
    margin-right: -10px;
  }

  @media (min-width: 1440px) {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    max-width: 1208px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 291px;
  height: 196px;
  padding: 24px 20px 24px;
  border-radius: 8px;
  border: 1px solid #1111111a;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 514px;
    padding: 32px;
    height: 156px;
  }
  @media (min-width: 1440px) {
    padding: 64px 128px;
  }
`;

export const BoxTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const Avatar = styled.div`
  display: flex;
`;

export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserName = styled.h3`
  margin-top: 0;
  margin-bottom: 13px;
  font-size: 18px;
  line-height: 1;
  color: #343434;
`;

export const Comment = styled.p`
  font-size: 14px;
  line-height: 1.28;
  font-weight: 500;
  color: #111111b2;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-left: 68px;
  }
`;

export const IconArrowLeft = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 275px;
  left: calc(50% - 44px);
  transform: translateX(-50%);
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  svg {
    fill: #111111;
    transition: fill 0.3s linear;
  }
  &:hover {
    svg {
      fill: #3e85f3;
    }
  }
  @media (min-width: 375px) {
    top: 242px;
  }
  @media (min-width: 768px) {
    height: 61px;
    width: 61px;
    top: 219px;
  }
`;

export const IconArrowRight = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 275px;
  left: calc(50% + 38px);
  transform: translateX(-50%);
  margin-left: auto;
  margin-right: auto;

  svg {
    fill: #111111;
    transition: fill 0.3s linear;
  }
  &:hover {
    svg {
      fill: #3e85f3;
    }
  }
  @media (min-width: 375px) {
    top: 242px;
  }

  @media (min-width: 768px) {
    height: 61px;
    width: 61px;
    top: 219px;
  }
`;
