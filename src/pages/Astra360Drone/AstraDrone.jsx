import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/experiencia-vr -white.png';
import backgroundImage from '../../Assets/img/backgroundsimg/Drone fondo.jpg';
import video1 from '../../Assets/video/reels/astradrone/Astra360drone1.mp4'
import video2 from '../../Assets/video/reels/astradrone/Astra360drone2.mp4';
import video3 from '../../Assets/video/reels/astradrone/Astra360drone3.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'

const subtitles = [
  "Explora Nuevas Perspectivas con Vuelos Aéreos",
  "Imágenes y Videos Aéreos de Alta Calidad",
  "Tecnología Avanzada para Capturas Precisas",
  "Servicio Profesional para Proyectos Creativos"
];


const CarruselLinks = [
  {
    url: 'https://example.com/link1',
    image: "",
    videoUrl: video1,
    title: 'Fotografía 360 con Drones: Captura Perspectivas Inigualables',
    subtitle:'',
    description: 'Descubre nuestro servicio de fotografía 360 con drones, donde cada imagen cuenta una historia desde todos los ángulos. Con tecnología de vanguardia, capturamos vistas panorámicas impresionantes para destacar tu propiedad o proyecto. ¡Explora la innovación y la excelencia en cada imagen con nuestro equipo experto',
  },
  {
    url: 'https://example.com/link2',
    image: "",
    videoUrl: video2,
    title: 'Producción de Videos Aéreos con Drones: Experiencia Cinematográfica en el Cielo',
    subtitle:'',
    description: 'Experimenta la magia de nuestros videos aéreos con drones. Con tecnología avanzada, damos vida a tu proyecto desde una perspectiva cinematográfica única. Desde paisajes naturales hasta escenas urbanas, cada video cuenta una historia cautivadora. Confía en nosotros para llevar tu narrativa visual al siguiente nivel.',
  },
  {
    url: 'https://example.com/link3',
    image: "",
    videoUrl: video3,
    title: 'Master Plan Interactivo 360: Visualiza tu Proyecto de Parcelas en Detalle',
    subtitle:'',
    description: 'Descubre nuestro master plan interactivo 360 para proyectos de parcelas. Visualiza tu proyecto en detalle desde todos los ángulos, toma decisiones informadas y optimiza tu planificación de manera efectiva. Haz realidad tu visión con nuestra herramienta avanzada.',
  },
];


const Astra360Drone = () => {
  const title = 'ASTRA360';
  const description = 'SERVICIO DE FOTOGRAFÍA Y VÍDEO AÉREO';
  const bookButtonText = 'VER SERVICIOS'; //mensaje boton 1
  const bookDescription = '¡Vuela con Nosotros!'; // mensaje boton de wsp
  const consultationButtonText = 'CONTÁCTANOS'; //mensaje boton 2
  const subtitle = '¡Reserva tu Vuelo Aéreo Ahora!';//mge btn wsp
  const telefono = '+56952532067';
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(124, 252, 0, 1)' // color de botones 
  const colorPrimarioTransparente="rgba(51, 102, 153, 1)"; //fondo de los servicios
  const colorSecundario="white"; //color letras
  const colorTerciario ="rgba(255, 204, 0, 1)"; //color boton inactivo
  const colorCuaternario ="rgba(51, 102, 153, 1)";//color de boton activo
  const btnTittle="Servicios";
  const footerAfterStyles = {
  background: "linear-gradient(to bottom, rgba(254, 96, 5, 0) 10%, rgba(254, 96, 5, 0) 65%, rgba(254, 96, 5, 0.1) 70%, rgba(51, 102, 153, 1) 85%)"
  };
  const layouTypeDesk = "";



  return (
    <div className="astra360drone">
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

export default Astra360Drone;