// import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { UserNav } from '../UserNav/UserNav';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const SideBar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log('click');
    dispatch(logOut());
  };
  return (
    <>
      <UserNav />
      <button onClick={logoutHandler}>log out</button>
      {/* <LogoutBtn  /> */}
    </>
  );
};
