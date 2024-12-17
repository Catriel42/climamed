import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import PSCard from "../components/Card/Card";
import ContactSection from "../components/ContactSection/ContactSection";
import SearchBar from "../components/SearchBar/SearchBar"; // Importa el componente SearchBar
import { productData } from "../data/products";

const Productos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [placeholder, setPlaceholder] = useState("Buscar...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setPlaceholder("Buscar...");
      } else {
        setPlaceholder("Busca un producto...");
      }
    };

    // Detecta el cambio en el tamaño de la pantalla al cargar y al redimensionar
    window.addEventListener("resize", handleResize);
    handleResize(); // Inicializa el valor del placeholder

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (value) => {
    const filtered = productData.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (
    <div className="bg-muted min-h-screen">
      <div className="p-12 mt-20">
        {/* Contenedor con título y buscador animados */}
        <div className="flex flex-col items-center gap-6">
          <h2
            className={`${
              isVisible ? "animate-fadeInBounce" : "opacity-0"
            } text-5xl font-bold text-primary`}
          >
            Nuestros Productos
          </h2>
          {/* Buscador con la misma animación */}
          <div
            className={`${
              isVisible ? "animate-fadeInBounce" : "opacity-0"
            } w-full max-w-2xl`}
          >
            <SearchBar placeholder={placeholder} onSearch={handleSearch} />
          </div>
        </div>

        {/* Grid de productos */}
        <Row gutter={[16, 16]} className="mt-10">
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={4}>
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
      <ContactSection />
    </div>
  );
};

export default Productos;
