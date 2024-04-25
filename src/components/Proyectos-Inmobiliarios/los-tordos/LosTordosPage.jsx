import React from 'react';
import LandingProyectosInmobiliarios from '../../common/LandingProyectosInmobiliarios/LandingProyectosInmobiliarios';
import videoSrc from '../../../Assets/video/lostordos-background.mp4';
import ramas from '../../../Assets/ramas-Boton-quiero-saber-más.png';
import logoSrc from '../../../Assets/img/logos/lostordosblanco.svg';

const subtitles = [
  "Tu nueva vida en el sur de Chile, Villarrica, Araucanía Lacustre",
  "Parcelas de 5.000 m², con luz, agua y rol incluido",
  "Parcelas planas, limpias y listas para comenzar a construir",
  "Cerca de la ciudad y con fácil acceso al proyecto a través de la Ruta s63"
];

const LosTordosPage = () => {
  const carruselLinks = [
    // Aquí agregarás los enlaces del carrusel en el futuro
    // Ejemplo:
    // {
    //   url: 'https://example.com/link1',
    //   image: '',
    //   videoUrl: 'ruta/al/video1.mp4',
    //   title: 'Título del enlace 1',
    //   subtitle: 'Subtítulo del enlace 1',
    //   description: 'Descripción del enlace 1',
    // },
    // {
    //   url: 'https://example.com/link2',
    //   image: '',
    //   videoUrl: 'ruta/al/video2.mp4',
    //   title: 'Título del enlace 2',
    //   subtitle: 'Subtítulo del enlace 2',
    //   description: 'Descripción del enlace 2',
    // },
    // ...
  ];

  return (
    <div>
      <LandingProyectosInmobiliarios
        videoSrc={videoSrc}
        logoSrc={logoSrc}
        ramas={ramas}
        subtitles={subtitles}
        masterPlanUrl="https://lostordosmaster360-production.up.railway.app/"
        videoUrl="https://youtu.be/ZDqds6I9dXE?si=MHc1w8gtJ9eHtYLH"
        instagramUrl="https://www.instagram.com/parcelas.astra360/"
        ubicacionUrl="https://maps.app.goo.gl/h5yygWKQeMn9QrfJA"
        whatsappNumber="+56931354518"
        whatsappMessage="Hola, quiero más información del proyecto"
        callToAction="¡Hablemos ahora!"
        brochureUrl="https://drive.google.com/file/d/1dIm9r3wEEHhDwBpnPi0Hssiyy1ErzFHR//preview"
        nombreProyecto="Parcelas Vogel Haus"
        colorPrimario="rgb(0, 108, 109)"
        colorPrimarioTransparente="rgba(0, 108, 109, 0.7)"
        colorSecundario="white"
        carruselLinks={carruselLinks}
      />
    </div>
  );
};

export default LosTordosPage;