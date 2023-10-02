import Modal from 'components/Modal/Modal';
import { TaskForm } from '..';

export const TaskModal = ({ onCloseModal, isOpenModal, task }) =>
  isOpenModal && (
    <Modal onClose={onCloseModal}>
      <TaskForm task={task} onCloseTaskModal={onCloseModal} />
    </Modal>
  );
