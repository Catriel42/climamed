import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import PSCard from "../components/Card/Card";
import SearchBar from "../components/SearchBar/SearchBar"; // Importa el componente SearchBar
// Imágenes
import prod1 from "../assets/Products/prod1.jpg";
import prod2 from "../assets/Products/prod2.jpg";
import prod3 from "../assets/Products/prod3.jpg";
import prod4 from "../assets/Products/prod4.jpg";
import prod5 from "../assets/Products/prod5.jpg";
import prod6 from "../assets/Products/prod6.jpg";
import prod7 from "../assets/Products/prod7.jpg";
import prod9 from "../assets/Products/prod9.jpg";

const productData = [
  { id: 1, image: prod1, title: "Producto 1", description: "Descripción del producto 1" },
  { id: 2, image: prod2, title: "Producto 2", description: "Descripción del producto 2" },
  { id: 3, image: prod3, title: "Producto 3", description: "Descripción del producto 3" },
  { id: 4, image: prod4, title: "Producto 4", description: "Descripción del producto 4" },
  { id: 5, image: prod5, title: "Producto 5", description: "Descripción del producto 5" },
  { id: 6, image: prod6, title: "Producto 6", description: "Descripción del producto 6" },
  { id: 7, image: prod7, title: "Producto 7", description: "Descripción del producto 7" },
  { id: 9, image: prod9, title: "Producto 9", description: "Descripción del producto 9" },
];

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
      product.title.toLowerCase().includes(value.toLowerCase())
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
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Productos;
