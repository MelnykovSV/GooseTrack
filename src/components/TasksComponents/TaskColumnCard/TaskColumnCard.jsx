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
        <S.ToolsWrapper>qqq</S.ToolsWrapper>
      </S.Wraper>
    </S.CardWraper>
  );
};
