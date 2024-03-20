import React from 'react';
import LandingProyectosInmobiliarios from '../../common/LandingProyectosInmobiliarios/LandingProyectosInmobiliarios';
import videoSrc from '../../../Assets/video/hacienda-zapallar-bkg.mp4'
import ramas from '../../../Assets/ramas-menu.png';
import logoSrc from '../../../Assets/img/logos/logo-zapallar.png'; //

// Importar los recursos necesarios (videoSrc, logoSrc, ramas, etc.)

const subtitles = [
  "Descubre el Encanto de Hacienda Zapallar: Tu Nuevo Hogar Soñado",
  "Parcelas de 5.000 m², con luz, agua y rol incluido",
  "Exclusividad y Naturaleza: Vive la Experiencia Hacienda Zapallar",
  "Comodidad y Belleza: Hacienda Zapallar Te Espera"
];

const LosTordosPage = () => {
  return (
    <div>
      <LandingProyectosInmobiliarios
        videoSrc={videoSrc}
        logoSrc={logoSrc}
        ramas={ramas}
        subtitles={subtitles}
        masterPlanUrl="https://360total.cl/Hacienda-Zapallar/index.htm"
        videoUrl="https://youtu.be/PUXAHc_Fovo"
        instagramUrl="https://www.instagram.com/parcelas.astra360/"
        ubicacionUrl="https://maps.app.goo.gl/PMNKSrF6svoUD6Sz9"
        whatsappNumber="+56931354518"
        whatsappMessage="Hola, quiero más información del proyecto los Chiquillanes"
        callToAction="¡Hablemos ahora!"
      />
    </div>
  );
};

export default LosTordosPage;
