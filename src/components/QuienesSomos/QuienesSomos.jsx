import React, { useState } from 'react';

const QuienesSomos = () => {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Quiénes somos?</h2>

      <div className="flex flex-wrap justify-center mb-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
      </div>

      <p className="text-lg text-gray-600 mb-4">
        Somos una empresa dedicada a brindar soluciones innovadoras y de alta calidad. Nuestro equipo está compuesto por profesionales apasionados y comprometidos.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Nuestra misión es ser líderes en el sector, superando las expectativas de nuestros clientes mediante innovación y mejora continua.
      </p>

      {mostrarMas && (
        <div>
          <p className="text-lg text-gray-600 mb-4">
            Nuestra visión es ser reconocidos por la excelencia y calidad, siendo un socio confiable para nuestros clientes.
          </p>
          <div className="flex flex-wrap justify-center mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-2 my-2" />
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Nuestros valores: integridad, innovación y calidad. Creemos en la satisfacción del cliente y el desarrollo de nuestro equipo.
          </p>
        </div>
      )}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? 'Mostrar menos' : 'Mostrar más'}
      </button>
    </div>
  );
};

export default QuienesSomos;
