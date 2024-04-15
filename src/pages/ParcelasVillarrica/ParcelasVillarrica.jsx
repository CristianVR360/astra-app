import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/logo-parcelas-villarrica.png';
import backgroundImage from '../../Assets/img/parcelasVillarrica/assets/background-Horizontal.jpg';

const ParcelasVillarrica = () => {
  const title = 'PARCELAS VILLARRICA';
  const description = 'Invierte en naturaleza, tranquilidad y bienestar';
  const bookButtonText = 'VER PROYECTOS';
  const bookDescription = 'Consulta por nuestras promociones ';
  const consultationButtonText = 'CONTÁCTANOS';
  const subtitle = '¿Quieres conocer nuestras ofertas especiales? ';
  const telefono = '+56996858145';
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";

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
      />
    </div>
  );
};

export default ParcelasVillarrica;