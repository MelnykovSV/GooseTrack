import { useState } from 'react';
import * as S from './TaskColumnCard.styled';
import { TaskModal } from '..';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/operations';

export const TaskColumnCard = ({ task }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenModal = () => setIsOpenModal(true);

  const handleDeleteTask = () => dispatch(deleteTask(task._id));

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
          <S.PencilIcon onClick={handleOpenModal} />
          <S.TrashIcon onClick={handleDeleteTask} />
        </S.ToolsWrapper>
      </S.Wraper>
      <TaskModal
        isOpenModal={isOpenModal}
        onCloseModal={handleCloseModal}
        task={task}
      />
    </S.CardWraper>
  );
};
