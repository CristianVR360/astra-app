import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/experiencia-vr -white.png';
import backgroundImage from '../../Assets/img/backgroundsimg/karolfarias.jpg';
import video1 from '../../Assets/video/reels/astradrone/Astra360drone1.mp4'
import video2 from '../../Assets/video/reels/astradrone/Astra360drone2.mp4';
import video3 from '../../Assets/video/reels/astradrone/Astra360drone3.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'

const subtitles = [
  "Atención personalizada donde más lo necesitas: tu hogar.",
  "Profesional de la salud a tu puerta, cuando lo necesites.",
  "Comodidad y cuidado: mi promesa en cada visita domiciliaria.",
  "Tu bienestar, mi prioridad: servicios de enfermería en casa."
];

const CarruselLinks = [
  {
    url: 'https://example.com/link1',
    image: "",
    videoUrl: video1,
    title: 'Cuidados de enfermería básicos y especializados.',
    subtitle:'',
    description: 'Amplia gama de servicios de enfermería, desde procedimientos básicos como control de signos vitales y administración de tratamientos, hasta cuidados avanzados como instalación de sondas y curaciones complejas. Enfermera altamente capacitada para atención personalizada y de calidad.',
  },
  {
    url: 'https://example.com/link2',
    image: "",
    videoUrl: video2,
    title: 'Atención integral para el adulto mayor.',
    subtitle:'',
    description: 'Mi Atención de enfermería está diseñada para satisfacer las necesidades específicas del adulto mayor. Realizando evaluaciones preventivas, cognitivas y de salud mental, además de brindar cuidados especializados en final de vida y manejo del dolor. Promoviendo la independencia y bienestar del paciente.',
  },
  {
    url: 'https://example.com/link3',
    image: "",
    videoUrl: video3,
    title: 'Apoyo especializado en salud mental.',
    subtitle:'',
    description: 'Enfermera capacitada para brindar atención a personas con enfermedades psiquiátricas o problemas de salud mental. Primeros auxilios psicológicos, psicoeducación, control de tratamiento psicofarmacológico y asesoría en problemáticas psicosociales. El objetivo es garantizar la continuidad de los cuidados y promover la estabilidad emocional del pacientes',
  },
];


const KarolFarias = () => {
  const title = 'KAROL FARÍAS'; //nombre de la marca
  const description = 'Atención de Enfermería a Domicilio: Cuidado Profesional en Tu Hogar';//definicion principal del servicio
  const bookButtonText = 'VER SERVICIOS';//mensaje boton 1
  const bookDescription = '';// ausente por ahora
  const consultationButtonText = 'CONTÁCTANOS';//mensaje boton 2
  const subtitle = "¡Atención Domiciliaria Profesional! Contacta aquí";//mge btn wsp
  const telefono = '+569 5253 2067'; //fono de footer
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(111, 164, 229, 1)' // color de botones 
  const colorPrimarioTransparente="rgba(126, 203, 174,0.8)"; //fondo de los servicios
  const colorSecundario="white"; //color letras
  const colorTerciario ="rgba(111, 164, 229, 1)"; //color boton inactivo
  const colorCuaternario ="rgba(126, 203, 174, 1)";//color de boton activo
  const btnTittle="Servicios";
  const footerAfterStyles = {
  background: "linear-gradient(to bottom, rgba(111, 164, 229, 0) 10%, rgba(111, 164, 229, 0.1) 65%, rgba(111, 164, 229, 0.4) 70%, rgba(111, 164, 229, 1) 85%)"
  };
  const layouTypeDesk = "";


  //Paletas de colores 
        //Azul Claro: rgba(111, 164, 229, 1)
        //Blanco: rgba(255, 255, 255, 1)
        //Verde Menta: rgba(126, 203, 174, 1)
        //Gris Claro: rgba(204, 204, 204, 1)
        //Naranja Claro: rgba(255, 179, 102, 1)

  return (
    <div className="karol-farias">
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

export default KarolFarias;