import PropTypes from 'prop-types';

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
    <section className={`${backgroundColor} py-32 px-8 sm:px-12`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:shadow-xl transition-shadow duration-500 ease-in-out p-6 rounded-lg border border-transparent">
        <div className="space-y-6 text-primary">
          <h2 className="text-3xl font-bold text-center md:text-left">{title}</h2>
          <div
            className="service-description text-lg leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex justify-center">
            <a href={buttonLink}>
              <button className="bg-primary text-light px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-primary/80 transition-all duration-300 mt-6 transform hover:scale-105">
                {buttonText}
              </button>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <img
            src={image}
            alt={imageAlt}
            className="max-w-full h-auto rounded-lg shadow-md transition-transform duration-500 hover:scale-95"
          />
        </div>
      </div>
    </section>
  );
};

SectionType2.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired, // Nuevo propType añadido
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default SectionType2;