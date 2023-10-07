import { useState } from 'react';
import {
  AddTaskBtn,
  ColumnHeadBar,
  // TaskColumnCard,
  ColumnsTasksList,
  TaskModal,
} from '..';

import * as S from './TasksColumn.styled';

export const TasksColumn = ({ title, tasks, status }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenModal = () => setIsOpenModal(true);

  return (
    <S.Container>
      <ColumnHeadBar onOpenTaskModal={handleOpenModal} title={title} />
      {/* <TaskColumnCard /> */}
      <ColumnsTasksList tasks={tasks} />
      <AddTaskBtn onOpenTaskModal={handleOpenModal} />
      <TaskModal
        isOpenModal={isOpenModal}
        onCloseModal={handleCloseModal}
        status={status}
      />
    </S.Container>
  );
};
