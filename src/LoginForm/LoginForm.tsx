import { useState } from 'react';
import './LoginForm.css'
import { login } from '../services/authServices';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async(event: React.FormEvent) => {
    console.log("test")
    event.preventDefault()

    try {
      const userData = await login(loginEmail, loginPassword);
      // Navigate to user-overview and pass userData
      navigate("/user-overview", { state: { user: userData } });
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  }

  return <section>
    <h2>Login!</h2>
    <form className="login-form" onSubmit={handleLogin}>
      <label htmlFor="login-email">Email:</label><br/>
      <input 
        type="text" 
        placeholder="example@email.com"
        id="login-email" 
        name="login-email" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        value={ loginEmail }
        onChange={ event => setLoginEmail(event.target.value) }
        /><br/>
      <label htmlFor="password">Password:</label><br/>
      <input 
        type="password" 
        placeholder="Password"
        id="loginPassword" 
        name="loginPassword" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        value={ loginPassword } 
        onChange={ event => setLoginPassword(event.target.value) }
      /><br/>
      <button 
        className="bg-pink-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        type="submit"
        >
        Submit
      </button>
    </form>
  </section>
}

export default LoginForm;