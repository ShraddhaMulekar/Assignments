import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

const LogIn = () => {
    const {isAuth, logOut, login} = useContext(AuthContext)

    const handleBtn = ()=>{
        if(isAuth) logOut()
            else login()
    }
  return (
    <div>
        <button onClick={handleBtn}>{isAuth ? "LogIn" : "LogOut"}</button>
        <h4>{isAuth? "welcome" : "login now!"}</h4>
    </div>
  )
}

export default LogIn