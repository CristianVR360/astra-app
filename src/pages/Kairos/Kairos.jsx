import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/logokairos.png';
import backgroundImage from '../../Assets/img/backgroundsimg/kairos.jpg';

const KAIROS = () => {
  const title = 'KAIROS';
  const description = '¡Juegos didácticos: donde la diversión y el aprendizaje se encuentran';
  const bookButtonText = 'VER PRODUCTOS';
  const bookDescription = 'Consulta por nuestras promociones ';
  const consultationButtonText = 'CONTÁCTANOS';
  const subtitle = '¿Buscas aventura educativa? ¡Comienza aquí!';
  const telefono = '+56976601734';
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 =""; 
  const colorprimario ="238, 185, 2" //color del boton

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
        colorprimariok={colorprimario}
      />
    </div>
  );
};

export default KAIROS;