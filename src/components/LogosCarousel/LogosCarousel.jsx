import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogoCarousel = ({ autoPlayInterval = 3000, data, prompt = "marcas" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === data.length - slidesToShow ? 0 : prev + 1
    );
  }, [data.length, slidesToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? data.length - slidesToShow : prev - 1
    );
  }, [data.length, slidesToShow]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  return (
    <div className="w-full bg-gray-200 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          {prompt}
        </h2>
        <div className="w-full relative overflow-hidden px-4 my-12">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg z-10 transition-colors duration-200"
          >
            <i className="bi bi-chevron-left text-2xl"></i>
          </button>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="flex-none px-2 sm:px-4"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow p-2">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-32 sm:h-40 object-contain mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg z-10 transition-colors duration-200"
          >
            <i className="bi bi-chevron-right text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

LogoCarousel.propTypes = {
  autoPlayInterval: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  prompt: PropTypes.string,
};

LogoCarousel.defaultProps = {
  autoPlayInterval: 3000,
  prompt: "marcas",
};

export default LogoCarousel;