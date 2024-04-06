import React from 'react';
import LandingProyectosInmobiliarios from '../../common/LandingProyectosInmobiliarios/LandingProyectosInmobiliarios';
import videoSrc from '../../../Assets/video/Lomas-De-Siete-Tazas-Bkg.m4v'
import ramas from '../../../Assets/ramas-Boton-quiero-saber-más.png';
import logoSrc from '../../../Assets/img/logos/Lomas-de-siete-tazas.png';

// Importar los recursos necesarios (videoSrc, logoSrc, ramas, etc.)

const subtitles = [
  "Conecta con la Naturaleza en Lomas de Siete Tazas",
  "Parcelas de 5.000 m², factibilidad de luz, agua y rol incluido",
  "Vive Momentos Inolvidables Junto a Tu Familia",
  "Invierte en Paz y Belleza Natural"
];

const LosTordosPage  = () => {
  return (
    <div>
      <LandingProyectosInmobiliarios
        videoSrc={videoSrc}
        logoSrc={logoSrc}
        ramas={ramas}
        subtitles={subtitles}
        masterPlanUrl="https://360total.cl/Lomas-de-Siete-Tazas/index.htm"
        videoUrl="https://youtu.be/z47tY26AoV8"
        instagramUrl="https://www.instagram.com/parcelas.astra360/"
        ubicacionUrl="https://maps.app.goo.gl/Lnk7bL44LTaMwswy9"
        whatsappNumber="+56931354518"
        whatsappMessage="Hola, quiero más información del proyecto"
        callToAction="¡Hablemos ahora!"
        nombreProyecto="Lomas de Siete Tazas"
      />
    </div>
  );
};

export default LosTordosPage;
