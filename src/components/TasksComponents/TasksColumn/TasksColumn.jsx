import { useState } from 'react';
import {
  AddTaskBtn,
  ColumnHeadBar,
  // TaskColumnCard,
  ColumnsTasksList,
  TaskModal,
} from '..';

import * as S from './TasksColumn.styled';

export const TasksColumn = ({ title }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenModal = () => setIsOpenModal(true);

  return (
    <S.Container>
      <ColumnHeadBar onOpenTaskModal={handleOpenModal} title={title} />
      {/* <TaskColumnCard /> */}
      <ColumnsTasksList />
      <AddTaskBtn onOpenTaskModal={handleOpenModal} />
      <TaskModal isOpen={isOpenModal} onCloseModal={handleCloseModal} />
    </S.Container>
  );
};
