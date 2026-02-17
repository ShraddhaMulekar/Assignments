import reactLogo from './assets/react.svg'
import Navbar from './Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import viteLogo from '/vite.svg'
// import './App.css'
import { Link, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <nav>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </nav>
  )
}

export default App
