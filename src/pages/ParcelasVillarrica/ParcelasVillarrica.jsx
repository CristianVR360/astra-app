import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/logo-parcelas-villarrica.png';
import backgroundImage from '../../Assets/img/parcelasVillarrica/assets/background-Horizontal.jpg';


import video1 from '../../Assets/video/reels/01.mp4';
import video2 from '../../Assets/video/reels/02.mp4';
import video3 from '../../Assets/video/reels/03.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'

const CarruselLinks = [
  {
    url: 'https://example.com/link1',
    image: fija1,
    videoUrl: video1,
    title: 'Parcelas VOGELHAUS',
    description: 'Proyecto exclusivo en Villarrica, con acceso a Agua y luz',
  },
  {
    url: 'https://example.com/link2',
    image: fija2,
    videoUrl: video2,
    title: 'VOGELHAUS ETAPA 2',
    description: 'PRÓXIMAMENTE EN VILLARRICA.',
  },
  {
    url: 'https://example.com/link3',
    image: fija3,
    videoUrl: video3,
    title: 'Proyecto de casa PREMIUM, 140 m2, 4 DORMITORIOS 2 BAÑOS',
    description: 'VogelHaus, como hemos denominado a este proyecto es una casa de alto estandar, con amplias habitaciones, cocina y terraza y sobre todo diseño.',
  },
];


const ParcelasVillarrica = () => {
  const title = 'PARCELAS VILLARRICA';
  const description = 'Invierte en naturaleza, tranquilidad y bienestar';
  const bookButtonText = 'VER PROYECTOS';
  const bookDescription = 'Consulta por nuestras promociones ';
  const consultationButtonText = 'CONTÁCTANOS';
  const subtitle = '¿Quieres conocer nuestras ofertas especiales? ';
  const telefono = '+56996858145';
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ="rgb(270, 73, 42)";
  const colorPrimarioTransparente="rgba(270, 73, 42,0.8)";
  const colorSecundario="white";
  const colorTerciario ="";
  const btnTittle="Proyectos";

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
        
        colorPrimarioTransparente={colorPrimarioTransparente}
        colorSecundario={colorSecundario}
        colorTerciario={colorTerciario}
        btnTittle={btnTittle}
      />
    </div>
  );
};

export default ParcelasVillarrica;