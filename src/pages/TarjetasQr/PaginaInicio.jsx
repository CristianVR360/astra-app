import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "./PaginaInicio.css";

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
}) => {
  return (
    <div className="pagina-inicio" style={{ backgroundColor: colorPrimario }}>
      <div className="pagina-inicio__main-content">
        <img src={backgroundImage} alt="Imagen de fondo" className="pagina-inicio__background" />
        <div className="pagina-inicio__content">
          <div className="pagina-inicio__section">
            <div className="pagina-inicio__logo">
              <img src={logo} alt="Logo" className="pagina-inicio__logo-img" />
            </div>
            <h1 className="pagina-inicio__title" style={{ color: colorSecundario }}>
              {title}
            </h1>
            <p className="pagina-inicio__description" style={{ color: colorSecundario }}>
              {description}
            </p>
          </div>
          <div className="pagina-inicio__section">
            <h2 className="pagina-inicio__subtitle" style={{ color: colorSecundario }}>
              {subtitle}
            </h2>
            <button
              className="pagina-inicio__book-button"
              style={{ backgroundColor: colorTerciario, color: colorSecundario }}
            >
              {bookButtonText}
            </button>
          </div>
          <div className="pagina-inicio__section">
            <p className="pagina-inicio__book-description" style={{ color: colorSecundario }}>
              {bookDescription}
            </p>
            <button
              className="pagina-inicio__consultation-button"
              style={{ backgroundColor: colorTerciario, color: colorSecundario }}
            >
              <FaWhatsapp className="pagina-inicio__consultation-icon" />
              <span className="pagina-inicio__consultation-text"> {consultationButtonText} </span>
            </button>
          </div>
        </div>
        <div className="pagina-inicio__footer">
          <div className="pagina-inicio__social-links">
            <a
              href={instagramLink}
              className="pagina-inicio__social-link"
              style={{ backgroundColor: colorPrimarioTransparente }}
            >
              <FaInstagram className="pagina-inicio__social-icon" />
            </a>
            <a
              href={facebookLink}
              className="pagina-inicio__social-link"
              style={{ backgroundColor: colorPrimarioTransparente }}
            >
              <FaFacebook className="pagina-inicio__social-icon" />
            </a>
            <a
              href={gpsLink}
              className="pagina-inicio__social-link"
              style={{ backgroundColor: colorPrimarioTransparente }}
            >
              <FaMapMarkerAlt className="pagina-inicio__social-icon" />
            </a>
          </div>
          <p className="pagina-inicio__telefono" style={{ color: colorSecundario }}>
            <a href={`tel:${telefono}`} className="pagina-inicio__telefono-link">
              {telefono}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicio;