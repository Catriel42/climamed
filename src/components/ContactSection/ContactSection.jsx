import { Link } from "react-router-dom";
import logo from "../../assets/LogoDark.png"; // Reemplaza con la ruta correcta de tu logo

const ContactSection = () => {
  return (
    <section className="bg-highlight py-16 px-8 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 p-6 rounded-lg"> {/* Se aumentó el gap entre las columnas */}
        {/* Columna izquierda (Sobre Friovital) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Sobre Climamed</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/quienes-somos" className="text-secondary hover:underline">¿Quiénes Somos?</Link>
            </li>
            <li>
              <Link to="/servicios" className="text-secondary hover:underline">Servicios</Link>
            </li>
            <li>
              <Link to="/productos" className="text-secondary hover:underline">Productos</Link>
            </li>
            <li>
              <Link to="/catalogo-web" className="text-secondary hover:underline">Catálogo Web</Link>
            </li>
            <li>
              <Link to="/contactanos" className="text-secondary hover:underline">Contactar</Link>
            </li>
            <li>
              <Link to="/aviso-legal" className="text-secondary hover:underline">Aviso Legal</Link>
            </li>
          </ul>
        </div>

        {/* Columna central (Información de contacto) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Contacta con Climamed</h2>
          <p className="text-lg text-gray-600">CLIMAMED Cochabamba - Bolivia</p>
          <p className="text-lg text-gray-600">Horario:</p>
          <ul className="">
            <li>Lunes a Viernes: 8:30 - 18:30</li>
            <li>Sábado y Domingo: Emergencias</li>
          </ul>
          <p className="text-lg text-gray-600">Atención 24 horas por WhatsApp:</p>
          <p className="text-lg text-gray-600">60775958</p>
        </div>

        {/* Columna derecha (Trabaja con nosotros) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary">Trabaja con nosotros</h2>
          <Link to="/contactanos">
            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-secondary transition-all duration-300 mt-4">
              Trabaja con nosotros
            </button>
          </Link>
          {/* Logo al final de la columna derecha */}
          <div className="mt-6 flex">
            <img
              src={logo} // Ruta de la imagen del logo
              alt="Logo de Climamed Bolivia"
              className="w- h-auto" // Aumenté el tamaño de la imagen
            />
          </div>
        </div>
        {/* Footer */}
      <footer className="mt-10 text-left py-4 border-t border-gray-600">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Climamed Bolivia - Todos los derechos reservados.
        </p>
        <p className="text-sm text-gray-600 mt-2">
        Página web hecha por <a href="https://www.instagram.com/catodev_/" target="_blank" rel="noopener noreferrer"className="text-primary hover:underline">Catriel Pereira</a>
        </p>
      </footer>
      </div>
    </section>
  );
};

export default ContactSection;
