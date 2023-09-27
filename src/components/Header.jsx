import { AddFeedbackBtn } from './AddFeedbackBth';
import { AddFeedbackModal } from './AddFeedbackModal';
import { ThemeToggler } from './ThemeToggler';
import { UserInfo } from './UserInfo';

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
