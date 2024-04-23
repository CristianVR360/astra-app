import React from 'react';
import LandingProyectosInmobiliarios from '../../common/LandingProyectosInmobiliarios/LandingProyectosInmobiliarios';
import videoSrc from '../../../Assets/video/vogel-haus-bkg.mp4';
import ramas from '../../../Assets/ramas-Boton-quiero-saber-más.png';
import logoSrc from '../../../Assets/img/logos/parcelas-Vogel-Haus-logo.png'; 

// Importar los recursos necesarios (videoSrc, logoSrc, ramas, etc.)

const subtitles = [
  "Tu nueva vida en el sur de Chile, Villarrica, Araucanía Lacustre",
  "Parcelas de 5.000 m², con luz, agua y rol incluido",
  "Parcelas planas, limpias y listas para comenzar a construir",
  "Cerca de la ciudad y con fácil acceso al proyecto a través de la Ruta Sexta Faja"
];

const VogelHausPage = () => {
  return (
    <div>
      <LandingProyectosInmobiliarios
        videoSrc={videoSrc}
        logoSrc={logoSrc}
        ramas={ramas}
        subtitles={subtitles}
        masterPlanUrl="https://masterplan360.s3.sa-east-1.amazonaws.com/parcelasvillarrica/vogelHaus/output/index.html"
        videoUrl=""
        instagramUrl="https://www.instagram.com/parcelas.astra360/"
        ubicacionUrl="https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb"
        whatsappNumber="+56976858145"
        whatsappMessage="Hola, quiero más información del proyecto"
        callToAction="Dejanos tu mensaje!"
        brochureUrl="https://docs.google.com/presentation/d/1hW3OM8p9uP-j4lDwDXOvjn8yIGSW8zlf/preview" 
        nombreProyecto="Parcelas Villarrica"
        colorPrimario="rgb(0, 108, 109)"
        colorPrimarioTransparente="rgba(0, 108, 109, 0.7)"
        colorSecundario="white"
      />
    </div>
  );
};

export default VogelHausPage;
