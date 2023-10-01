import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { CustomModal } from 'components/CustomModal/CustomModal';

export const AddFeedbackModal = ({ open, onClose }) => {
  return (
    <div>
      <CustomModal open={open} onClose={onClose}>
        <FeedbackForm onClose={onClose} />
      </CustomModal>
    </div>
  );
};
