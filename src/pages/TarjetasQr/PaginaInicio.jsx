import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./PaginaInicio.css";
import Footer01 from "../../components/common/Footer01/Footer01";

import WhatsAppButton from "../../components/common/WhatsappButton01/WhatsAppButton01";
import Subtitle01 from "../../components/common/SubtitleComponent/Subtitle01";

const PaginaInicio = ({
  logo,
  backgroundImage,
  title,
  description,
  bookButtonText,
  bookDescription,
  consultationButtonText,
  subtitle,
  telefono,
  instagramLink,
  facebookLink,
  gpsLink,
  colorPrimario,
  colorPrimarioTransparente,
  colorSecundario,
  colorTerciario,
  footerAfterStyles,
  subtitles
}) => {
  return (
    <div className="pagina-inicio">
      <div className="pagina-inicio__main-content">
        <img
          src={backgroundImage}
          alt="Imagen de fondo"
          className="pagina-inicio__background"
        />

        <div className="pagina-inicio__content">
          <div className="pagina-inicio__section">
            <div className="pagina-inicio__logo">
              <img src={logo} alt="Logo" className="pagina-inicio__logo-img" />
            </div>
            <h1
              className="pagina-inicio__title"
              style={{ color: colorSecundario }}
            >
              {title}
            </h1>
            <p
              className="pagina-inicio__description"
              style={{ color: colorSecundario,
                display: description ? 'block' : 'none' }}
            >
              {description}
            </p>
            <div className="pagina-inicio__subtitles-container">
  <Subtitle01 subtitles={subtitles} className="pagina-inicio__subtitles"/>
</div>
          </div >
          <div className="pagina-incio__whatsappButton-container">
          <WhatsAppButton phoneNumber={telefono} callToAction={subtitle} className="pagina-inicio__whatsappButton" />
          </div>
         

        </div>
        
        <Footer01
            className="pagina-inicio__footer"
            instagramLink={instagramLink}
            facebookLink={facebookLink}
            gpsLink={gpsLink}
            colorSecundario={colorSecundario}
            telefono={telefono}
            footerAfterStyles={footerAfterStyles}
          />

      </div>
    </div>
  );
};

export default PaginaInicio;
