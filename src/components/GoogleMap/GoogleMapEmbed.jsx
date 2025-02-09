const GoogleMapsEmbed = () => {
  return (
    <div style={{ margin: "0" }}>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2024.7776723628574!2d-66.17439846073087!3d-17.34898829314569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e375b2d23ceb17%3A0x41bbf82536be3d17!2sCondebamba%2C%20Cochabamba!5e0!3m2!1ses-419!2sbo!4v1739140623294!5m2!1ses-419!2sbo"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
