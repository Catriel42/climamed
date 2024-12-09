import Carousel from "../components/Carousel/Carousel";
import AboutSection from "../components/AboutSection/AboutSection";
import CatalogSection from "../components/CatalogoSection/CatalogSection";
import ContactSection from "../components/ContactSection/ContactSection";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutSection />
      <CatalogSection />
      <ContactSection />
    </div>
  );
};

export default Home;
