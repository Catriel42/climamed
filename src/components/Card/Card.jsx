import PropTypes from "prop-types";
import { Card, Button } from "antd";

const { Meta } = Card;

const PSCard = ({ image, title, description, category }) => {
  const phoneNumber = "59175961315";
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola, estoy interesado en el ${title}. ¿Podrías brindarme más información`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card
      hoverable
      cover={<img alt={title} src={image} />}
      className="mb-4"
      actions={[
        <div key="quote-container" className="px-4 w-full flex justify-center">
          <Button 
            onClick={handleWhatsAppClick}
            className="!bg-secondary hover:!bg-primary !text-light w-full transition-colors duration-300 border-none"
            style={{
              backgroundColor: '#2d6073',
            }}
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
        description={description} 
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