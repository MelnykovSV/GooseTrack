import React from 'react';
import * as S from './RatingStars.styled';
import sprite from '../../../images/MainPageImg/icons/icons.svg';

const RatingStars = ({ rating }) => {
  const maxRating = 5;
  const starElements = [];

  for (let i = 0; i < maxRating; i += 1) {
    if (i < rating) {
      starElements.push(
        <S.FilledStar key={i}>
          <use xlinkHref={`${sprite}#icon-star`} width={14} height={14} />
        </S.FilledStar>
      );
    } else {
      starElements.push(
        <S.Star key={i}>
          <use xlinkHref={`${sprite}#icon-star`} width={14} height={14} />
        </S.Star>
      );
    }
  }

  return <S.StarContainer>{starElements}</S.StarContainer>;
};

export default RatingStars;
