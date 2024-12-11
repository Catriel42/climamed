//Importaciones de componentes
import SectionType1 from '../components/SectionType1/SectionType1';
import SectionType2 from '../components/SectionType2/SectionType2';
import ContactSection from '../components/ContactSection/ContactSection';
import { useEffect, useState } from "react";


// Importa las imágenes
import serv1 from '../assets/Servicios/serv1.jpg';
import serv2 from '../assets/Servicios/serv2.jpg';
import serv3 from '../assets/Servicios/serv3.jpg';
import serv4 from '../assets/Servicios/serv4.jpg';

const Servicios = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const serviciosData = [
    {
      title: "Servicio 1",
      description: "Descripcion Servicio 1",
      buttonText: "Texto Boton Servicio 1",
      buttonLink: "#",
      image: serv1,
      imageAlt: "Descripcion imagen servicio 1"
    },
    {
      title: "Servicio 2",
      description: "Descripcion Servicio 2",
      buttonText: "Texto Boton Servicio 2",
      buttonLink: "#",
      image: serv2,
      imageAlt: "Descripcion imagen servicio 2"
    },
    {
      title: "Servicio 3",
      description: "Descripcion Servicio 3",
      buttonText: "Texto Boton Servicio 3",
      buttonLink: "#",
      image: serv3,
      imageAlt: "Descripcion imagen servicio 3"
    },
    {
      title: "Servicio 4",
      description: "Descripcion Servicio 4",
      buttonText: "Texto Boton Servicio 4",
      buttonLink: "#",
      image: serv4,
      imageAlt: "Descripcion imagen servicio 4"
    },
  ];
  

  return (
    <div className='mt-40'>
      <h2 className={`${
              isVisible ? "animate-fadeInBounce" : "opacity-0"
            } text-5xl font-bold text-primary text-center`}>Servicios que brindamos</h2>
      <SectionType1 {...serviciosData[0]} />
      <SectionType1 {...serviciosData[1]} />
      <SectionType1 {...serviciosData[2]} />
      <SectionType2 className="" {...serviciosData[3]} />
      <ContactSection />
    </div>
  );
};

export default Servicios;
