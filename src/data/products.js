import prod1 from "../assets/Products/prod1.jpg";
import prod2 from "../assets/Products/prod2.jpg";
import prod3 from "../assets/Products/prod3.jpg";
import prod4 from "../assets/Products/prod4.jpg";
import prod5 from "../assets/Products/prod5.jpg";
import prod6 from "../assets/Products/prod6.jpg";
import prod7 from "../assets/Products/prod7.jpg";
import prod9 from "../assets/Products/prod9.jpg";

export const productData = [
    { 
        id: 1, 
        image: prod1, 
        title: "Producto 1", 
        description: "Descripción del producto 1",
        category: "Categoría A",
        imageAlt: "Descripcion imagen producto 1"
    },
    {
        id: 2,
        image: prod2,
        title: "Producto 2",
        description: "Descripción del producto 2",
        category: "Categoría B",
        imageAlt: "Descripcion imagen producto 2"
    },
    {
        id: 3,
        image: prod3,
        title: "Producto 3",
        description: "Descripción del producto 3",
        category: "Categoría A",
        imageAlt: "Descripcion imagen producto 3"
    },
    {
        id: 4,
        image: prod4,
        title: "Producto 4",
        description: "Descripción del producto 4",
        category: "Categoría C",
        imageAlt: "Descripcion imagen producto 4"
    },
    {
        id: 5,
        image: prod5,
        title: "Producto 5",
        description: "Descripción del producto 5",
        category: "Categoría B",
        imageAlt: "Descripcion imagen producto 5"
    },
    {
        id: 6,
        image: prod6,
        title: "Producto 6",
        description: "Descripción del producto 6",
        category: "Categoría A",
        imageAlt: "Descripcion imagen producto 6"
    },
    {
        id: 7,
        image: prod7,
        title: "Producto 7",
        description: "Descripción del producto 7",
        category: "Categoría C",
        imageAlt: "Descripcion imagen producto 7"
    },
    {
        id: 9,
        image: prod9,
        title: "Producto 9",
        description: "Descripción del producto 9",
        category: "Categoría B",
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