import { useState, useEffect } from "react";

import img2 from "../../assets/Carousel/img2.webp";
import img4 from "../../assets/Carousel/img4.png";
import img5 from "../../assets/Carousel/img5.png";

// Array de imágenes que se mostrarán en el carrusel
const images = [
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 2, src: img2 },
  
];

// Componente Carousel
const CarouselDesktop = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Imagen actual
  const [autoPlay] = useState(true); // Reproducción automática

  // Configuración del intervalo para auto-reproducción
  useEffect(() => {
    let intervalId;
    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length); // Avanza cada 10 segundos
      }, 6000); // 10 segundos
    }
    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar componente
  });

  const handleNext = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + images.length) % images.length
    );
  };

  return (
    // Contenedor principal del carrusel con margen superior para ubicarlo debajo del Navbar
    <div className="relative w-full mt-[63px] md:mt-[71px] h-[70vh] overflow-hidden">
      {/* Contenedor de las imágenes con transición */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(${currentIndex * -100}%)` }}
      >
        {/* Mapeo de imágenes */}
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-200 hover:bg-gray-300 transition-colors duration-200 p-2 rounded-full"
        >
          <i className="bi bi-chevron-left text-2xl"></i>
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-200 hover:bg-gray-300 transition-colors duration-200 p-2 rounded-full"
        >
          <i className="bi bi-chevron-right text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default CarouselDesktop;
