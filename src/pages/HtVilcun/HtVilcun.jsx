import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/experiencia-vr -white.png';
import backgroundImage from '../../Assets/img/backgroundsimg/backKarolFarias.jpeg';

const KarolFarias = () => {
  const title = 'KAROL FARÍAS';
  const description = 'SERVICIO DE ENFERMERÍA PROFESIONAL PARA TU BIENESTAR';
  const bookButtonText = 'VER SERVICIOS';
  const bookDescription = 'Tu Bienestar, Mi Prioridad. ¡Contáctame Ahora!';//mensaje de wsp
  const consultationButtonText = 'CONTÁCTANOS';
  const subtitle = '¡Tu Salud en las Mejores Manos: Atención Integral a Domicilio con profesional Certificada!';
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

export default KarolFarias;