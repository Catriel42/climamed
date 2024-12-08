import { Row, Col } from "antd";
import PSCard from "../components/Card/Card";
// Imagenes
import prod1 from "../assets/Products/prod1.jpg";
import prod2 from "../assets/Products/prod2.jpg";

const productData = [
  {
    id: 1,
    image: prod1,
    title: "Producto 1",
    description: "Descripción del producto 1",
  },
  {
    id: 2,
    image: prod2,
    title: "Producto 2",
    description: "Descripción del producto 2",
  },
  // Agrega más productos aquí
];

const Productos = () => {
  return (
    <div>
      {/* Agrega margen superior al contenedor */}
      <div style={{ padding: "20px", marginTop: "80px" }}>
        <Row gutter={[16, 16]}>
          {productData.map((product) => (
            <Col
              key={product.id}
              xs={24} // 1 columna en pantallas pequeñas
              sm={12} // 2 columnas en pantallas medianas
              md={8}  // 3 columnas en pantallas medianas-grandes
              lg={6}  // 4 columnas en pantallas grandes
              xl={4}  // 5 columnas en pantallas muy grandes
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
