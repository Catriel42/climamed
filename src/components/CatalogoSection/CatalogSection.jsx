import { Link } from "react-router-dom";
import img2 from "../../assets/img2.jpg"; // Cambia esta ruta con la ruta de tu imagen del catálogo

const CatalogSection = () => {
  return (
    <section className="bg-white py-16 px-8 sm:px-12"> {/* Aumenté el valor de px */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 hover:shadow-xl transition-shadow duration-500 ease-in-out p-6 rounded-lg border border-transparent">
        {/* Contenedor del texto */}
        <div className="space-y-6 text-center text-[#1f192f]">
          <h2 className="text-3xl font-bold">Catálogo de Productos</h2>
          <p className="text-lg leading-relaxed">
            Explora nuestra amplia gama de productos para encontrar las soluciones industriales en frío que necesitas. 
            ¡Descubre lo mejor para tu negocio!
          </p>
        </div>

        {/* Contenedor de la imagen */}
        <div className="flex justify-center">
          <img
            src={img2}
            alt="Catálogo de productos"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Botón */}
        <Link to="/catalogo-web">
          <button className="bg-[#1f192f] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-[#1f192f]/80 transition-all duration-300 mt-4">
            VER CATÁLOGO
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CatalogSection;
