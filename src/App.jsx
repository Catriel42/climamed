import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus páginas
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import CatalogoWeb from "./pages/CatalogoWeb";
import NuestrosTrabajos from "./pages/NuestrosTrabajos";
import Contactanos from "./pages/Contactanos";

// Importa los componentes comunes
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router basename="/"> {/* Agrega el 'basename' para definir la base de la ruta */}
      {/* Navbar siempre visible */}
      <Navbar />
      {/* Configuración de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/catalogo-web" element={<CatalogoWeb />} />
        <Route path="/nuestros-trabajos" element={<NuestrosTrabajos />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
    </Router>
  );
};

export default App;
