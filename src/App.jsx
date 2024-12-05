import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus páginas
import Home from "./pages/Home";
import About from "./pages/About";
/* import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact"; */

// Importa los componentes comunes
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      {/* Navbar siempre visible */}
      <Navbar />
      {/* Configuración de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
