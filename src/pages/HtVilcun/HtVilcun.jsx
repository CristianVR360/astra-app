import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

//import logo from '../../Assets/img/logos/experiencia-vr -white.png';
import backgroundImage from '../../Assets/img/backgroundsimg/tecnoaraucania.jpg';
import video1 from '../../Assets/video/reels/htvilcun/htvilcún1.mp4'
import video2 from '../../Assets/video/reels/htvilcun/htvilcún2.mp4';
import video3 from '../../Assets/video/reels/htvilcun/htvilcún3.mp4';
//import fija1 from '../../Assets/video/reels/fija01.jpg'
//import fija2 from '../../Assets/video/reels/fija02.jpg'
//import fija3 from '../../Assets/video/reels/fija03.jpg'


const subtitles = [
  "Soluciones tech a tu alcance | HTVilcun.",
  "Expertos en reparación de equipos | HTVilcun.",
  "Servicio rápido y confiable | HTVilcun.",
  "Tu dispositivo en las mejores manos | HTVilcun."
];

const CarruselLinks = [
  {
    url: 'https://example.com/56950830673',
    image: "",
    videoUrl: video1,
    title: 'Reparación de Computadores y Portátiles | HTVilcun.',
    subtitle:'',
    description: 'Nuestro equipo de expertos en HTVilcun ofrece servicios de reparación de computadores y portátiles de todas las marcas. Ya sea que necesites reemplazar una pantalla rota, solucionar problemas de hardware o realizar un mantenimiento general, estamos aquí para ayudarte. Con herramientas de diagnóstico avanzadas y repuestos de calidad, garantizamos soluciones rápidas y duraderas para que puedas volver a disfrutar de tu dispositivo sin problemas.',
  },
  {
    url: 'https://example.com/link2',
    image: "",
    videoUrl: video2,
    title: 'Mantenimiento Preventivo de Equipos Electrónicos | HTVilcun',
    subtitle:'',
    description: 'La mejor manera de evitar costosas reparaciones es con un mantenimiento regular. En HTVilcun, ofrecemos servicios de mantenimiento preventivo para computadores, portátiles, celulares y tablets. Nuestros técnicos realizarán una limpieza profunda de tu dispositivo, actualizarán el software, optimizarán el rendimiento y harán una copia de seguridad de tus datos importantes. Con nuestro servicio de mantenimiento preventivo, puedes prolongar la vida útil de tus equipos electrónicos y ahorrar dinero a largo plazo.',
  },
  {
    url: 'https://example.com/link3',
    image: "",
    videoUrl: video3,
    title: 'Servicio Técnico para Celulares y Tablets | HTVilcun.',
    subtitle:'',
    description: 'En HTVilcun, entendemos lo importante que es tu teléfono móvil o tablet para ti. Por eso, ofrecemos un servicio técnico especializado para todo tipo de dispositivos móviles. Nuestros técnicos altamente capacitados pueden solucionar problemas comunes como pantallas dañadas, baterías defectuosas, problemas de software y más. Utilizamos solo repuestos originales y te ofrecemos una garantía en todas las reparaciones para tu total tranquilidad.',
  },
];


const Kairos = () => {
  const title = 'HT VILCÚN'; //nombre de la marca
  const description = 'Servicio Técnico Especializado en Computadores y Celulares | HTVilcun.';//definicion principal del servicio
  const bookButtonText = 'VER SERVICIOS';//mensaje boton 1
  const bookDescription = '';// ausente por ahora
  const consultationButtonText = 'CONTÁCTANOS';//mensaje boton 2
  const subtitle = "¡¡Oferta Especial! 🚀📱💻!";//mge btn wsp
  const telefono = '+56 9 7660 1734'; //fono de footer
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(0, 179, 152, 1)' // color de botones 
  const colorPrimarioTransparente="rgba(4, 50, 110, 0.8)"; //fondo de los servicios
  const colorSecundario="white"; //color letras
  const colorTerciario ="rgba(0, 179, 152, 1)"; //color boton inactivo
  const colorCuaternario ="rgba(4, 50, 110, 1)";//color de boton activo
  const btnTittle="Servicios";
  const footerAfterStyles = {
  background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 10%, rgba(0, 179, 152, 0.1) 65%, rgba(0, 179, 152, 0.4) 70%, rgba(0, 179, 152, 1) 85%)"
  };
  //const layouTypeDesk = "";


  //Paletas de colores 
      //Verde azulado: rgba(0, 179, 152, 1)
      //Azul marino: rgba(4, 50, 110, 1)
      //Naranja: rgba(242, 100, 25, 1)
      //Gris cálido: rgba(144, 144, 144, 1)
      //Blanco: rgba(255, 255, 255, 1)

  return (
    <div className="kairos">
      <TarjetasQr
        //logo={logo}
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