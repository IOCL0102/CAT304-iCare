import { useState } from "react"
import { Link } from 'react-router-dom'
import { useSignup } from "../hooks/useSignup"

// sample signup page
export default function Signup() {
  const [type, setType] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password, type)
  }

  return (
    <div className="mx-20">
      <form className="signup flex flex-col items-start mb-4" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        
        <label>Email address:</label>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <label>Password:</label>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
        <label>User Type: </label>
        <div>
          <input
            type="radio"
            name="type"
            value="doctor"
            checked={type==="doctor"}
            onChange={(e) => setType(e.target.value)} 
            />
          Doctor
        </div>
        <div>
          <input
            type="radio"
            name="type"
            value="patient"
            checked={type==="patient"}
            onChange={(e) => setType(e.target.value)} 
          />
        Patient
        </div>

        {/* Disable button when signing up and show error */}
        <button className='btn' disabled={isLoading}>Sign up</button>
        {error && <div className="text-red-500">{error}</div>}

        {/* After successful sign up, must create profile, use PATCH for doctor/patient */}
      </form>

      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  )
}