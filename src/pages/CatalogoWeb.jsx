import ContactSection from "../components/ContactSection/ContactSection";

const CatalogoWeb = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">Catalogo Web</h1>
      <p className="mt-4 text-gray-600 text-center">
        Aqui insertaremos el catalogo web.
      </p>
      <ContactSection />
    </div>
  );
};

export default CatalogoWeb;
