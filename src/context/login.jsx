import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();
export const LoginProvider = ({children}) => {
  const [isAuthenticated, setAuthenticationStatus] = useState(false)
  const [username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const savedUser = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    
    if (authStatus === 'true') {
      setAuthenticationStatus(true);
      setUsername(savedUser || '');
      setPassword(savedPassword || '');
    }
  }, [])

  const login = (user, psw) => {
    if(user && psw) {
      setUsername(user);
      setPassword(psw);
      setAuthenticationStatus(true);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', user);
      localStorage.setItem('password', psw);
    } else {
      console.log("Both username and password are mandatory")
    }
  }

  const logout = () => {
    setAuthenticationStatus(false);
    setUsername('');
    setPassword('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  };

  return (
  <LoginContext.Provider value={{isAuthenticated, username, password, login, logout}}>
    {children}
  </LoginContext.Provider>)
}

