import React, { useContext } from 'react'
import { userContext } from './UserContext'

const Message = () => {
  const msg = useContext(userContext)
  return (
    <div>
        <h3>{msg}</h3>
    </div>
  )
}

export default Message