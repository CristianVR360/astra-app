import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import './MenuInferior.css';

const MenuInferior01 = ({ brochureUrl, toggleModal, toggleCarrusel, colorPrimarioTransparente, colorSecundario, colorPrimario }) => {
  return (
    <div className="navegador01-container">
      <div className="navegador01">
        <div className="navegador01__button" onClick={toggleModal}>
          <FontAwesomeIcon icon={faHome} className="navegador01__icon" />
          <span className="navegador01__text">Home</span>
        </div>

        <div className="navegador01__button" onClick={toggleCarrusel}>
          <FontAwesomeIcon icon={faFileAlt} className="navegador01__icon" />
          <span className="navegador01__text">Brochure</span>
        </div>

        <div className="navegador01__separator">|</div>
        <div className="navegador01__button" onClick={toggleModal}>
          <FontAwesomeIcon icon={faBars} />
          <span className="navegador01__text">Menu</span>
        </div>
      </div>
    </div>
  );
};

export default MenuInferior01;