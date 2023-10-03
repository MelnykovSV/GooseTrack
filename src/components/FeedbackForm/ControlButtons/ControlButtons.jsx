import React from 'react'
import { ButtonBox, StyledButton } from '../FeedbackForm.styled';

export default function ControlButtons({isEdit, onClose}) {
  return (
    <ButtonBox>
      <StyledButton type="submit">{isEdit ? 'Save' : 'Edit'}</StyledButton>
      <StyledButton type="button" onClick={onClose} secondary>
        Cancel
      </StyledButton>
    </ButtonBox>
  );
}
