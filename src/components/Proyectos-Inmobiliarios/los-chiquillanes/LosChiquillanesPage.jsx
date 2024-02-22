// Importa React y otros componentes necesarios si aún no lo has hecho
import React from 'react';

// Asegúrate de importar el componente de encabezado correcto para LosChiquillanes
import LosChiquillanesHeader from './header/LosChiquillanesHeader';

// Define el componente de la página para LosChiquillanes
const LosChiquillanesPage = () => {
  return (
    <div>
      {/* Utiliza el componente de encabezado específico de LosChiquillanes */}
      <LosChiquillanesHeader />
    </div>
  );
};

// Exporta el componente para su uso en otros lugares de tu aplicación
export default LosChiquillanesPage;
