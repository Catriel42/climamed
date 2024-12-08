import PropTypes from "prop-types";
import { Card } from "antd";

const { Meta } = Card;

const PSCard = ({ image, title, description }) => {
  return (
    <Card
      hoverable
      cover={<img alt={title} src={image} />}
      style={{ marginBottom: "16px" }}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

PSCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

PSCard.defaultProps = {
  description: "Sin descripción disponible",
};

export default PSCard;
