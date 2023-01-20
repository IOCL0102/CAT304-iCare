import { createContext, useReducer, useEffect } from 'react'

// create the Auth Context
export const AuthContext = createContext()

// authReducer handles 
export const authReducer = (state, action) => {
  switch (action.type) {
    // use for both signup & login as they store user information
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

// wrapper for Auth Context
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  // set initial auth status
  useEffect(() => {
    // fetch user (email, JWT, type) from local storage
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
      dispatch({ type: 'LOGIN', payload: user})
    }
  }, [])
  
  // use this to check auth status
  // console.log('AuthContext state:', state)
  
  return (
    // ...state allow the fields inside to spread, hence directly access 'user' instead of 'state.user'
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}