import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/experiencia-vr -white.png';
import backgroundImage from '../../Assets/img/backgroundsimg/tecnoaraucania.jpg';
import video1 from '../../Assets/video/reels/Tecnoaraucania/tecnoaraucania1.mp4'
import video2 from '../../Assets/video/reels/Tecnoaraucania/tecnoaraucania 2.mp4';
import video3 from '../../Assets/video/reels/Tecnoaraucania/tecnoaraucania 3.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'


const subtitles = [
  "Soluciones Informáticas Rápidas y Confiables | TecnoAraucanía.",
  "Experto en Reparación de PCs y Notebooks en Temuco | TecnoAraucanía.",
  "Servicio Técnico Especializado a la Puerta de tu Hogar | TecnoAraucanía.",
  "Mantenimiento y Optimización de Computadores en la Araucanía | TecnoAraucanía."
];

const CarruselLinks = [
  {
    url: 'https://example.com/56950830673',
    image: "",
    videoUrl: video1,
    title: 'Instalación y Configuración de Software y Hardware en la Araucanía.',
    subtitle:'',
    description: '¿Necesitas ayuda para instalar o configurar nuevos programas o dispositivos en tu computador? En TecnoAraucanía, nuestros técnicos especializados pueden ayudarte con la instalación y configuración de software y hardware en la comodidad de tu hogar u oficina en la región de la Araucanía. Nos aseguramos de que todo funcione perfectamente para que puedas aprovechar al máximo tu equipo.',
  },
  {
    url: 'https://example.com/link2',
    image: "",
    videoUrl: video2,
    title: 'Reparación de Computadores y Notebooks a Domicilio en Temuco.',
    subtitle:'',
    description: 'Nuestro equipo de expertos en TecnoAraucanía ofrece servicios de reparación de computadores y notebooks a domicilio en Temuco y alrededores. Diagnosticamos y solucionamos problemas de hardware y software, asegurando que tu equipo vuelva a funcionar de manera óptima sin que tengas que salir de casa.',
  },
  {
    url: 'https://example.com/link3',
    image: "",
    videoUrl: video3,
    title: 'Mantenimiento Preventivo y Optimización de PCs y Notebooks en Temuco.',
    subtitle:'',
    description: 'En TecnoAraucanía, ofrecemos servicios de mantenimiento preventivo y optimización de computadores y notebooks a domicilio en Temuco. Nuestros técnicos realizarán una limpieza profunda de tu equipo, actualizarán el sistema operativo y los programas, y optimizarán el rendimiento para evitar problemas futuros y extender la vida útil de tu PC o notebook.',
  },
];


const Kairos = () => {
  const title = 'TECNOARAUCANÍA'; //nombre de la marca
  const description = 'Servicio Técnico de Computadores a Domicilio en Temuco | TecnoAraucanía.';//definicion principal del servicio
  const bookButtonText = 'VER SERVICIOS';//mensaje boton 1
  const bookDescription = '';// ausente por ahora
  const consultationButtonText = 'CONTÁCTANOS';//mensaje boton 2
  const subtitle = "¡Contáctanos por WhatsApp para Solucionar tus Problemas Informáticos Hoy!";//mge btn wsp
  const telefono = '+56 9 7660 1734'; //fono de footer
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(0, 62, 81, 1)' // color de botones 
  const colorPrimarioTransparente="rgba(0, 164, 215, 0.8)"; //fondo de los servicios
  const colorSecundario="white"; //color letras
  const colorTerciario ="rgba(0, 62, 81, 1)"; //color boton inactivo
  const colorCuaternario ="rgba(0, 164, 215, 1)";//color de boton activo
  const btnTittle="Servicios";
  const footerAfterStyles = {
  background: "linear-gradient(to bottom, rgba(0, 62, 81, 0) 10%, rgba(0, 62, 81, 0.1) 65%, rgba(0, 62, 81, 0.4) 70%, rgba(0, 62, 81, 1) 85%)"
  };
  const layouTypeDesk = "";


  //Paletas de colores 
      //Azul oscuro: rgba(0, 62, 81, 1)
      //Celeste: rgba(0, 164, 215, 1)
      //Gris oscuro: rgba(88, 89, 91, 1)
      //Gris claro: rgba(211, 211, 211, 1)
      //Blanco: rgba(255, 255, 255, 1)

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
        colorCuaternario={colorCuaternario}
        btnTittle={btnTittle}
        footerAfterStyles={footerAfterStyles}        
        subtitles={subtitles}

      />
    </div>
  );
};

export default Kairos;