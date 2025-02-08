import instalacionesHospitalarias from '../assets/Servicios/instalacionesHospitalarias.jpeg';
import serv2 from '../assets/Servicios/serv1.jpg';
import serv3 from '../assets/Servicios/serv3.jpg';
import serv4 from '../assets/Servicios/serv4.webp';

export const serviciosData = [
    {
        title: "Instalaciones Hospitalarias",
        description: `
        <p class="service-highlight">Tecnología y Seguridad para <strong>Entornos Críticos</strong></p>
        <p>En CLIMAMED diseñamos sistemas de refrigeración y gases medicinales para hospitales, bajo los más altos estándares internacionales.</p>
        <ul class="service-list">
            <li>Suministro ininterrumpido en <strong>UCI, quirófanos y neonatología</strong></li>
            <li>Materiales <strong>anti-bacteriales y libres de contaminantes</strong></li>
            <li>Diseño modular y escalable para <strong>expansión segura</strong></li>
            <li>Control automatizado con <strong>alertas en tiempo real</strong></li>
        </ul>
        <p class="service-callout">Soporte <strong>24/7</strong> para emergencias</p>
        <p class="service-tagline">La excelencia técnica es una obligación en entornos hospitalarios.</p>
    `,
        buttonText: "Solicitar cotización",
        buttonLink: "#",
        image: instalacionesHospitalarias,
        imageAlt: "Descripcion imagen servicio 1",
        category: "Instalaciones hospitalarias"
    },
    {
        title: "Climatización comercial, domicialiaria y hospitalaria",
        description: `
        <p class="service-highlight">Confort y Eficiencia en <strong>Ambientes Controlados</strong></p>
        <p>En CLIMAMED ofrecemos soluciones de climatización para hogares y hospitales, garantizando eficiencia energética y confort térmico bajo los estándares más exigentes.</p>
        <ul class="service-list">
            <li>Diseño personalizado para <strong>cualquier tipo de instalación</strong> como carnicerías, industrias lacteas, cervecerías,etc.</li>
            <li>Variedad de equipos <strong> que cuentan con disposicón de repuestos para todas las instalaciones</strong></li>
            <li>Filtración avanzada para <strong>aire limpio y libre de contaminantes para ambientes especial como quirófanos, laboratorios, etc.</strong></li>
            <li>Automatización inteligente con <strong>control remoto y programación</strong></li>
        </ul>
        <p class="service-callout">Soporte <strong>24/7</strong> y mantenimiento preventivo</p>
        <p class="service-tagline">El ambiente ideal a la temperatura perfecta.</p>
        `,
        buttonText: "Solicitar cotización",
        buttonLink: "#",
        image: serv2,
        imageAlt: "Descripcion imagen servicio 2",
        category: "Instalaciones domeśticas y hospitalarias"
    },
    {
        title: "Instalación de cámaras frigoríficas para reactivos y fármacos",
        description: `
            <p class="service-highlight">Preservación de <strong>Medicamentos y Reactivos Sensibles</strong></p>
            <p>En CLIMAMED implementamos cámaras frigoríficas especializadas para el almacenamiento seguro de fármacos y reactivos, cumpliendo con los más estrictos protocolos de conservación.</p>
            <ul class="service-list">
                <li>Control preciso de temperatura y humedad para <strong>productos termolábiles</strong></li>
                <li>Sistemas de <strong>monitoreo continuo y registro de datos</strong></li>
                <li>Diseños <strong>libres de contaminantes y anti-bacteriales</strong></li>
            </ul>
            <p class="service-tagline">La integridad de tus productos es nuestra prioridad.</p>
        `,
        buttonText: "Solicitar cotización",
        buttonLink: "#",
        image: serv3,
        imageAlt: "Cámara frigorífica para almacenamiento de fármacos y reactivos",
        category: "Instalaciones industriales"
    },
    {
        title: "Instalación de cámaras frigoríficas industriales",
        description: `
            <p class="service-highlight">Soluciones de <strong>Frio Industrial para Grandes Demandas</strong></p>
            <p>En CLIMAMED diseñamos e implementamos cámaras frigoríficas industriales adaptadas a las necesidades de cada sector, garantizando máxima eficiencia y conservación de productos.</p>
            <ul class="service-list">
                <li>Diseños personalizados para <strong>almacenamiento masivo</strong></li>
                <li>Tecnología de punta para <strong>control preciso de temperatura y humedad</strong></li>
                <li>Sistemas de <strong>eficiencia energética y bajo impacto ambiental</strong></li>
                <li>Monitoreo 24/7 con <strong>alertas en tiempo real y registro de datos</strong></li>
            </ul>
            <p class="service-tagline">La excelencia en frío industrial para tu negocio.</p>
        `,
        buttonText: "Solicitar cotización",
        buttonLink: "#",
        image: serv4,
        imageAlt: "Cámara frigorífica industrial para almacenamiento a gran escala",
        category: "Instalaciones industriales"
    }
];

// Función auxiliar para obtener productos por categoría
export const getServicesByCategory = () => {
    const categories = {};

    serviciosData.forEach(service => {
    if (!categories[service.category]) {
        categories[service.category] = [];
    }
    categories[service.category].push(service);
    });

    return categories;
};