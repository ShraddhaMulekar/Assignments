import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default App
