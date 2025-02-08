import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import { jobsData } from "../data/jobs";
import SectionType1 from "../components/SectionType1/SectionType1";

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
      <SectionType1 {...jobsData[0]} />
      <SectionType1 {...jobsData[1]} />
      <SectionType1 {...jobsData[2]} />
      <SectionType1 {...jobsData[3]} />
      <SectionType1 {...jobsData[4]} />
      <ContactSection />
    </div>
  );
};

export default NuestrosTrabajos;
