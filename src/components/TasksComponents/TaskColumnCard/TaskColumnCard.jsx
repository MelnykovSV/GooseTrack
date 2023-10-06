// import { TaskToolbar } from '..';
import * as S from './TaskColumnCard.styled';

export const TaskColumnCard = ({ priority }) => {
  return (
    <S.CardWraper>
      <S.TaskText>Brainstorm ideas for new content or prod</S.TaskText>
      <S.Wraper>
        <S.PriorityWraper>
          <S.Avatar />
          <S.Priority>Low</S.Priority>
        </S.PriorityWraper>
        <S.ToolsWrapper>
          <S.ArrowIcon />
          <S.PencilIcon />
          <S.TrashIcon />
        </S.ToolsWrapper>
      </S.Wraper>
      {/* <TaskToolbar /> */}
    </S.CardWraper>
  );
};
