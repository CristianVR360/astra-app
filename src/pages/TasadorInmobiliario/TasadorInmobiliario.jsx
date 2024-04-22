import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/logoemdo.png';
import backgroundImage from '../../Assets/img/backgroundsimg/TasacionEMDO.jpg';
import video1 from '../../Assets/video/reels/emdotasacion/emdo1.mp4'
import video2 from '../../Assets/video/reels/emdotasacion/emdo2.mp4';
import video3 from '../../Assets/video/reels/emdotasacion/emdo3.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'

const subtitles = [
  "Precisión en Valoración Inmobiliaria",
  "Asesoramiento Profesional en Tasación",
  "Tasación Online: Valoración Inmediata y Precisa para tu Propiedad",
  "Encuentra tu Hogar Ideal con Nuestro Servicio de Corretaje"
];


const CarruselLinks = [
  {
    url: 'https://wa.me/56953772483',// numero de boton de wsp
    image: "",
    videoUrl: video1,
    title: 'Tasación Presencial: Valoración Detallada a tu Propiedad',
    subtitle:'',
    description: 'Obtén una valoración detallada de tu propiedad con nuestro servicio de tasación presencial. Nuestros expertos realizan evaluaciones precisas y detalladas, incluyendo fotografías 360. Toma decisiones informadas sobre tu propiedad con nuestra ayuda.',
  },
  {
    url: 'https://example.com/link2',
    image: "",
    videoUrl: video2,
    title: 'Tasación Online: Rápida y Precisa para tu Propiedad',
    subtitle:'',
    description: 'Nuestra plataforma de tasación online ofrece una solución rápida y precisa para valorar tu propiedad desde casa. Completa nuestro formulario en línea, proporciona los detalles y obtén un informe detallado en poco tiempo. ¡Obtén una valuación confiable sin necesidad de visitas presenciales.',
  },
  {
    url: 'https://example.com/link3',
    image: "",
    videoUrl: video3,
    title: 'Servicio Integral: Tasación, Fotografía 360 y Corretaje de Propiedades',
    subtitle:'',
    description: 'Maximiza el valor de tu propiedad con nuestro servicio integral. Desde la valoración detallada hasta el corretaje de propiedades, ofrecemos una experiencia confiable y completa. Obtén una evaluación precisa, atrae a compradores potenciales y toma decisiones informadas sobre tu inversión inmobiliaria.',
  },
];


const TasadorInmobiliario = () => {
  const title = 'TASACIÓN INMOBILIARIA';
  const description = 'TASACIÓN INMOBILIARIA INTEGRAL';
  const bookButtonText = 'VER SERVICIOS'; //mensaje boton 1
  const bookDescription = '';
  const consultationButtonText = 'CONTÁCTANOS'; //mensaje boton 2
  const subtitle = '¡Asesoramiento Inmobiliario! Contáctanos Ahora';// mensaje accion wsp
  const telefono = '+56953772483';
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(220, 96, 5, 1)' // color de botones
  const colorPrimarioTransparente="rgba(220, 96, 5, 0.8)";
  const colorSecundario="white";
  const colorTerciario ="rgba(54, 53, 53, 1)"; //color boton inactivo
  const colorCuaternario ="rgba(254, 96, 5, 1)";
  const btnTittle="Servicios";
  const footerAfterStyles = {
  background: "linear-gradient(to bottom, rgba(254, 96, 5, 0)10%, rgba(254, 96, 5, 0.1) 65%, rgba(254, 96, 5, 0.4) 70%, rgba(254, 96, 5, 1) 85%)"
  };
  const layouTypeDesk = "";


  return (
    <div className="taasador-inmobiliario">
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
        colorCuaternario ={colorCuaternario}
        btnTittle={btnTittle}
        footerAfterStyles={footerAfterStyles}        
        subtitles={subtitles}
        
        />

    </div>
  );
};

export default TasadorInmobiliario;