import { Link } from "react-router-dom";
import img from "../../assets/img1.jpg"; // Reemplaza con tu ruta de imagen

const AboutSection = () => {
  return (
    <section className="bg-white py-32 px-8 sm:px-12"> {/* Aumenté el valor de px */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:shadow-xl transition-shadow duration-500 ease-in-out p-6 rounded-lg border border-transparent">
        {/* Contenedor del texto */}
        <div className="space-y-6 text-[#1f192f]">
          <h2 className="text-3xl font-bold">Acerca de nosotros</h2>
          <p className="text-lg text-[#1f192f] leading-relaxed">
            FRIOVITAL es una empresa boliviana dedicada a brindarte soluciones industriales en frío.
          </p>
          <Link
            to="/quienes-somos" // Cambia esta ruta según tu configuración del router
          >
            <button className="bg-[#1f192f] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-[#1f192f]/80 transition-all duration-300 mt-4">
              CONOCE MÁS
            </button>
          </Link>
        </div>

        {/* Contenedor de la imagen */}
        <div className="flex justify-center md:justify-end">
          <img
            src={img}
            alt="Personas en reunión"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
