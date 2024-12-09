import { useMediaQuery } from 'react-responsive';
import AboutSection from "../components/AboutSection/AboutSection";
import CatalogSection from "../components/CatalogoSection/CatalogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import CarouselDesktop from "../components/CarouselDesktop/CarouselDesktop"; // Carrusel para móvil
import CarouselMobile from "../components/CarouselMobile/CarouselMobile"; // Carrusel para escritorio

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 960 }); // Detecta si el ancho es menor o igual a 768px

  return (
    <div>
      {isMobile ? <CarouselMobile /> : <CarouselDesktop />}
      <AboutSection />
      <CatalogSection />
      <ContactSection />
    </div>
  );
};

export default Home;
