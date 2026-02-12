import React from 'react'
import { userContext, UserProvider } from './UserContext'

const UserName = () => {
    const userName = UserProvider(userContext)
  return (
    <div>{userName}</div>
  )
}

export default UserName