import React from 'react';
import { MainButton, SecondaryButton } from './Button.styled';

function Button({ type, children, secondary }) {
  return (
    <>
      {secondary ? (
        <SecondaryButton type={type}>{children}</SecondaryButton>
      ) : (
        <MainButton type={type}>{children}</MainButton>
      )}
    </>
  );
}

export default Button;
