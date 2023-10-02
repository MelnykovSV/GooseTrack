import styled from '@emotion/styled';
import { ReactComponent as Arrow } from '../../../images/TaskIcons/arrow-circle-broken-right.svg';
import { ReactComponent as Pencil } from '../../../images/TaskIcons/pencil-01.svg';
import { ReactComponent as Trash } from '../../../images/TaskIcons/trash-04.svg';
// import { BsFillPencilFill } from 'react-icons/bs';

// export const Icon = styled(BsFillPencilFill)``;

export const CardWraper = styled.li`
  width: 299px;
  height: 108px;
  padding: 14px 12px 18px 15px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: ${({ theme }) => theme.bgSecondary};

  background: #f7f6f9;
  list-style: none;
  width: 100%;
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ToolsWraper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const TaskText = styled.p`
  color: var(--textPrimary);
  font-family: Inter;
  font-size: 14px;
  height: 16px;
  /* max-width: 272px; */
  margin: 0 0 28px 0;

  color: #111;

  white-space: nowrap;
  /* font-style: normal; */
  font-weight: 500;
  line-height: 1.28;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid #3e85f3;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
export const PriorityWraper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;
export const ToolsWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
  margin-top: 18px;
  width: 82px;
  height: 14px;
`;

export const Priority = styled.div`
  margin: 0;
  margin-top: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  /* overflow: hidden; */
  color: #f7f6f9;
  background: #72c2f8;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px; /* 120% */
  /* -o-text-overflow: ellipsis; */
  text-overflow: ellipsis;
`;

export const ArrowIcon = styled(Arrow)`
  height: 14px;
  width: 14px;

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }
`;

export const PencilIcon = styled(Pencil)`
  height: 14px;
  width: 14px;

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }
`;

export const TrashIcon = styled(Trash)`
  height: 14px;
  width: 14px;

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }
`;
