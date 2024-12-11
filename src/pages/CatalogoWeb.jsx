import ContactSection from "../components/ContactSection/ContactSection";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../data/products";
import PSCard from "../components/Card/Card";
import { Row, Col } from "antd";
import { getServicesByCategory } from "../data/services";

const CatalogoWeb = () => {
  const [isVisible, setIsVisible] = useState(false);
  const productsByCategory = getProductsByCategory();
  const servicesByCategory = getServicesByCategory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-40">
      <h2 
        className={`${
          isVisible ? "animate-fadeInBounce" : "opacity-0"
        } text-5xl id="top" font-bold text-primary text-center`}
      >
        Catálogo Web
      </h2>
      {/* Sección de Productos */}
      <h2 
        className={`${
          isVisible ? "animate-fadeInBounce" : "opacity-0"
        } text-4xl mt-8 ml-6 font-bold text-primary text-left`}
      >
        Nuestros Productos
      </h2>
      
      <div className="p-12">
        {Object.entries(productsByCategory).map(([category, products]) => (
          <div key={category} className="mb-12">
            <h3 className={`
              ${isVisible ? "animate-fadeInBounce" : "opacity-0"}
              text-3xl font-semibold text-secondary mb-6
            `}>
              {category}
            </h3>
            
            <Row gutter={[16, 16]}>
              {products.map((product) => (
                <Col
                  key={product.id}
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                >
                  <PSCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    category={product.category}
                  />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
      
      {/* Sección de Servicios */}
      <h2 
        className={`${
          isVisible ? "animate-fadeInBounce" : "opacity-0"
        } text-4xl mt-8 ml-6 font-bold text-primary text-left`}
      >
        Servicios que brindamos
      </h2>
      <div className="p-12">
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="mb-12">
            <h3 className={`
              ${isVisible ? "animate-fadeInBounce" : "opacity-0"}
              text-3xl font-semibold text-secondary mb-6
            `}>
              {category}
            </h3>
            <Row gutter={[16, 16]}>
              {services.map((service) => (
                <Col
                  key={services.id}
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                >
                  <PSCard
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    category={service.category}
                  />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
      <ContactSection />
    </div>
  );
};

export default CatalogoWeb;