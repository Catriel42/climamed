import ContactSection from "../components/ContactSection/ContactSection";

const Contactanos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">Contactanos</h1>
      <p className="mt-4 text-gray-600 text-center">
        Aqui insertaremos como contactarnos.
      </p>
      <ContactSection />
    </div>
  );
};

export default Contactanos;
