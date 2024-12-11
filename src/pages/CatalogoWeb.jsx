import ContactSection from "../components/ContactSection/ContactSection";
import { useEffect, useState } from "react";

const CatalogoWeb = () => {
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
            } text-5xl font-bold text-primary text-center`}>Catalogo Web</h2>
      <ContactSection />
    </div>
  );
};

export default CatalogoWeb;
