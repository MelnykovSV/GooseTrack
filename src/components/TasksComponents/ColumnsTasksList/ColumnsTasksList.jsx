import { TaskColumnCard } from '..';

import * as S from './ColumnsTasksList.styled';

export const ColumnsTasksList = () => {
  return (
    <S.TaskslistWraper>
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
    </S.TaskslistWraper>
  );
};
