import styled from "@emotion/styled";
import { ReactComponent as UpdateAvatarIcon } from "../../../icons/plus.svg";

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: -30px;
    right: 150px;
  }
`;

export const UserAvatar = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  //   -o-object-fit: cover;
  //   object-fit: cover;
  margin-bottom: 14px;

  @media screen and (min-width: 767px) {
    width: 124px;
    height: 124px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0px;
  }
`;

export const AvatarUploadContainer = styled.div`
  position: relative;
`;

export const AvatarUploadBtn = styled.label`
  position: absolute;
  width: 14px;
  height: 14px;
  z-index: 1;

  @media screen and (min-width: 767px) {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const UpdateIcon = styled(UpdateAvatarIcon)`
  position: absolute;
  fill: #3e85f3;
  width: 14px;
  height: 14px;
  bottom: 13px;
  left: 45px;
  cursor: pointer;
  z-index: 1;

  :hover {
    fill: #2b78ef;
  }

  @media screen and (min-width: 767px) {
    width: 24px;
    height: 24px;
    bottom: 20px;
    left: 78px;
  }
`;

export const UserName = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #343434;
  margin-top: 0px;
  margin-bottom: 2px;

  @media screen and (min-width: 767px) {
    margin-bottom: 8px;
  }
`;

export const UserRole = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #343434;
  flex: none;
  order: 1;
  flex-grow: 0;

  margin-top: 0px;
  margin-bottom: 0px;
`;