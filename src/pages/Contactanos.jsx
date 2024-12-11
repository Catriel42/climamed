import ContactSection from "../components/ContactSection/ContactSection";
import { useEffect, useState } from "react";
import GoogleMapsEmbed from "../components/GoogleMap/GoogleMapEmbed";
import ContactForm from "../components/ContactForm/ContactForm";

const Contactanos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-40">
      <h2 className={`${
              isVisible ? "animate-fadeInBounce" : "opacity-0"
            } text-5xl mb-4 font-bold text-primary text-center`}>Contáctanos</h2>
      <ContactForm />
      <GoogleMapsEmbed className="" />
      <ContactSection />
    </div>
  );
};

export default Contactanos;
