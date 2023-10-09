import { useState } from 'react';
import * as S from './TaskColumnCard.styled';
import { TaskModal, TaskToolbar } from '..';
import { useDispatch } from 'react-redux';
import { changeTaskStatus, deleteTask } from 'redux/tasks/operations';

import { Avatar } from 'components/Avatar/Avatar';

const statuses = ['todo', 'inProgress', 'done'];

export const TaskColumnCard = ({ task }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenTaskToolbar = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseTaskToolbar = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenModal = () => setIsOpenModal(true);

  const handleDeleteTask = () => dispatch(deleteTask(task._id));

  const handleChangeTaskStatus = status =>
    dispatch(changeTaskStatus({ id: task._id, status }));

  return (
    <S.CardWraper>
      <S.TaskText>{task.title}</S.TaskText>
      <S.Wraper>
        <S.PriorityWraper>
          <S.AvatarThumb>
            <Avatar />
          </S.AvatarThumb>
          <S.Priority $priority={task.priority}>
            {task.priority[0].toUpperCase() + task.priority.slice(1)}
          </S.Priority>
        </S.PriorityWraper>
        <S.ToolsWrapper>
          <S.ArrowIcon
            id="more-button"
            aria-controls={open ? 'more-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOpenTaskToolbar}
          />
          <TaskToolbar
            anchorEl={anchorEl}
            isOpen={open}
            onClose={handleCloseTaskToolbar}
            onChangeStatus={handleChangeTaskStatus}
            statuses={statuses.filter(status => status !== task.status)}
          />
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
