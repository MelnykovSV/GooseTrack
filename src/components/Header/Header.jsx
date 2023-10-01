import { useState } from 'react';
import { AddFeedbackBtn } from '../AddFeedbackBtn/AddFeedbackBth';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFeedbackModal';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AddFeedbackBtn onFeedbackBtn={handleOpen} />
      <ThemeToggler />
      <UserInfo />
      <AddFeedbackModal open={open} onClose={handleClose} />
    </>
  );
};
