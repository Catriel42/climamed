import prod1 from "../assets/Products/prod1.jpg";
import prod2 from "../assets/Products/prod2.jpg";
import prod3 from "../assets/Products/prod3.jpg";
import compresorHermetico from "../assets/Products/compresorHermetico.jpeg";
import prod6 from "../assets/Products/prod6.jpg";
import termostato from "../assets/Products/termostato.jpeg";
import ventiladores from "../assets/Products/prod9.jpg";
import tuberiasDeCobre from "../assets/Products/tuberia-de-cobre.webp";
import tomas from "../assets/Products/Tomas.png";
import accesorios from "../assets/Products/accesorios.jpeg";
import flujometro from "../assets/Products/flujometro.jpeg";

export const productData = [
    { 
        id: 1, 
        image: prod1, 
        title: "Valvulas de expansión", 
        description: "Precisión y Control para Máxima Eficiencia. Nuestras válvulas de expansión regulan con exactitud el flujo de refrigerante, garantizando un enfriamiento óptimo, reducción de consumo energético y protección prolongada de tus equipos. ",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 1"
    },
    {
        id: 2,
        image: prod2,
        title: "Gases refrigerantes",
        description: "Nuestros refrigerantes R134A, R404A, R407C, R410A, R22 R404 son los agentes de enfriamiento más eficientes, asegurando que tus equipo opere en óptimas condiciones",
        category: "Insumos",
        imageAlt: "Descripcion imagen producto 2"
    },
    {
        id: 3,
        image: prod3,
        title: "Herramientas",
        description: "El KIT de HERRAMIENTAS que tanto estás buscando. Al precio justo, adquiérelas y brinda un servicio de instalación y técnico de alta eficiencia.",
        category: "Herramientas",
        imageAlt: "Descripcion imagen producto 3"
    },
    {
        id: 5,
        image: compresorHermetico,
        title: "Compresor Hermético",
        description: "compresor de alta calidad puede reducir tus costos energéticos y mejorar la durabilidad de tu equip. Con CLIMAMED, obtienes no solo productos de calidad, sino también la tranquilidad de un funcionamiento óptimo y duradero.",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 5"
    },
    {
        id: 6,
        image: prod6,
        title: "Compresores Semiherméticos",
        description: "Nuestros COMPRESORES originales garantizan la temperatura ideal de refrigeración de las verduras, carnes, productos lácteos, fármacos etc.",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 6"
    },
    {
        id: 7,
        image: termostato,
        title: "Termostáto analógicos y digitales",
        description: "Controlador de temperatura con menú practico y dinámico garantizando el adecuado control de tus instalaciones pará tener un funcionamiento óptimo y confiable",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 7"
    },
    {
        id: 9,
        image: ventiladores,
        title: "Ventiladores",
        description: "Nuestros ventiladores axiales/industriales son extremadamente silenciosos y de alta eficiencia, ampliamente utilizados en condensadores y evaporadores de cámaras frigoríficas e instalaciones donde se requiere un gran caudal",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 9"
    },
    {
        id: 10,
        image: tuberiasDeCobre,
        title: "Tuberías de cobre",
        description: "Nuestras tuberías de cobre ofrecen resistencia a la corrosión y larga vida útil, garantizando sistemas de refrigeración eficientes y libres de fugas.",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 9"
    },
    {
        id: 12,
        image: accesorios,
        title: "Accesorios de bronce y cobre",
        description: "Nuestros accesorios (coples, uniones, codos) en cobre y bronce aseguran sellado hermético, resistencia a la presión y temperaturas extremas. Diseñados para integrarse sin fallos en tus instalaciones.",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 9"
    },
    {
        id: 11,
        image: tomas,
        title: "Tomas de gases medicinales",
        description: "Tomas de gases medicinales de alta calidad con certificación UL  garantizando un funcionamiento confiable para tu clínica u hospital",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 9"
    },
    {
        id: 13,
        image: flujometro,
        title: "Flujómetros",
        description: "Nuestros flujómetros garantizan control exacto de flujo de gases medicinales (oxígeno, aire médico, vacío), cumpliendo con estándares internacionales de calidad y bioseguridad. Diseñados para operar en salas críticas y quirófanos, ofrecen calibración certificada.",
        category: "Repuestos",
        imageAlt: "Descripcion imagen producto 9"
    },
];

// Función auxiliar para obtener productos por cateserviciogoría
export const getProductsByCategory = () => {
    const categories = {};

    productData.forEach(product => {
    if (!categories[product.category]) {
        categories[product.category] = [];
    }
    categories[product.category].push(product);
    });

    return categories;
};