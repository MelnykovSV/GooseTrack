import { useState } from 'react';

import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { CustomModal } from 'components/CustomModal/CustomModal';

export const AddFeedbackModal = ({ open, onClose }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      <CustomModal open={open} onClose={onClose}>
        <FeedbackForm onClose={onClose} />
      </CustomModal>
    </div>
  );
};
