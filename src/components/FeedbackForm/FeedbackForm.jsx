import React, { useEffect, useState } from 'react';
import { privateApi } from 'api';

import { CloseIcon, Icon, Form } from './FeedbackForm.styled';

import icons from '../../assets/images/icons.svg';
import { useDispatch } from 'react-redux';
import {
  addReview,
  deleteReview,
  updateReview,
} from 'redux/reviews/operations';
import StarRating from './StarRating/StarRating';
import Comment from './Comment/Comment';
import ControlButtons from './ControlButtons/ControlButtons';
import { reviewSchema } from 'assets/schemas/reviewSchema';

const data = { rating: 3, comment: '' };

const validate = async () => {
  const result = await reviewSchema.validate(data);
  console.log(result);
};

validate();

export function FeedbackForm({ onClose }) {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isFeedbackAlreadyExist, setIsFeedbackAlreadyExist] = useState(false);

  const isEnable = isFeedbackAlreadyExist || isEdit;

  useEffect(() => {
    const getReview = async () => {
      try {
        const response = await privateApi.get('/api/reviews/own');
        if (
          response &&
          response.response &&
          response.response.data.code === 404
        ) {
          setRating(0);
          setComment('');
          setIsFeedbackAlreadyExist(false);
          return;
        }
        console.log(response.data.data);

        setRating(response.data.data.rating);
        setComment(response.data.data.comment);
        setIsFeedbackAlreadyExist(true);

        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    };

    getReview();
  }, []);

  const changeRating = newRating => {
    setRating(newRating);
  };

  const handleChange = e => {
    setComment(e.target.value);
  };

  const handleEdit = () => {
    setIsEdit(state => !state);
  };

  const handleDeleteReview = () => {
    dispatch(deleteReview());
    setIsEdit(false);
    setIsFeedbackAlreadyExist(false);
    onClose();
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ rating, comment });

    if (isEdit) {
      console.log('Update review');

      dispatch(updateReview({ rating, comment }));
    } else {
      console.log('Add review');

      dispatch(addReview({ rating, comment }));
    }

    setIsEdit(false);
    onClose();
  };

  const handleClose = () => {
    setIsEdit(false);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CloseIcon onClick={handleClose}>
        <Icon>
          <use href={`${icons}#icon-close`} />
        </Icon>
      </CloseIcon>

      <StarRating
        rating={rating}
        changeRating={changeRating}
        isSelectable={!isFeedbackAlreadyExist || isEdit}
      />
      {/* <input type="number" {...register('rating')} /> */}

      <Comment
        enable={isEnable}
        disabled={!(!isFeedbackAlreadyExist || isEdit)}
        active={isEdit}
        comment={comment}
        onEdit={handleEdit}
        onDelete={handleDeleteReview}
        onChange={handleChange}
      />

      {(!isFeedbackAlreadyExist || isEdit) && (
        <ControlButtons isEdit={!isEnable} onClose={handleClose} />
      )}
    </Form>
  );
}
