import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LogoCarousel = ({ autoPlayInterval = 3000, slidesToShow = 3, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === data.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? data.length - slidesToShow : prev - 1
    );
  };

  return (
    <div className="w-full relative overflow-hidden px-8 my-12">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg z-10 transition-colors duration-200"
      >
        <i className="bi bi-chevron-left text-2xl"></i>
      </button>

      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * (100 / slidesToShow))}%)`,
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-none px-4"
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg z-10 transition-colors duration-200"
      >
        <i className="bi bi-chevron-right text-2xl"></i>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentIndex === index ? "bg-gray-400" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

LogoCarousel.propTypes = {
  autoPlayInterval: PropTypes.number,
  slidesToShow: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

LogoCarousel.defaultProps = {
  autoPlayInterval: 3000,
  slidesToShow: 3,
};

export default LogoCarousel;
