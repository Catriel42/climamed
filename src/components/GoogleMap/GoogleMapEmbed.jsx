const GoogleMapsEmbed = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7572.778168515137!2d-66.18863764198898!3d-17.390491748059763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37479178ad245%3A0xe3c065ca48dc8563!2sHip%C3%B3dromo!5e0!3m2!1ses-419!2sbo!4v1733944982619!5m2!1ses-419!2sbo"
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
