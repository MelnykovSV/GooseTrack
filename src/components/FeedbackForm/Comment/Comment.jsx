import React from 'react';
import { Label, Textarea, TextareaBox } from '../FeedbackForm.styled';
import LabelWithControls from '../LabelWithControls/LabelWithControls';

export default function Comment({
  enable,
  active,
  onEdit,
  onDelete,
  comment,
  onChange,
  disabled,
}) {
  return (
    <TextareaBox>
      {enable ? (
        <LabelWithControls
          active={active}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ) : (
        <Label>Review</Label>
      )}
      <Textarea
        name="comment"
        type="text"
        component="textarea"
        placeholder="Enter text"
        disabled={disabled}
        value={comment}
        onChange={onChange}
      ></Textarea>
    </TextareaBox>
  );
}
