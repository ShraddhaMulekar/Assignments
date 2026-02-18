import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const {isLoggedIn, handleLogIn, handleLogOut} = useContext(AuthContext)
 
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
