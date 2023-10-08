import React from 'react';
import { MainButton } from './Button.styled';

export default function Button({ children, ...props }) {
  return (
    <MainButton variant="contained" {...props}>
      {children}
    </MainButton>
  );
}
