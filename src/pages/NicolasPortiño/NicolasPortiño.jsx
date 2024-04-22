import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/WhatsApp Image 2024-04-15 at 6.35.04 PM.jpeg';
import backgroundImage from '../../Assets/img/backgroundsimg/NicoPortiño.jpg';


const CarruselLinks = [
  {
    url: 'https://example.com/link1', //import video1 from '../../Assets/video/'''
    image: '',
    videoUrl: '',
    title: 'Parcelas VOGELHAUS',
    description: 'Proyecto exclusivo en Villarrica, con acceso a Agua y luz',
  },
  {
    url: 'https://example.com/link2',
    image: '',
    videoUrl: '',
    title: 'VOGELHAUS ETAPA 2',
    description: 'PRÓXIMAMENTE EN VILLARRICA.',
  },
  {
    url: 'https://example.com/link3',
    image: '',
    videoUrl: '',
    title: 'Proyecto de casa PREMIUM, 140 m2, 4 DORMITORIOS 2 BAÑOS',
    description: 'VogelHaus, como hemos denominado a este proyecto es una casa de alto estandar, con amplias habitaciones, cocina y terraza y sobre todo diseño.',
  },
];

const NICOLASPORTIÑO = () => {
    const title = 'NICOLÁS PORTIÑO';
    const description = 'ABOGADO ESPECIALIZADO EN PROTEGER TUS DERECHOS LEGALES';
    const bookButtonText = 'VER SERVICIOS'; //mensaje boton 1
    const bookDescription = '¡Vuela con Nosotros!'; // mensaje boton de wsp
    const consultationButtonText = 'CONTÁCTANOS'; //mensaje boton 2
    const subtitle = 'Soluciones Legales Confiables y Eficaces para tus Necesidades';
    const telefono = '+56952532067';
    const instagramLink = '#';
    const facebookLink = '#';
    const gpsLink ="";
    const urlMenu01 = "";
    const urlMenu02 = "";
    const urlMenu03 ="";
    const colorPrimario ='rgba(132, 121, 150, 1)' // color de botones

  return (
    <div className="parcelas-villarrica">
      <TarjetasQr
        logo={logo}
        backgroundImage={backgroundImage}
        title={title}
        description={description}
        bookButtonText={bookButtonText}
        bookDescription={bookDescription}
        consultationButtonText={consultationButtonText}
        subtitle={subtitle}
        telefono={telefono}
        instagramLink={instagramLink}
        facebookLink={facebookLink}
        urlMenu01={urlMenu01}
        urlMenu02={urlMenu02}
        urlMenu03={urlMenu03}
        gpsLink={gpsLink}
        colorPrimario={colorPrimario} 
        CarruselLinks={CarruselLinks}
      />
    </div>
  );
};

export default NICOLASPORTIÑO;