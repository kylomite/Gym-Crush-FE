import './SignUpForm.css'

function SignUpForm() {
  return <section>
    <h2>Sign Up!</h2>
    <form className="sign-up-form">
      <label htmlFor="fname">First Name:</label><br/>
      <input 
        type="text" 
        id="fname" 
        name="fname" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      /><br/>
      <label htmlFor="lname">Last Name:</label><br/>
      <input 
        type="text" 
        id="lname" 
        name="lname" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      /><br/>
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

export default SignUpForm;