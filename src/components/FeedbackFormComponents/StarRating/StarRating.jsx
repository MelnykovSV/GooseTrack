import React from 'react';
import { useTheme } from '@emotion/react';
import { Label, RatingBox } from '../FeedbackForm/FeedbackForm.styled';
import StarRatings from 'react-star-ratings';

export function StarRating({ rating, changeRating, isSelectable, name }) {
  const theme = useTheme();

  return (
    <RatingBox>
      <Label>Rating</Label>
      <StarRatings
        starWidthAndHeight="24px"
        starSpacing="2px"
        svgIconViewBox="0 0 22 22"
        svgIconPath="M11 1.28579L14.0224 7.01427C14.1815 7.31594 14.4716 7.52671 14.8077 7.58487L21.1898 8.68913L16.6757 13.3338L17.1059 13.752L16.6757 13.3338C16.438 13.5784 16.3271 13.9194 16.3757 14.257L17.2977 20.668L11.4854 17.8101C11.1793 17.6595 10.8207 17.6595 10.5146 17.8101L4.70234 20.668L5.6243 14.257C5.67285 13.9194 5.56205 13.5784 5.32432 13.3338L0.810178 8.68913L7.19226 7.58487C7.52835 7.52671 7.81845 7.31594 7.97761 7.01428L7.44695 6.73429L7.97761 7.01427L11 1.28579ZM4.53226 20.7516C4.53232 20.7516 4.53239 20.7515 4.53245 20.7515L4.53226 20.7516ZM11.0883 1.11843L11.0884 1.11815L11 1.07149L11.0884 1.11815C11.0884 1.11825 11.0883 1.11834 11.0883 1.11843Z"
        starSelectingHoverColor={theme.star}
        starRatedColor={theme.star}
        starEmptyColor={theme.starUnactive}
        rating={rating}
        changeRating={changeRating}
        isSelectable={isSelectable}
      />
    </RatingBox>
  );
}