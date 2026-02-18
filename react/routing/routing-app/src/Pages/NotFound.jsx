import { House } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate("/")}>
            <House />
        </button>
        <h2>404- PAGE NOT FOUND</h2>
        <p>The Page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound