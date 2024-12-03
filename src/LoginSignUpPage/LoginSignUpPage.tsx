import './LoginSignUpPage.css'
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';

function LoginSignUpPage() {
  return <main className="login-or-signup-page">
    <LoginForm />
    <h3>OR</h3>
    <SignUpForm />
  </main>
}

export default LoginSignUpPage;
