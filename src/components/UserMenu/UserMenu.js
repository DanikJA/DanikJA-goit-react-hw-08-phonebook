import { useDispatch } from '@reduxjs/toolkit';
import { useAuth } from '../../redux/hooks/auth';
import { logOut } from '../../redux/auth/asyncFunctions';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>{user.email}</p>
      <button type="button" onClick={() => dispatch(logOut)}></button>
    </div>
  );
};
