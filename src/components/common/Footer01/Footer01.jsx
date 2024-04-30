import React from "react";
import { FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

const formatTelefono = (telefono) => {
  if (telefono.length === 12) {
    return `${telefono.slice(0, 4)} ${telefono.slice(4, 8)} ${telefono.slice(8)}`;
  }
  return telefono;
};

const Footer01 = ({ instagramLink, facebookLink, gpsLink, colorSecundario, telefono, footerAfterStyles }) => {
  const formattedTelefono = formatTelefono(telefono);

  return (
    <div className="footer01">
      <div className="footer01__social-links">
        <a href={instagramLink} className="footer01__social-link" style={{ color: colorSecundario }}>
          <FaInstagram className="footer01__social-icon" />
        </a>
        <a href={facebookLink} className="footer01__social-link" style={{ color: colorSecundario }}>
          <FaFacebook className="footer01__social-icon" />
        </a>
        <a href={gpsLink} className="footer01__social-link" style={{ color: colorSecundario }}>
          <FaMapMarkerAlt className="footer01__social-icon" />
        </a>
      </div>
      <p className="footer01__telefono" style={{ color: colorSecundario }}>
        <a href={`tel:${telefono}`} className="footer01__telefono-link">
          {formattedTelefono}
        </a>
      </p>
      <div className="footer01__after" style={footerAfterStyles}></div>
    </div>
  );
};

export default Footer01;