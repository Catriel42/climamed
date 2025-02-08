import PropTypes from "prop-types";

const SectionType3 = ({
  backgroundColor = "bg-white",
  title,
  description,
  buttonText,
  videoSrc, // Nueva prop para la fuente del video
  videoAlt, // Nueva prop para el texto alternativo del video
}) => {
  const whatsappNumber = "59160775958";

  const defaultMessage = `Estoy interesado en ${title}, ¿podría brindarme más información?`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <section className={`${backgroundColor} py-16 px-8 sm:px-12`}>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 hover:shadow-xl transition-shadow duration-500 ease-in-out p-6 rounded-lg border border-transparent">
        <div className="space-y-6 text-center text-primary">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div
            className="service-description text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="flex justify-center">
          <video
            controls // Agrega controles de reproducción
            className="max-w-full h-auto rounded-lg shadow-md"
            aria-label={videoAlt} // Texto alternativo para accesibilidad
          >
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>

        {/* Botón que redirige a WhatsApp */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-primary text-light px-6 py-3 rounded-md font-semibold shadow-md hover:bg-primary/80 transition-all duration-300 mt-4">
            {buttonText}
          </button>
        </a>
      </div>
    </section>
  );
};

SectionType3.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired, // Nueva prop para la fuente del video
  videoAlt: PropTypes.string.isRequired, // Nueva prop para el texto alternativo
};

export default SectionType3;