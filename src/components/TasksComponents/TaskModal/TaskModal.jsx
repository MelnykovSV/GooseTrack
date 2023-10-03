import { TaskForm } from '..';
import { CustomModal } from 'components/CustomModal/CustomModal';

export const TaskModal = ({ onCloseModal, isOpenModal, task }) =>
  isOpenModal && (
    <CustomModal onClose={onCloseModal}>
      <TaskForm task={task} onCloseTaskModal={onCloseModal} />
    </CustomModal>
  );
