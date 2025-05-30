import { useDispatch } from "react-redux";
import { logIn } from "pages/redux/auth/operations";

import { Button, Form, Input, Label } from "./LoginForm.styled";


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <Input type="email" name="email" required/>
      </Label>
      <Label >
        Password
        <Input type="password" name="password" required/>
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
