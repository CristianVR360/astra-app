import React from 'react';
import LandingProyectosInmobiliarios from '../../common/LandingProyectosInmobiliarios/LandingProyectosInmobiliarios';
import videoSrc from '../../../Assets/video/chaignal-bkg.mp4'
import ramas from '../../../Assets/ramas-Boton-quiero-saber-más.png';
import logoSrc from '../../../Assets/lostordosblanco.svg';

// Define las URLs y otros valores constantes fuera del componente
const masterPlanUrl = "https://lostordosmaster360-production.up.railway.app/";
const videoUrl = "https://youtu.be/ZDqds6I9dXE?si=MHc1w8gtJ9eHtYLH";
const brochureUrl = "https://drive.google.com/file/d/1ZkGcGwoAY_tVNYhCbGZFJe48Mg3yg28r/view";
const whatsappNumber = "+56931354518";
const whatsappMessage = "Hola, quiero más información del proyecto";
const callToAction = "¡Hablemos ahora!";

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
        masterPlanUrl={masterPlanUrl}
        videoUrl={videoUrl}
        brochureUrl={brochureUrl}
        whatsappNumber={whatsappNumber}
        whatsappMessage={whatsappMessage}
        callToAction={callToAction}
      />
    </div>
  );
};

export default LosTordosPage;
