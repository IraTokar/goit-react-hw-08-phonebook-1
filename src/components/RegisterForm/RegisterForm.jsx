import { register } from "pages/redux/auth/operations";
import { useDispatch } from "react-redux"

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
    <form   onSubmit={handleSubmit} autoComplete="off">
      <label >
        Username
        <input type="text" name="name" required/>    
      </label>

      <label>
        Email
        <input type="email" name="email" required/>    
      </label>

      <label>
        Password
        <input type="password" name="password" required /> 
      </label>

      <button type="submit">Register</button>
    </form>
  )
}


