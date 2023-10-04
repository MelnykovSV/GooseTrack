import React, { useEffect, useState } from 'react';

import icons from 'assets/images/icons.svg';
import { useDispatch } from 'react-redux';
import {
  addReview,
  deleteReview,
  updateReview,
} from 'redux/reviews/operations';

import {
  ButtonBox,
  CloseIcon,
  Icon,
  Label,
  StyledButton,
  Form,
  Textarea,
  TextareaBox,
  Error,
} from './FeedbackForm.styled';
import { reviewSchema } from 'assets/schemas/reviewSchema';
import { useFormik } from 'formik';
import { LabelWithControls, StarRating } from '../';

export function FeedbackForm({
  onClose,
  review,
  isFeedbackAlreadyExist,
  setIsFeedbackAlreadyExist,
  setRatingInModal,
  setCommentInModal,
}) {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [, setComment] = useState('');

  const [isEdit, setIsEdit] = useState(false);

  const isEnable = isFeedbackAlreadyExist || isEdit;

  const formik = useFormik({
    initialValues: {
      rating,
      comment: review.comment,
    },
    onSubmit: review => {
      if (isEdit) {
        dispatch(updateReview(review));
      } else {
        dispatch(addReview(review));
      }

      setCommentInModal(review.comment);
      setRatingInModal(review.rating);
      setIsEdit(false);
      onClose();
    },
    validationSchema: reviewSchema,
  });

  useEffect(() => {
    setRating(review.rating);
    setComment(review.comment);
  }, [review]);

  const changeRating = newRating => {
    setRating(newRating);
  };

  const handleEdit = () => {
    setIsEdit(state => !state);
  };

  const handleDeleteReview = () => {
    dispatch(deleteReview());
    setIsEdit(false);
    setCommentInModal('');
    setRatingInModal(0);
    setIsFeedbackAlreadyExist(false);
    onClose();
  };

  const handleClose = () => {
    setIsEdit(false);
    onClose();
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
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
        <input
          type="number"
          id="comment"
          name="rating"
          className="visually-hidden"
          value={(formik.values.rating = rating)}
          onChange={formik.handleChange}
        />
        {formik.errors.rating && formik.touched.rating ? (
          <Error>{formik.errors.rating}</Error>
        ) : null}

        <TextareaBox>
          {isEnable ? (
            <LabelWithControls
              active={isEdit}
              onEdit={handleEdit}
              onDelete={handleDeleteReview}
            />
          ) : (
            <Label>Review</Label>
          )}
          <Textarea
            type="text"
            placeholder="Enter text"
            id="comment"
            name="comment"
            disabled={!(!isFeedbackAlreadyExist || isEdit)}
            value={formik.values.comment}
            onChange={formik.handleChange}
          ></Textarea>

          {formik.errors.comment && formik.touched.comment ? (
            <Error>{formik.errors.comment}</Error>
          ) : null}
        </TextareaBox>

        {(!isFeedbackAlreadyExist || isEdit) && (
          <ButtonBox>
            <StyledButton type="submit">
              {isEdit ? 'Edit' : 'Save'}
            </StyledButton>
            <StyledButton type="button" onClick={handleClose} secondary>
              Cancel
            </StyledButton>
          </ButtonBox>
        )}
      </Form>
    </>
  );
}
