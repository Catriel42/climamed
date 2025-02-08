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
import LogoCarousel from '../components/LogosCarousel/LogosCarousel';
import { clientesData } from '../data/Clientes';
import { marcasData } from "../data/Marcas";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 960 });

  const aboutData = {
    title: "Acerca de nosotros",
    description: "CLIMAMED es una empresa líder especializada en soluciones de refrigeración industrial y comercial. Nos dedicamos a garantizar la calidad y eficiencia en el mantenimiento de sistemas de refrigeración.",
    buttonText: "CONOCE MÁS",
    buttonLink: "/quienes-somos",
    image: aboutImage,
    imageAlt: "Personas en reunión"
  };

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
      <LogoCarousel data={marcasData} prompt="Nuestras Marcas" slidesToShow={4} autoPlayInterval={5000}/>
      <SectionType1 {...aboutData} />
      <SectionType2 {...catalogData} />
      <LogoCarousel data={clientesData} prompt=" Nuestros Clientes" slidesToShow={4} autoPlayInterval={5000}/>
      <ContactSection />
    </div>
  );
};

export default Home;