import { Container, StyledStarRating } from './ReviewCard.styled';
import { ReactComponent as EmptyStar } from './../../../images/icons/reviewCardEmptyStar.svg';
import { ReactComponent as FilledStar } from './../../../images/icons/reviewCardFilledStar.svg';

import { ReviewCardAvatar } from '../ReviewCardAvatar/ReviewCardAvatar';

const ReviewCard = ({ rating, comment, userName, avatarUrl }) => {
  return (
    <Container>
      <div className="avatar-container">
        <ReviewCardAvatar avatarUrl={avatarUrl} userName={userName} />

        <div className="">
          <h3>{userName}</h3>
          <StyledStarRating
            name="customized-color"
            value={rating}
            sx={{ gap: '10px' }}
            readOnly
            icon={<FilledStar fontSize="inherit" />}
            emptyIcon={<EmptyStar fontSize="inherit" />}
          />
        </div>
      </div>
      <div className="review-container">
        <p>{comment}</p>
      </div>
    </Container>
  );
};

export default ReviewCard;
