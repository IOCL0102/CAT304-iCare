import { useState } from "react"
import { Link } from 'react-router-dom'
import { useLogin } from "../hooks/useLogin"


// sample login page
export default function Login () {
  const [type, setType] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password, type)
  }

  return (
    <div className="mx-20">

      <form className="login flex flex-col items-start mb-4" onSubmit={handleSubmit}>
        <h3>Log In</h3>

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

        {/* Disable button when loging up and show error */}
        <button className='btn' disabled={isLoading}>Log in </button>
        {error && <div className="text-red-500">{error}</div>}

        {/* After successful login, must direct to dashboard for each individual dashboard */}
      </form>

      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  )
}

