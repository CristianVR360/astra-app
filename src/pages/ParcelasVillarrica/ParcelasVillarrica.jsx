import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/logo-parcelas-villarrica.png';
import backgroundImage from '../../Assets/img/parcelasVillarrica/assets/background-Horizontal.jpg';
import video1 from '../../Assets/video/reels/01.mp4';
import video2 from '../../Assets/video/reels/parcelaVillarrica01.mp4';
import video3 from '../../Assets/video/reels/03.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/parcelavillarrica01.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'

const subtitles = [
  "Tu nueva vida en el sur de Chile",
  "Parcelas de 5.000 m², con luz, agua y rol incluido",
  "Parcelas planas, limpias y listas para comenzar a construir",
  "Cerca de la ciudad y con fácil acceso"
];

const CarruselLinks = [
  {
    url: 'https://www.astra360.cl/vogelhaus',
    image: fija1,
    videoUrl: video1,
    title: 'Parcelas VOGELHAUS',
    subtitle:'',
    description: ' Luz y agua a los pies de tu parcela, Portón de acceso, amplios caminos, red de grifos de incendio y cerco incluido. Todo lo que necesitas está aquí',
  },
  {
    url: 'https://wa.me/56976858145',
    image: fija2,
    videoUrl: video2,
    title: 'Hermoso Terreno en Sexta Faja,',
    subtitle:'',
    description: 'UBICADOS ESTRATÉGICAMENTE entre el aeropuerto de Temuco, y Villarrica, cerca de Lagos, cordillera, volcanes e incluso mar en la costa Valdiviana.',
  },
  {
    url: 'https://wa.me/56976858145',
    image: fija3,
    videoUrl: video3,
    title: 'Proyecto de casa PREMIUM, VogelHaus',
    subtitle:'',
    description: 'Eeste proyecto es una casa de alto estandar, con amplias habitaciones, cocina y terraza. Diseño y estilo de vida.',
  },
];


const ParcelasVillarrica = () => {
  const title = 'PARCELAS VILLARRICA';
  const description = '';
  const bookButtonText = 'VER PROYECTOS';
  const bookDescription = 'Consulta por nuestras promociones ';
  const consultationButtonText = 'CONTÁCTANOS';
  const subtitle = 'Ofertas exclusivas 🔥 ';
  const telefono = '+56976858145';
  const instagramLink = 'https://www.instagram.com/parcelas.vogelhaus/';
  const facebookLink = 'https://web.facebook.com/parcelasvillarrica';
  const gpsLink ="https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ="rgb(60, 54, 37)";
  const colorPrimarioTransparente=" rgba(0, 85, 90, 0.8)";
  const colorSecundario="white";
  const colorTerciario ="rgb(210,73,42)";
  const colorCuaternario ="rgb(255,121,0)";
  const btnTittle="Proyectos";
  const footerAfterStyles = {
  background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) 50%, rgba(0, 85, 90, 0.8) 70%, rgba(0, 85, 90, 1) 85%)"
  };

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
        carruselLinks={CarruselLinks}
        colorPrimario={colorPrimario}
        colorPrimarioTransparente={colorPrimarioTransparente}
        colorSecundario={colorSecundario}
        colorTerciario={colorTerciario}
        colorCuaternario={colorCuaternario}
        btnTittle={btnTittle}
        footerAfterStyles={footerAfterStyles}
        subtitles={subtitles}
      />
    </div>
  );
};

export default ParcelasVillarrica;