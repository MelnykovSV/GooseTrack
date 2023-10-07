import * as S from './TaskColumnCard.styled';

export const TaskColumnCard = ({ task }) => {
  return (
    <S.CardWraper>
      <S.TaskText>{task.title}</S.TaskText>
      <S.Wraper>
        <S.PriorityWraper>
          <S.Avatar>{/* {user.avatarUrl} */}</S.Avatar>
          <S.Priority $priority={task.priority}>
            {task.priority[0].toUpperCase() + task.priority.slice(1)}
          </S.Priority>
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
