import styled from '@emotion/styled';

export const UserImg = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-left: 8px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    margin-left: 14px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  @media (min-width: 768px) {
    margin-left: 14px;
  }
`;

export const UserName = styled.div`
  margin-right: 8px;
  @media (min-width: 768px) {
    margin-right: 14px;
  }
  color: ${props => props.theme.textPrimaryLight};
`;
