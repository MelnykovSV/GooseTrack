import { TaskColumnCard } from '..';

import * as S from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ tasks }) => {
  return (
    <S.TaskslistWraper>
      {tasks &&
        tasks.map(task => <TaskColumnCard task={task} key={task._id} />)}
    </S.TaskslistWraper>
  );
};
