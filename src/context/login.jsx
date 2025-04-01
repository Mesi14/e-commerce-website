import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext({isAuthenticated: false, token: "", setAuthenticatedStatus: () => {}})

export const LoginProvider = ({children}) => {
  const [isAuthenticated, setAuthenticationStatus] = useState(localStorage.getItem("isAuthenticated") || false);
  const [token, setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
  localStorage.setItem("isAuthenticated", false)
  }, [isAuthenticated])

  return (
  <LoginContext.Provider value={{isAuthenticated, token, setAuthenticationStatus}}>
    {children}
  </LoginContext.Provider>)
}

