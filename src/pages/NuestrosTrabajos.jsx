import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection/ContactSection";

const NuestrosTrabajos = () => {
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
            } text-5xl font-bold text-primary text-center`}>Trabajos exitosos que ya realizamos</h2>
      <ContactSection />
    </div>
  );
};

export default NuestrosTrabajos;
