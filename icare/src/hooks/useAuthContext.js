import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

// custom hook for using Auth Context in components

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  // able to access the value inside the context
  return context
}