import React from 'react';
import LandingProyectosInmobiliarios from '../../common/LandingProyectosInmobiliarios/LandingProyectosInmobiliarios';
import videoSrc from '../../../Assets/video/lostordos-background.mp4'
import ramas from '../../../Assets/ramas-Boton-quiero-saber-más.png';
import logoSrc from '../../../Assets/lostordosblanco.svg'; //

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
        masterPlanUrl="https://lostordosmaster360-production.up.railway.app/"
        videoUrl="https://youtu.be/ZDqds6I9dXE?si=MHc1w8gtJ9eHtYLH"
        brochureUrl="https://drive.google.com/file/d/1ZkGcGwoAY_tVNYhCbGZFJe48Mg3yg28r/view"
        whatsappNumber="+56931354518"
        whatsappMessage="Hola, quiero más información del proyecto"
        callToAction="¡Hablemos ahora!"
      />
    </div>
  );
};

export default LosTordosPage;
