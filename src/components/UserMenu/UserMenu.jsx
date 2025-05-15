import { useDispatch, useSelector } from "react-redux";
import { logOut } from "pages/redux/auth/operations";
import { selectUser } from "pages/redux/auth/selectors";

import { Container, Text, Button } from "./UserMenu.styled";



export const UserMenu = () => {
  const dispatch = useDispatch();
  const  user  = useSelector(selectUser);

  return (
    <Container >
      <Text >Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};
