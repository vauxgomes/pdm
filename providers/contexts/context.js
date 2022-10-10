import React, { useState, createContext } from 'react'

export const Context = createContext()

export default function ContextProvider({ children }) {
  // Token
  const [token, setToken] = useState(localStorage.getItem('token') || "")

  const handleLogin = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
    console.log('Login OK')
  }

  const handleLogout = () => {
    setToken('')
    localStorage.removeItem('token')
    console.log('Logout OK')
  }

  // Provider
  return (
      <Context.Provider
          value={{
            token, 
            handleLogin, 
            handleLogout
          }}
      >
          {children}
      </Context.Provider>
  )
}