import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/services";
import Layout from "./pages/Layout";
import { ChatProvider } from "./pages/ChatContext";
// import './App.css'

function App() {
  return (
    <ChatProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </ChatProvider>
  );
}

export default App;
