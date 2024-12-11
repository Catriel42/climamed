// Home.jsx
import { useMediaQuery } from 'react-responsive';
import SectionType1 from '../components/SectionType1/SectionType1';
import SectionType2 from '../components/SectionType2/SectionType2';
import ContactSection from '../components/ContactSection/ContactSection';
import CarouselDesktop from "../components/CarouselDesktop/CarouselDesktop";
import CarouselMobile from "../components/CarouselMobile/CarouselMobile";

// Importa las imágenes
import aboutImage from '../assets/img1.jpg';
import catalogImage from '../assets/img2.jpg';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 960 });

  // Datos para About Section
  const aboutData = {
    title: "Acerca de nosotros",
    description: "FRIOVITAL es una empresa boliviana dedicada a brindarte soluciones industriales en frío.",
    buttonText: "CONOCE MÁS",
    buttonLink: "/quienes-somos",
    image: aboutImage,
    imageAlt: "Personas en reunión"
  };

  // Datos para Catalog Section
  const catalogData = {
    title: "Catálogo de Productos",
    description: "Explora nuestra amplia gama de productos para encontrar las soluciones industriales en frío que necesitas. ¡Descubre lo mejor para tu negocio!",
    buttonText: "VER CATÁLOGO",
    buttonLink: "/catalogo-web",
    image: catalogImage,
    imageAlt: "Catálogo de productos"
  };

  return (
    <div className="mt-20">
      {isMobile ? <CarouselMobile/> : <CarouselDesktop />}
      <SectionType1 {...aboutData} />
      <SectionType2 {...catalogData} />
      <ContactSection />
    </div>
  );
};

export default Home;