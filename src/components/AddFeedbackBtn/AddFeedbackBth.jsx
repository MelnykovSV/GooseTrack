import { FeedbackBtn } from './AddFeedbackBth.styled';

export const AddFeedbackBtn = ({ onFeedbackBtn }) => {
  return (
    <>
      <FeedbackBtn onClick={onFeedbackBtn}>Feedback</FeedbackBtn  >
    </>
  );
};
