// Importa las imágenes
import serv1 from '../assets/Servicios/serv1.jpg';
import serv2 from '../assets/Servicios/serv2.jpg';
import serv3 from '../assets/Servicios/serv3.jpg';
import serv4 from '../assets/Servicios/serv4.jpg';

export const serviciosData = [
    {
        title: "Servicio 1",
        description: "Descripcion Servicio 1",
        buttonText: "Texto Boton Servicio 1",
        buttonLink: "#",
        image: serv1,
        imageAlt: "Descripcion imagen servicio 1",
        category: "Categoría F"
    },
    {
        title: "Servicio 2",
        description: "Descripcion Servicio 2",
        buttonText: "Texto Boton Servicio 2",
        buttonLink: "#",
        image: serv2,
        imageAlt: "Descripcion imagen servicio 2",
        category: "Categoría D"
    },
    {
        title: "Servicio 3",
        description: "Descripcion Servicio 3",
        buttonText: "Texto Boton Servicio 3",
        buttonLink: "#",
        image: serv3,
        imageAlt: "Descripcion imagen servicio 3",
        category: "Categoría E"
    },
    {
        title: "Servicio 4",
        description: "Descripcion Servicio 4",
        buttonText: "Texto Boton Servicio 4",
        buttonLink: "#",
        image: serv4,
        imageAlt: "Descripcion imagen servicio 4",
        category: "Categoría F"
    },
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