import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/experiencia-vr -white.png';
import backgroundImage from '../../Assets/img/backgroundsimg/TasacionEMDO.jpg';
import video1 from '../../Assets/video/reels/kairos/kairos1.mp4'
import video2 from '../../Assets/video/reels/kairos/kairos2.mp4';
import video3 from '../../Assets/video/reels/kairos/kairos3.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'

const CarruselLinks = [
  {
    url: 'https://example.com/link1',
    image: fija1,
    videoUrl: video1,
    title: '¡TASACIÓN ONLINE RÁPIDA Y PRECISA PARA TU PROPIEDAD! DESCUBRE NUESTRO SERVICIO DE TASACIÓN EN LÍNEA',
    subtitle:'',
    description: 'Nuestra plataforma de tasación online te ofrece una solución rápida y conveniente para obtener una valuación precisa de tu propiedad sin salir de casa. Completa nuestro formulario en línea y proporciona los detalles de tu propiedad. Nuestros expertos en tasación utilizarán esta información para realizar un análisis detallado y generar un informe de tasación en poco tiempo. Con nuestro servicio de tasación online, obtén una valuación confiable sin la necesidad de una visita presencial.',
  },
  {
    url: 'https://example.com/link2',
    image: fija2,
    videoUrl: video2,
    title: 'VOGELHAUS ETAPA 2',
    subtitle:'',
    description: 'PRÓXIMAMENTE EN VILLARRICA.',
  },
  {
    url: 'https://example.com/link3',
    image: fija3,
    videoUrl: video3,
    title: 'Proyecto de casa PREMIUM, 140 m2, 4 DORMITORIOS 2 BAÑOS',
    subtitle:'',
    description: 'VogelHaus, como hemos denominado a este proyecto es una casa de alto estandar, con amplias habitaciones, cocina y terraza y sobre todo diseño.',
  },
];


const Kairos = () => {
  const title = 'KAIROS';
  const description = '¡Juegos didácticos: donde la diversión y el aprendizaje se encuentran';
  const bookButtonText = 'VER SERVICIOS'; //mensaje boton 1
  const bookDescription = 'Consulta por nuestras promociones'; // mensaje boton de wsp
  const consultationButtonText = 'CONTÁCTANOS'; //mensaje boton 2
  const subtitle = '¿Buscas aventura educativa? ¡Comienza aquí!';
  const telefono = '+56952532067';
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(132, 121, 150, 1)' // color de botones
  const colorPrimarioTransparente="rgba(270, 73, 42,0.8)";
  const colorSecundario="white";
  const colorTerciario ="";
  const btnTittle="Productos";

  return (
    <div className="kairos">
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
        btnTittle={btnTittle}/>
    </div>
  );
};

export default Kairos;