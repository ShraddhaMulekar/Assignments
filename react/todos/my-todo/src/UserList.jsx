import React, { useState, useEffect } from 'react'
import axios from "axios";
import UserData from './UserData';


const UserList = () => {
    const [users, setUsers] = useState([])

    const fetchTodo = async ()=>{
        const res = await axios.get("https://fakestoreapi.com/users")
        setUsers(res.data)
    }
    console.log({users})

    useEffect(() => {
      fetchTodo()
    }, [])
    
  return (
    <UserData usersData={users}  />
  )
}

export default UserList