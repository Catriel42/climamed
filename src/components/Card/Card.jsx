import PropTypes from "prop-types";
import { Card, Button } from "antd";
import { useState } from "react";

const { Meta } = Card;

const PSCard = ({ image, title, description, category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "59160775958";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola, estoy interesado en ${title}. ¿Podrían brindarme más información?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card
      hoverable
      cover={<img alt={title} src={image} className="h-48 object-cover" />}
      className="mb-4 flex flex-col justify-between"
      actions={[
        <div key="quote-container" className="px-4 w-full flex justify-center">
          <Button 
            onClick={handleWhatsAppClick}
            className="!bg-secondary hover:!bg-accent !text-light w-full transition-colors duration-300 border-none
            hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
          >
            Cotizar
          </Button>
        </div>
      ]}
    >
      <Meta 
        title={
          <div>
            <div>{title}</div>
            <div className="text-sm text-gray-500 mt-1">{category}</div>
          </div>
        } 
        description={
          <div className="mt-2">
            <div 
              className={`text-gray-700 ${isExpanded ? "" : "line-clamp-3"}`} 
              dangerouslySetInnerHTML={{ __html: isExpanded ? description : description.substring(0, 150) + "..." }}
            />
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary mt-2 block underline"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        } 
      />
    </Card>
  );
};

PSCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string.isRequired,
};

PSCard.defaultProps = {
  description: "Sin descripción disponible",
};

export default PSCard;
