import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null) // loading state to allow 'disabled' property on front end
  const { dispatch } = useAuthContext()

  const signup = async (email, password, type) => {
    // starting the request
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password, type })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }else {
      // save the user to local storage (email, type & JWT)
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}