import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png"; // Reemplaza con la ruta correcta de tu logo

const ContactSection = () => {
  return (
    <section className="bg-[#f0f7da] py-16 px-8 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 p-6 rounded-lg"> {/* Se aumentó el gap entre las columnas */}
        {/* Columna izquierda (Sobre Friovital) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1f192f]">Sobre Friovital</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/aire-acondicionado-alicante" className="text-blue-800 hover:underline">Aire Acondicionado Alicante</Link>
            </li>
            <li>
              <Link to="/sobre-climmamed" className="text-blue-800 hover:underline">Sobre Friovital</Link>
            </li>
            <li>
              <Link to="/blog" className="text-blue-800 hover:underline">Blog</Link>
            </li>
            <li>
              <Link to="/oferta-aire-acondicionado" className="text-blue-800 hover:underline">Oferta Aire acondicionado Alicante</Link>
            </li>
            <li>
              <Link to="/contactar" className="text-blue-800 hover:underline">Contactar</Link>
            </li>
            <li>
              <Link to="/aviso-legal" className="text-blue-800 hover:underline">Aviso Legal</Link>
            </li>
          </ul>
        </div>

        {/* Columna central (Información de contacto) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1f192f]">Contacta con Climmamed</h2>
          <p className="text-lg text-gray-600">CLIMAMED Calle Santa Maria Mazzarelo, 5, 03007 Alicante (Alacant), Alicante</p>
          <p className="text-lg text-gray-600">Teléfono: 966 38 62 87</p>
          <p className="text-lg text-gray-600">Horario:</p>
          <ul className="text-gray-600 space-y-1">
            <li>Lunes a Viernes: 8:30 - 18:30</li>
            <li>Sábado y Domingo: Cerrado</li>
          </ul>
          <p className="text-lg text-gray-600">Atención 24 horas por WhatsApp: 649 12 56 55</p>
        </div>

        {/* Columna derecha (Trabaja con nosotros) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1f192f]">Trabaja con nosotros</h2>
          <Link to="/trabaja-con-nosotros">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 mt-4">
              Trabaja con nosotros
            </button>
          </Link>
          {/* Logo al final de la columna derecha */}
          <div className="mt-6 flex justify-center">
            <img
              src={logo} // Ruta de la imagen del logo
              alt="Logo de Climmamed"
              className="w-48 h-auto" // Aumenté el tamaño de la imagen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
