import { useState } from 'react'
import './SignUpForm.css'

function SignUpForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return <section>
    <h2>Sign Up!</h2>
    <form className="sign-up-form">
      <label htmlFor="fname">First Name:</label><br/>
      <input 
        type="text" 
        placeholder="First Name"
        id="fname" 
        name="fname" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        value={ firstName }
        onChange={ event => setFirstName(event.target.value) }
      /><br/>
      <label htmlFor="lname">Last Name:</label><br/>
      <input 
        type="text" 
        placeholder="Last Name"
        id="lname" 
        name="lname" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        value={ lastName }
        onChange={ event => setLastName(event.target.value) }
      /><br/>
      <label htmlFor="email">Email:</label><br/>
      <input 
        type="text" 
        placeholder="example@email.com"
        id="email" 
        name="email" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        value={ email }
        onChange={ event => setEmail(event.target.value) }
        /><br/>
      <label htmlFor="password">Password:</label><br/>
      <input 
        type="password" 
        placeholder="Password"
        id="password" 
        name="password" 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        value={ password } 
        onChange={ event => setPassword(event.target.value) }
      /><br/>
      <button 
        className="bg-pink-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Submit
      </button>
    </form>
  </section>
}

export default SignUpForm;