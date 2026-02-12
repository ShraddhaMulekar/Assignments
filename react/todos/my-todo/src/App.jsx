import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'
import { UserProvider } from './UserContext'
import UserName from './UserName'
import Navbar from './Navbar'
import MainPage from './MainPage'

function App() {
  const [user, setUser] = useState("welcome")

  return (
    <UserProvider>
      <Navbar />
      <MainPage />
    </UserProvider>
  )
}

export default App
