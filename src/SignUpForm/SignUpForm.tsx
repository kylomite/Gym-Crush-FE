import './SignUpForm.css'

function SignUpForm() {
  return <section>
    <h2>Sign Up!</h2>
    <form className="sign-up-form">
      <label htmlFor="fname">First Name:</label><br/>
      <input type="text" id="fname" name="fname" /><br/>
      <label htmlFor="lname">Last Name:</label><br/>
      <input type="text" id="lname" name="lname" /><br/>
      <label htmlFor="email">Email:</label><br/>
      <input type="text" id="email" name="email" /><br/>
      <label htmlFor="password">Password:</label><br/>
      <input type="password" id="password" name="password" /><br/>
    </form>
  </section>
}

export default SignUpForm;