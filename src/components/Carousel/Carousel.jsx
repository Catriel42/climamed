import React, { useState, useEffect } from "react";
import img1 from "../../assets/Carousel/img1.jpg";
import img2 from "../../assets/Carousel/img2.jpg";
import img3 from "../../assets/Carousel/img3.jpg";

// Array de imágenes que se mostrarán en el carrusel
const images = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
];

// Componente Carousel
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Imagen actual
  const [autoPlay, setAutoPlay] = useState(true); // Reproducción automática

  // Configuración del intervalo para auto-reproducción
  useEffect(() => {
    let intervalId;
    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length); // Avanza cada 10 segundos
      }, 10000); // 10 segundos
    }
    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar componente
  }, [autoPlay, images.length]);

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
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación (anterior y siguiente) */}
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

      {/* Indicadores del índice actual */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentIndex === index ? "bg-gray-400" : "bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
