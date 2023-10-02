// import { useState } from 'react';

import Modal from 'components/Modal/Modal';
// import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({
  onCloseModal,
  // showEditBtn,
  // id,
  // editTask,
  // addCategory,
  isOpen,
}) => {
  // const [animationModal, setAnimationModal] = useState(isOpened);

  return (
    isOpen && (
      <Modal
        onClose={onCloseModal}
        // isOpened={isOpened}
        // animationModalOnSubmit={animationModal}
      >
        Modal
        {/* <TaskForm
        onCloseModal={onCloseModal}
        // showEditBtn={showEditBtn}
        // id={id}
        // editTask={editTask}
        // addCategory={addCategory}
        // setAnimationModal={setAnimationModal}
      /> */}
      </Modal>
    )
  );
};
