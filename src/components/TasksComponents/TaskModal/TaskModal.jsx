import { TaskForm } from '..';
import { CustomModal } from 'components/CustomModal/CustomModal';

export const TaskModal = ({ onCloseModal, isOpenModal, task }) => (
  <CustomModal open={isOpenModal} onClose={onCloseModal}>
    <TaskForm task={task} onCloseTaskModal={onCloseModal} />
  </CustomModal>
);
