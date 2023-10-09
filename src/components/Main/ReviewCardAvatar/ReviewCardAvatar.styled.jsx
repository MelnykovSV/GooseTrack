import styled from '@emotion/styled';

export const Container = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .avatar-placeholder {
    width: 100%;
    height: 100%;

    background-color: #1ba6b9;
    span {
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      z-index: 1;
      text-transform: uppercase;
    }
  }
`;
