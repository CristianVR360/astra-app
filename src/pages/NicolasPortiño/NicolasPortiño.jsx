import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/experiencia-vr -white.png';
import backgroundImage from '../../Assets/img/backgroundsimg/NicoPortiño.jpg';
import video1 from '../../Assets/video/reels/astradrone/Astra360drone1.mp4'
import video2 from '../../Assets/video/reels/astradrone/Astra360drone2.mp4';
import video3 from '../../Assets/video/reels/astradrone/Astra360drone3.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'

const subtitles = [
  "Defensa Penal Efectiva | Protegiendo tus Derechos.",
  "Soluciones en Derecho de Familia | Experiencia y Compromiso.",
  "Asesoría Legal Civil | Contratos, Propiedad y Litigios.",
  "Abogado Dedicado | Ética, Experiencia y Resultados."
];

const CarruselLinks = [
  {
    url: 'https://example.com/56950830673',
    image: "",
    videoUrl: video1,
    title: 'Derecho Penal.',
    subtitle:'',
    description: 'Defensa Sólida y Personalizada Abogado especializado en Derecho Penal. Amplia experiencia protegiendo derechos y libertades. Asesoría legal preventiva y representación en juicio. Defensa estratégica adaptada a cada cliente.',
  },
  {
    url: 'https://example.com/link2',
    image: "",
    videoUrl: video2,
    title: 'Derecho Civil.',
    subtitle:'',
    description: 'Asesoría Integral en Contratos y Litigios Asesoría legal experta en Derecho Civil. Soluciones efectivas en contratos, obligaciones, propiedad y litigios. Redacción, revisión y resolución de disputas. Protección de intereses en transacciones.',
  },
  {
    url: 'https://example.com/link3',
    image: "",
    videoUrl: video3,
    title: 'Derecho de Familia.',
    subtitle:'',
    description: 'Soluciones Efectivas y Equitativas Abogado de familia comprometido con soluciones sensibles y eficaces. Experiencia en divorcios, custodia, pensiones alimenticias y régimen de visitas. Prioriza el bienestar del cliente y su entorno.',
  },
];


const NicolasPortiño = () => {
  const title = 'NICOLÁS PORTIÑO'; //nombre de la marca
  const description = 'Asesoría Legal Integral: Experiencia, Ética y Compromiso a tu Servicio.';//definicion principal del servicio
  const bookButtonText = 'VER SERVICIOS';//mensaje boton 1
  const bookDescription = '';// ausente por ahora
  const consultationButtonText = 'CONTÁCTANOS';//mensaje boton 2
  const subtitle = "¡Contáctame para una Asesoría Legal Personalizada!";//mge btn wsp
  const telefono = '+56 9 5083 0673'; //fono de footer
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(40, 75, 99, 1)' // color de botones 
  const colorPrimarioTransparente="rgba(255, 204, 0,0.8)"; //fondo de los servicios
  const colorSecundario="white"; //color letras
  const colorTerciario ="rgba(40, 75, 99, 1)"; //color boton inactivo
  const colorCuaternario ="rgba(255, 204, 0, 1)";//color de boton activo
  const btnTittle="Servicios";
  const footerAfterStyles = {
  background: "linear-gradient(to bottom, rgba(40, 75, 99, 0)10%, rgba(40, 75, 99, 0.4) 50%, rgba(40, 75, 99, 0.8) 70%, rgba(40, 75, 99, 1) 85%)"
  };
  const layouTypeDesk = "";


  //Paletas de colores 
        //rgba(40, 75, 99, 1) - Azul marino oscuro
        //rgba(255, 204, 0, 1) - Amarillo dorado
        //rgba(46, 134, 193, 1) - Azul cielo
        //rgba(231, 76, 60, 1) - Rojo cálido
        //rgba(245, 245, 245, 1) - Blanco grisáceo

  return (
    <div className="nicolas-portiño">
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

export default NicolasPortiño;