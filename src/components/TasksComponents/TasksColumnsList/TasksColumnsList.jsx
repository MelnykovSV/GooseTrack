import { useDispatch, useSelector } from 'react-redux';
import {
  TasksColumn,
  // , ColumnsTasksList
} from '..';

import * as S from './TasksColumnsList.styled';
import { selectFilteredTasks } from 'redux/selectors';
import { useEffect } from 'react';
import { getTasksByDay } from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';
import { clearTasks } from 'redux/tasks/tasksSlice';
// "todo", "inProgress", "done"
export const TasksColumnsList = ({ readinessTasks }) => {
  const dispatch = useDispatch();
  const { tasksTodo, tasksInProgress, tasksDone } =
    useSelector(selectFilteredTasks);
  const { day } = useParams();

  useEffect(() => {
    dispatch(getTasksByDay(day));

    return () => {
      dispatch(clearTasks());
    };
  }, [dispatch, day]);

  return (
    <S.Container>
      <TasksColumn tasks={tasksTodo} status="todo" title="To do" />
      <TasksColumn
        tasks={tasksInProgress}
        status="inProgress"
        title="In progress"
      />
      <TasksColumn tasks={tasksDone} status="done" title="Done" />
    </S.Container>
  );
};
