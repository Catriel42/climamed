//Importaciones de componentes
import SectionType1 from '../components/SectionType1/SectionType1';
import ContactSection from '../components/ContactSection/ContactSection';
import { useEffect, useState } from "react";
import { serviciosData } from "../data/services";

const Servicios = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='mt-40'>
      <h2 className={`${
              isVisible ? "animate-fadeInBounce" : "opacity-0"
            } text-5xl font-bold text-primary text-center`}>Servicios que brindamos</h2>
      <SectionType1 {...serviciosData[0]} />
      <SectionType1 {...serviciosData[2]} />
      <SectionType1 {...serviciosData[1]} />
      <SectionType1 {...serviciosData[3]} />
      <ContactSection />
    </div>
  );
};

export default Servicios;
