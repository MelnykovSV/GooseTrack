import { useState } from 'react';

import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { CustomModal } from 'components/CustomModal/CustomModal';

export const AddFeedbackModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Open modal</button>
      <CustomModal open={open} onClose={handleClose}>
        <FeedbackForm onClose={handleClose} />
      </CustomModal>
    </div>
  );
};
