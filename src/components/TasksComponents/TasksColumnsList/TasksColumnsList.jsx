import {
  TasksColumn,
  // , ColumnsTasksList
} from '..';

import * as S from './TasksColumnsList.styled';

export const TasksColumnsList = ({ readinessTasks }) => {
  return (
    <div style={{ padding: 20 }}>
      <S.Container>
        <TasksColumn title="To do">{/* <ColumnsTasksList /> */}</TasksColumn>

        <TasksColumn title="In progress" />
        <TasksColumn title="Done" />
      </S.Container>
    </div>
  );
};
