import './LoginForm.css'

function LoginForm() {
  return <section>
    <h2>Login!</h2>
    <form className="login-form">
      <label htmlFor="email">Email:</label><br/>
      <input 
        type="text" 
        id="email" 
        name="email" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        /><br/>
      <label htmlFor="password">Password:</label><br/>
      <input 
        type="password" 
        id="password" 
        name="password" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      /><br/>
      <button 
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Submit
      </button>
    </form>
  </section>
}

export default LoginForm;