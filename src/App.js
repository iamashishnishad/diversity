import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Services from "./pages/Services"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path ="/product" element={<Product />} />
          <Route path ="/services" element={<Services />} />
        </Routes>
      </div>
    </>
  )
}

export default App
