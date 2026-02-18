import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("authToken") ? true : false,
  );

  const handleLogIn = () => {
    localStorage.setItem("authToken", "auth123Token");
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogIn, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};
