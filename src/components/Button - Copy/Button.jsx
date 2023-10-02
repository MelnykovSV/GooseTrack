import React from 'react';
import { MainButton, SecondaryButton } from './Button.styled';

function Button({ children, secondary, ...props }) {
  return (
    <>
      {secondary ? (
        <SecondaryButton {...props}>{children}</SecondaryButton>
      ) : (
        <MainButton {...props}>{children}</MainButton>
      )}
    </>
  );
}

export default Button;
