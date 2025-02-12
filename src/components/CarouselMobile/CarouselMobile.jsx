import { useState, useEffect, useRef } from 'react';
import { Carousel } from 'antd';

import img2 from "../../assets/Carousel/img2.webp";


// Array de imágenes que se mostrarán en el carrusel
const images = [
  { id: 2, src: img2 },
];


const CarouselMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Manejo de scroll para cambiar de imagen
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      // Scroll hacia abajo (avanzar a la siguiente imagen)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      // Scroll hacia arriba (retroceder a la imagen anterior)
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  // Agregar y eliminar el event listener de scroll
  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel);
    }

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div style={{ marginTop: '63px' }}> {/* Aplica el margen superior aquí */}
      <div ref={carouselRef}>
        <Carousel
          autoplay
          autoplaySpeed={6000} // Cambiar cada n000 segundos
          current={currentIndex} // Establecer la imagen actual
          beforeChange={(current, next) => setCurrentIndex(next)} // Cambiar la imagen
        >
          {images.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt={`Imagen ${image.id}`}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselMobile;
