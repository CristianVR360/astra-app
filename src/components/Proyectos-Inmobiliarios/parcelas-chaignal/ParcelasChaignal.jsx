import React from 'react';
import LandingProyectosInmobiliarios from '../../common/LandingProyectosInmobiliarios/LandingProyectosInmobiliarios';
import videoSrc from '../../../Assets/video/chaignal-bkg.mp4'
import ramas from '../../../Assets/ramas-Boton-quiero-saber-más.png';
import logoSrc from '../../../Assets/img/logos/parcelas-Chaignal-logo.png';

// Define las URLs y otros valores constantes fuera del componente
const masterPlanUrl = "https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Guillermo+Valenzuela/Chaignal/output/index.html";
const videoUrl = "https://youtu.be/IJZB19xo_8k";
const instagramUrl = "https://www.instagram.com/parcelas.astra360/";
const whatsappNumber = "+56931354518";
const whatsappMessage = "Hola, quiero más información del proyecto";
const callToAction = "¡Hablemos ahora!";
const ubicacionUrl = "https://maps.app.goo.gl/PKPdiCsChYYHCFxH6";

const subtitles = [
  "Tu nueva vida en el sur de Chile, Región de los Ríos",
  "Parcelas de 5.000 m², con luz, agua y rol incluido",
  "Parcelas planas, limpias y con orilla de río",
  "Cerca de la ciudad y con fácil acceso al proyecto a través de la Ruta Internacional 203"
];

const LosTordosPage = () => {
  return (
    <div>
      <LandingProyectosInmobiliarios
        videoSrc={videoSrc}
        logoSrc={logoSrc}
        ramas={ramas}
        subtitles={subtitles}
        masterPlanUrl={masterPlanUrl}
        videoUrl={videoUrl}
        instagramUrl={instagramUrl}
        whatsappNumber={whatsappNumber}
        whatsappMessage={whatsappMessage}
        callToAction={callToAction}
        ubicacionUrl={ubicacionUrl}
      />
    </div>
  );
};

export default LosTordosPage;
