import { TaskForm } from '..';
import { CustomModal } from 'components/CustomModal/CustomModal';

export const TaskModal = ({ onCloseModal, isOpenModal, task, status }) => (
  <CustomModal open={isOpenModal} onClose={onCloseModal}>
    <TaskForm task={task} status={status} onCloseTaskModal={onCloseModal} />
  </CustomModal>
);
