import React from 'react';
import {
  Controls,
  DeleteIcon,
  EditIcon,
  EditIconActive,
} from './LabelWithControls.styled';

import icons from '../../../assets/images/icons.svg';
import { EditBox } from './LabelWithControls.styled';
import { Icon, Label } from '../FeedbackForm.styled';

export default function LabelWithControls({ active }) {
  return (
    <EditBox>
      <Label>Review</Label>
      <Controls>
        {active ? (
          <EditIconActive>
            <Icon>
              <use href={`${icons}#icon-edit`} />
            </Icon>
          </EditIconActive>
        ) : (
          <EditIcon>
            <Icon>
              <use href={`${icons}#icon-edit`} />
            </Icon>
          </EditIcon>
        )}
        <DeleteIcon>
          <Icon>
            <use href={`${icons}#icon-delete`} />
          </Icon>
        </DeleteIcon>
      </Controls>
    </EditBox>
  );
}
