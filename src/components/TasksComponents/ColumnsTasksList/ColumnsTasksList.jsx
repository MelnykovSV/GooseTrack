import { TaskColumnCard } from '..';

import * as S from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ tasks }) => {
  return (
    <S.TaskslistWraper>
      {/* {tasks && tasks.map(tasks => <TaskColumnCard /> > { tasks })} */}
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
    </S.TaskslistWraper>
  );
};
