const GoogleMapsEmbed = () => {
  return (
    <div style={{ margin: "0" }}>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1010.4170240301354!2d-66.17550114619749!3d-17.34748012698077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIwJzQ5LjMiUyA2NsKwMTAnMzEuNyJX!5e0!3m2!1ses-419!2sbo!4v1738015752338!5m2!1ses-419!2sbo"
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
