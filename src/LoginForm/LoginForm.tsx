import './LoginForm.css'

function LoginForm() {
  return <section>
    <h2>Login!</h2>
    <form className="login-form">
      <label htmlFor="email">Email:</label><br/>
      <input type="text" id="email" name="email" /><br/>
      <label htmlFor="password">Password:</label><br/>
      <input type="password" id="password" name="password" /><br/>
    </form>
  </section>
}

export default LoginForm;