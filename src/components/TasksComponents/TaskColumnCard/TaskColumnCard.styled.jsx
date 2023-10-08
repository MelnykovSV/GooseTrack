import styled from '@emotion/styled';
import { ReactComponent as Arrow } from '../../../images/TaskIcons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from '../../../images/TaskIcons/pencil-01.svg';
import { ReactComponent as Trash } from '../../../images/TaskIcons/trash-04.svg';
import { ReactComponent as DefAvatar } from '../../../images/TaskIcons/Default_Avatar.svg';

export const CardWraper = styled.li`
  width: 299px;
  height: 108px;
  padding: 14px 12px 18px 15px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.strokeTransparant};

  background-color: ${({ theme }) => theme.bgMain};

  list-style: none;
  width: 100%;
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ToolsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 18px;
  width: 62px;
  height: 14px;
`;

export const TaskText = styled.p`
  color: ${({ theme }) => theme.textPrimary};

  font-family: Inter;
  font-size: 14px;
  height: 16px;
  /* max-width: 272px; */
  margin: 0 0 28px 0;

  white-space: nowrap;
  /* font-style: normal; */
  /* font-weight: 500; */
  line-height: 1.28;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AvatarThumb = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid ${({ theme }) => theme.accentPrimary};

  overflow: hidden;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const Avatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;
export const NoAvatar = styled.div`
  display: flex;
  /* width: 100%;
  height: 100%; */
  justify-content: center;
  align-items: center;

  /* object-fit: cover;
  object-position: center; */
`;

export const NoAvatarIcon = styled(DefAvatar)`
  width: 24px;
  height: 26px;

  fill: ${({ theme }) => theme.taskFormCancelButton};
`;

export const PriorityWraper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const Priority = styled.div`
  margin: 0;
  margin-top: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  color: ${({ theme }) => theme.bgSecondary};

  background: ${({ theme, $priority }) => {
    switch ($priority) {
      case 'low':
        return theme.priorityLowBg;
      case 'medium':
        return theme.accentYellow;
      case 'high':
        return theme.accentRed;
      default:
        throw new Error('Invalid status');
    }
  }};
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;

export const ArrowIcon = styled(Arrow)`
  height: 14px;
  width: 14px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.textPrimary};

  transition: stroke
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};
  &:hover {
    stroke: ${({ theme }) => theme.accentPrimary};
  }

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }
`;

export const PencilIcon = styled(Pencil)`
  height: 14px;
  width: 14px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.textPrimary};

  transition: stroke
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};
  &:hover {
    stroke: ${({ theme }) => theme.accentPrimary};
  }

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }
`;

export const TrashIcon = styled(Trash)`
  height: 14px;
  width: 14px;
  cursor: pointer;
  stroke: ${({ theme }) => theme.textPrimary};

  transition: stroke
    ${({ theme }) => `${theme.transitions.time} ${theme.transitions.cubic}`};
  &:hover {
    stroke: ${({ theme }) => theme.accentPrimary};
  }

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }
`;
