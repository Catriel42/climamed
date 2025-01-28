import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import { AimOutlined, EyeOutlined, RightOutlined, WhatsAppOutlined } from '@ant-design/icons';
import img1 from "../assets/About.png";
import LogoCarousel from "../components/LogosCarousel/LogosCarousel";
import { marcasData } from "../data/Marcas";
import { clientesData } from "../data/Clientes";

const QuienesSomos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/59160775958', '_blank'); 
  };

  return (
    <div>
      <div className="mt-40 px-4 max-w-7xl mx-auto">
        <h2 className={`${
          isVisible ? "animate-fadeInBounce" : "opacity-0"
        } text-5xl font-bold text-primary text-center mb-12`}>
          Acerca de Nosotros
        </h2>
        <LogoCarousel data={marcasData} slidesToShow={4} autoPlayInterval={5000}/>
        <h5 className={`${
          isVisible ? "animate-fadeInBounce" : "opacity-0"
        } text-2xl font-bold text-primary text-center mb-12`}>
          Nuestras marcas
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Climamed es una empresa líder especializada en soluciones de refrigeración industrial y comercial. 
              Con más de X años de experiencia, nos dedicamos a garantizar la calidad y eficiencia en el 
              mantenimiento de sistemas de refrigeración.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Nuestra Dedicación</h3>
              <p className="text-lg leading-relaxed">
                Nos comprometemos a proporcionar servicios de la más alta calidad, utilizando tecnología 
                de vanguardia y siguiendo los más altos estándares de la industria. Nuestro equipo de 
                técnicos certificados trabaja incansablemente para asegurar el funcionamiento óptimo de 
                sus sistemas.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Ventajas de Elegirnos</h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-start gap-2">
                  <RightOutlined className="mt-1 text-primary flex-shrink-0" />
                  <span>Servicio disponible 24/7 para emergencias</span>
                </li>
                <li className="flex items-start gap-2">
                  <RightOutlined className="mt-1 text-primary flex-shrink-0" />
                  <span>Técnicos altamente capacitados y certificados</span>
                </li>
                <li className="flex items-start gap-2">
                  <RightOutlined className="mt-1 text-primary flex-shrink-0" />
                  <span>Soluciones personalizadas para cada cliente</span>
                </li>
                <li className="flex items-start gap-2">
                  <RightOutlined className="mt-1 text-primary flex-shrink-0" />
                  <span>Uso de tecnología y equipos de última generación</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <img
              src= {img1}
              alt="Equipo Friovital trabajando"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Secciones de Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={`${
            isVisible ? "animate-fadeInBounce" : "opacity-0"
          } bg-white shadow-lg rounded-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center gap-3 mb-4">
              <AimOutlined className="text-primary text-3xl" />
              <h3 className="text-2xl font-bold text-primary">Misión</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Nuestra misión es proporcionar soluciones de refrigeración innovadoras y 
              sostenibles que superen las expectativas de nuestros clientes, garantizando 
              la máxima eficiencia y confiabilidad en cada servicio, mientras contribuimos 
              al desarrollo sostenible de nuestra industria.
            </p>
          </div>

          <div className={`${
            isVisible ? "animate-fadeInBounce" : "opacity-0"
          } bg-white shadow-lg rounded-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex items-center gap-3 mb-4">
              <EyeOutlined className="text-primary text-3xl" />
              <h3 className="text-2xl font-bold text-primary">Visión</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Ser reconocidos como la empresa líder en soluciones de refrigeración a nivel 
              nacional, destacándonos por nuestra excelencia técnica, innovación constante 
              y compromiso con la satisfacción del cliente, mientras establecemos nuevos 
              estándares en la industria.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            Contáctanos por WhatsApp
            <WhatsAppOutlined className="text-xl" />
          </button>
          <LogoCarousel data={clientesData} slidesToShow={4} autoPlayInterval={5000}/>
        <h5 className={`${
          isVisible ? "animate-fadeInBounce" : "opacity-0"
        } text-2xl font-bold text-primary text-center mb-12`}>
          Nuestros clientes
        </h5>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default QuienesSomos;