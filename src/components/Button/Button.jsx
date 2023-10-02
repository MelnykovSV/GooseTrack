import React from 'react';
import { MainButton, SecondaryButton } from './Button.styled';

export default function Button({ children, secondary, ...props }) {
  return (
    <>
      {secondary ? (
        <SecondaryButton variant="contained" {...props}>
          {children}{' '}
        </SecondaryButton>
      ) : (
        <MainButton variant="contained" {...props}>
          {children}
        </MainButton>
      )}
    </>
  );
}
