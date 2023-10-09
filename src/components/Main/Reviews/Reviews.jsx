import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import * as S from './Reviews.styled';
import ReviewCard from './../ReviewCard/ReviewCard';
import { ReactComponent as LeftArrow } from './../../../images/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from './../../../images/icons/right-arrow.svg';

import { publicApi } from 'api';

const ReviewsSlider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [reviews, setReviews] = useState([]);

  const a =
    "Your app is absolutely fantastic! It's incredibly user-friendly, packed with a diverse range of features that make it an indispensable tool. The user experience is top-notch. I have a small suggestion: consider more frequent updates for  performance enhancements to maintain this excellent standard.";

  console.log(a.length);

  const fetchReviews = async () => {
    const response = await publicApi.get('/api/reviews');
    setReviews(response.data.data);
    handleResize();
  };

  useEffect(() => {
    fetchReviews();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth >= 1440 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <S.IconArrowLeft>{<LeftArrow />}</S.IconArrowLeft>,
    nextArrow: <S.IconArrowRight>{<RightArrow />}</S.IconArrowRight>,
  };

  return (
    <S.ReviewsSliderContainer className="container">
      <S.Title>reviews</S.Title>
      <S.SliderCustom>
        {reviews ? (
          <Slider {...settings}>
            {Array.isArray(reviews) &&
              reviews.map(({ _id, userName, comment, rating, avatarUrl }) => {
                return (
                  <ReviewCard
                    key={_id}
                    userName={userName}
                    comment={comment}
                    rating={rating}
                    avatarUrl={avatarUrl}
                  />
                );
              })}
          </Slider>
        ) : null}
      </S.SliderCustom>
    </S.ReviewsSliderContainer>
  );
};

export default ReviewsSlider;
