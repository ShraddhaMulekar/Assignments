import reactLogo from "./assets/react.svg";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import viteLogo from "/vite.svg";
// import './App.css'
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <nav>
      <Navbar />
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProtectedRoutes><Product /></ProtectedRoutes>} />
        <Route path="/products/:id" element={<ProtectedRoutes><ProductDetail /></ProtectedRoutes>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </nav>
  );
}

export default App;
