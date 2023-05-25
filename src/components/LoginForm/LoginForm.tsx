import './LoginForm.css'
import useFormValidation from './useFormValidation';


function LoginForm() {
  const {
    user,
    password,
    handleUserChange,
    handlePasswordChange,
    handleSubmit,
  } = useFormValidation()

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="login"
        value={user}
        onChange={handleUserChange}
        className="fadeIn second" name="login" placeholder="login" />

      <input type="password" id="password"
        value={password}
        onChange={handlePasswordChange}
        className="fadeIn third" name="login" placeholder="password" />

      <input type="submit" className="fadeIn fourth" value="Log In" />

    </form>
  );
}

export default LoginForm;