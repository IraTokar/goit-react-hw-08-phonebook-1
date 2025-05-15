import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "pages/redux/auth/selectors";
import { Nav } from "./Navigation.styled";

export const Navigation = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
          Contacts
        </NavLink>
      )}
    </Nav>
  );
};
