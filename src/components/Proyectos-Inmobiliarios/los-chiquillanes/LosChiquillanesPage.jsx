import React from 'react';
import LandingProyectosInmobiliarios from '../../common/LandingProyectosInmobiliarios/LandingProyectosInmobiliarios';
import videoSrc from '../../../Assets/video/Loschiquillanes-Bkg.mp4'
import ramas from '../../../Assets/ramas-menu.png';
import logoSrc from '../../../Assets/img/logos/Logo chiquillanes blanco.png'; //

// Importar los recursos necesarios (videoSrc, logoSrc, ramas, etc.)

const subtitles = [
  "Tu nueva vida en el sur de Chile, Villarrica, Araucanía Lacustre",
  "Parcelas de 5.000 m², con luz, agua y rol incluido",
  "Parcelas planas, limpias y listas para comenzar a construir",
  "Cerca de la ciudad y con fácil acceso al proyecto a través de la Ruta s63"
];

const LosTordosPage = () => {
  return (
    <div>
      <LandingProyectosInmobiliarios
        videoSrc={videoSrc}
        logoSrc={logoSrc}
        ramas={ramas}
        subtitles={subtitles}
        masterPlanUrl="https://www.youtube.com/watch?v=OcLg98EXq1w"
        videoUrl="https://www.youtube.com/watch?v=OcLg98EXq1w"
        instagramUrl="https://www.instagram.com/parcelas.astra360/"
        ubicacionUrl="https://maps.app.goo.gl/bx8P4DbeetVfpxKG8"
        whatsappNumber="+56931354518"
        whatsappMessage="Hola, quiero más información del proyecto los Chiquillanes"
        callToAction="¡Hablemos ahora!"
        brochureUrl="https://drive.google.com/file/d/1Xayi96nOm4dFgQF1AG4Edmynb_-q24cv//preview"
      />
    </div>
  );
};

export default LosTordosPage;
