import React from 'react';
import {
  Controls,
  DeleteIcon,
  EditIcon,
  EditIconActive,
} from './LabelWithControls.styled';

import icons from '../../../assets/images/icons.svg';
import { EditBox } from './LabelWithControls.styled';
import { Icon, Label } from '../FeedbackForm/FeedbackForm.styled';

export function LabelWithControls({ active, onEdit, onDelete }) {
  return (
    <EditBox>
      <Label>Review</Label>
      <Controls>
        {active ? (
          <EditIconActive onClick={onEdit}>
            <Icon>
              <use href={`${icons}#icon-edit`} />
            </Icon>
          </EditIconActive>
        ) : (
          <EditIcon type="button" onClick={onEdit}>
            <Icon>
              <use href={`${icons}#icon-edit`} />
            </Icon>
          </EditIcon>
        )}

        <DeleteIcon onClick={onDelete}>
          <Icon>
            <use href={`${icons}#icon-delete`} />
          </Icon>
        </DeleteIcon>
      </Controls>
    </EditBox>
  );
}
