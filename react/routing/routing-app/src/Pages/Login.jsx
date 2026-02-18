import React, { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    localStorage.setItem("authToken", "auth123Token");
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogOut}>Log out</button>
      ) : (
        <button onClick={handleLogIn}>Log In</button>
      )}
    </div>
  );
};

export default Login;
