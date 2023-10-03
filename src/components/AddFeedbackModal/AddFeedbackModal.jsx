import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { CustomModal } from 'components/CustomModal/CustomModal';
import { useEffect, useState } from 'react';
import { privateApi } from 'api';

export const AddFeedbackModal = ({ open, onClose }) => {
  const [ratingInModal, setRatingInModal] = useState(0);
  const [commentInModal, setCommentInModal] = useState('');

  const [isFeedbackAlreadyExist, setIsFeedbackAlreadyExist] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      try {
        const response = await privateApi.get('/api/reviews/own');
        if (
          response &&
          response.response &&
          response.response.data.code === 404
        ) {
          setRatingInModal(0);
          setCommentInModal('');
          setIsFeedbackAlreadyExist(false);
          return;
        }

        setRatingInModal(response.data.data.rating);
        setCommentInModal(response.data.data.comment);
        setIsFeedbackAlreadyExist(true);

        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    };

    getReview();
  }, [commentInModal, ratingInModal]);

  const userReview = { rating: ratingInModal, comment: commentInModal };

  return (
    <div>
      <CustomModal open={open} onClose={onClose}>
        <FeedbackForm
          setCommentInModal={setCommentInModal}
          setRatingInModal={setRatingInModal}
          onClose={onClose}
          review={userReview}
          isFeedbackAlreadyExist={isFeedbackAlreadyExist}
          setIsFeedbackAlreadyExist={setIsFeedbackAlreadyExist}
        />
      </CustomModal>
    </div>
  );
};
