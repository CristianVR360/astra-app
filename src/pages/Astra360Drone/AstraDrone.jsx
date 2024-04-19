import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/experiencia-vr -white.png';
import backgroundImage from '../../Assets/img/backgroundsimg/Astra Drone fondo.jpg';

const Astra360Drone = () => {
  const title = 'ASTRA360';
  const description = 'SERVICIO DE FOTOGRAFÍA Y VÍDEO AÉREO';
  const bookButtonText = 'VER SERVICIOS'; //mensaje boton 1
  const bookDescription = '¡Vuela con Nosotros!'; // mensaje boton de wsp
  const consultationButtonText = 'CONTÁCTANOS'; //mensaje boton 2
  const subtitle = 'Fotografía y Vídeo Aéreo Profesional - Eleva tus Imágenes desde las Alturas';
  const telefono = '+56952532067';
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(132, 121, 150, 1)' // color de botones

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
        colorPrimarioTransparente={colorPrimario}
      />
    </div>
  );
};

export default Astra360Drone;