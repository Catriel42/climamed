import { useState } from "react";
import Logo from "../../assets/LogoLight.svg";
import { Link } from "react-router-dom";

// Configuración de WhatsApp - Fácil de modificar
const WHATSAPP_CONFIG = {
  number: "59160775958",
  message: "Estoy interesado en Climamed, necesito más información.",
};

// Array de enlaces de navegación
const navbarLinks = [
  { id: 1, title: "¿Quiénes Somos?", link: "/quienes-somos" },
  { id: 2, title: "Servicios", link: "/servicios" },
  { id: 3, title: "Productos", link: "/productos" },
  { id: 4, title: "Catálogo Web", link: "/catalogo-web" },
  { id: 5, title: "Nuestros Trabajos", link: "/nuestros-trabajos" },
  { id: 6, title: "Contáctanos", link: "/contactanos" },
];

const redesSociales = [
  {
    id: 1,
    title: "WhatsApp",
    link: `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(
      WHATSAPP_CONFIG.message
    )}`,
    icon: <i className="bi bi-whatsapp text-xl" />,
    hoverClass:
      "hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: <i className="bi bi-instagram text-xl" />,
    hoverClass:
      "hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 3,
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61572377169715",
    icon: <i className="bi bi-facebook text-xl" />,
    hoverClass:
      "hover:text-[#1877f2] hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Logo container with white background - Ahora con ancho ajustable */}
      <div className="fixed top-0 left-0 z-50 h-[96px] bg-white w-64 bg-gradient-to-b from-white to-transparent">
        {/* Aumentamos el padding-left para dar más espacio al logo */}
        <div className="h-full flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo del Sitio"
              className="w-auto sm:w-[380px] lg:w-[500px] hover:opacity-90 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(175,255,255,0.7)]"
            />
          </Link>
        </div>
      </div>

      {/* Íconos de redes sociales en la esquina superior derecha (visible en desktop) */}
      <div className="fixed top-1 right-0 z-50 pr-20 pt-7 hidden custom:block">
        <ul className="flex space-x-6">
          {redesSociales.map((social) => (
            <li key={social.id}>
              <a
                href={social.link}
                target={social.target}
                rel={social.rel}
                className={`text-white transition-all duration-300 ${social.hoverClass}`}
                title={social.title}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Barra de navegación principal - Ahora con altura ajustable */}
      <nav className="fixed w-full top-0 z-40 bg-cyan-600/80 backdrop-blur-md shadow-lg h-24">
        <div className="max-w-7xl mx-auto h-full flex justify-center items-center">
          {/* Añadimos un padding-left para compensar el espacio del logo */}
          <div className="hidden custom:block pl-64">
            <ul className="flex space-x-8">
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="text-white relative font-medium text-sm uppercase tracking-wide py-2 px-1
                    hover:text-cyan-300 transition-all duration-300
                    hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                    after:content-[''] after:absolute after:w-full after:h-[2px] 
                    after:bg-cyan-300 after:bottom-0 after:left-0
                    after:scale-x-0 hover:after:scale-x-100
                    after:transition-transform after:duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón de menú hamburguesa para móvil (≤1230px) */}
          <div className="custom:hidden absolute right-8">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white transition-all duration-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <i
                className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}
              />
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable (≤1230px) */}
        <div
          className={`custom:hidden bg-[#2d6073]/95 backdrop-blur-md transform transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0 max-h-[400px]"
              : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
          }`}
        >
          <ul
            className={`px-4 pt-2 pb-4 space-y-2 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200 delay-100`}
          >
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="block text-white px-3 py-2 rounded-md text-base font-medium
                  transition-all duration-300
                  hover:text-cyan-300 hover:bg-[#3d7b94]
                  hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                >
                  {link.title}
                </a>
              </li>
            ))}

            <li className="pt-4">
              <div className="flex space-x-6 px-3">
                {redesSociales.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target={social.target}
                    rel={social.rel}
                    className={`text-white transition-all duration-300 ${social.hoverClass}`}
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
