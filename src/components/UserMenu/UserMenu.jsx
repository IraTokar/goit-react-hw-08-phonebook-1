import { useDispatch, useSelector } from "react-redux";
import { logOut } from "pages/redux/auth/operations";
import { selectUser } from "pages/redux/auth/selectors";



export const UserMenu = () => {
  const dispatch = useDispatch();
  const  user  = useSelector(selectUser);

  return (
    <div >
      <p >Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
