import { AddFeedbackBtn } from '../AddFeedbackBtn/AddFeedbackBth';
import { AddFeedbackModal } from '../AddFeedbackModal/AddFeedbackModal';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { UserInfo } from '../UserInfo/UserInfo';

export const Header = () => {
  return (
    <>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
      <AddFeedbackModal />
    </>
  );
};
