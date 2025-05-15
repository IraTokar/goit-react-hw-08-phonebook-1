import { register } from "pages/redux/auth/operations";
import { useDispatch } from "react-redux"

import { Form, Input, Label, Button } from "./RegisterForm.styled";


export const RegisterForm = () => {
  const dispatch = useDispatch();
   
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form   onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Username
        <Input type="text" name="name" required/>    
      </Label>

      <Label>
        Email
        <Input type="email" name="email" required/>    
      </Label>

      <Label>
        Password
        <Input type="password" name="password" required /> 
      </Label>

      <Button variant="contained" type="submit">Register </Button>
    </Form>
  )
}



