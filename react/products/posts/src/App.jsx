import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsList from './posts/PostsList'
import { themeContext, ThemeProvider } from './context/ThemeContext'
import "./posts/Posts.css"
import LogIn from './LogIn'
import { AuthProvider } from './context/AuthContext'

function App() {
  // const [count, setCount] = useState(0)
  const {theme} = useContext(themeContext)

  return (
    <div className={`app_{theme}`}>
      <button>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
      {/* <PostsList /> */}
      <AuthProvider>

      <LogIn />
      </AuthProvider>
    </div>
  )
}

export default App
