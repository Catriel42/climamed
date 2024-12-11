import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SectionType2 = ({
  backgroundColor = "bg-white",
  title,
  description,
  buttonText,
  buttonLink,
  image,
  imageAlt,
}) => {
  return (
    <section className={`${backgroundColor} py-16 px-8 sm:px-12`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 hover:shadow-xl transition-shadow duration-500 ease-in-out p-6 rounded-lg border border-transparent">
        <div className="space-y-6 text-center text-primary">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <Link to={buttonLink}>
          <button className="bg-primary text-light px-6 py-3 rounded-md font-semibold shadow-md hover:bg-primary/80 transition-all duration-300 mt-4">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

SectionType2.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default SectionType2;