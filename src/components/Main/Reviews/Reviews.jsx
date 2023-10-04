import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllReview } from '../../../redux/reviews/operations';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Reviews.styled';
import sprite from '../../../images/MainPageImg/icons/icons.svg';
import RatingStars from './RatingStars';
import { selectReviews } from 'redux/reviews/selectors';

const ReviewsSlider = () => {
  const dispatch = useDispatch();
  //   const reviews = useSelector(selectReviews);
  const reviews = [
    {
      _id: 1,
      name: 'Продукт 1',
      comment: 'Цей продукт дуже смачний!',
      rating: 5,
    },
    {
      _id: 2,
      name: 'Продукт 2',
      comment: 'Дуже задоволений цим товаром.',
      rating: 4,
    },
    {
      _id: 3,
      name: 'Продукт 3',
      comment: 'Звичайний товар, нічого особливого.',
      rating: 3,
    },
    {
      _id: 4,
      name: 'Продукт 4',
      comment: 'Не задовольняє очікування.',
      rating: 2,
    },
    {
      _id: 5,
      name: 'Продукт 5',
      comment: 'Це найгірший продукт, який я коли-небудь купував.',
      rating: 1,
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(getAllReview());
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: windowWidth >= 1440 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: (
      <S.IconArrowLeft>
        <use xlinkHref={`${sprite}#icon-arrow-left`} width={50} height={50} />
      </S.IconArrowLeft>
    ),
    nextArrow: (
      <S.IconArrowRight>
        <use xlinkHref={`${sprite}#icon-arrow-right`} width={50} height={50} />
      </S.IconArrowRight>
    ),
  };

  return (
    <S.ReviewsSliderContainer>
      <S.Title>reviews</S.Title>
      <S.SliderCustom>
        <Slider {...settings}>
          {Array.isArray(reviews) &&
            reviews.map(({ _id, userName, comment, rating, avatarUrl }) => (
              <div key={_id}>
                <S.Box>
                  <S.BoxTop>
                    <div>
                      <S.UserName>{userName}</S.UserName>
                      <RatingStars rating={rating} />
                    </div>
                  </S.BoxTop>

                  <S.Comment>{comment}</S.Comment>
                </S.Box>
              </div>
            ))}
        </Slider>
      </S.SliderCustom>
    </S.ReviewsSliderContainer>
  );
};

export default ReviewsSlider;
