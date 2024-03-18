// InfoModal.js
import React from 'react';
import './InfoModal.css';

function InfoModal({ closeModal, masterPlanUrl, videoUrl, instagramUrl, ubicacionUrl, showAlertButton }) {
  return (
    <div className="info-modal">
      <div className="info-modal__content">
        {showAlertButton && (
          <button className="info-modal__btn master-plan">
            <i className="fa-solid fa-map-location-dot"></i>
            Master Plan
          </button>
        )}
        {!showAlertButton && (
          <button className="info-modal__btn master-plan" onClick={() => window.open(masterPlanUrl, '_blank')}>
            <i className="fa-solid fa-map-location-dot"></i>
            Master Plan
          </button>
        )}

        {showAlertButton && (
          <button className="info-modal__btn video">
            <i className="fa-solid fa-video"></i>
            Video
          </button>
        )}
        {!showAlertButton && (
          <button className="info-modal__btn video" onClick={() => window.open(videoUrl, '_blank')}>
            <i className="fa-solid fa-video"></i>
            Video
          </button>
        )}

        {showAlertButton && (
          <button className="info-modal__btn instagram">
            <i className="fa-brands fa-instagram"></i>
            Instagram
          </button>
        )}
        {!showAlertButton && (
          <button className="info-modal__btn instagram" onClick={() => window.open(instagramUrl, '_blank')}>
            <i className="fa-brands fa-instagram"></i>
            Instagram
          </button>
        )}

        {showAlertButton && (
          <button className="info-modal__btn ubicacion">
            <i className="fa-solid fa-map-marker-alt"></i>
            Ubicación
          </button>
        )}
        {!showAlertButton && (
          <button className="info-modal__btn ubicacion" onClick={() => window.open(ubicacionUrl, '_blank')}>
            <i className="fa-solid fa-map-marker-alt"></i>
            Ubicación
          </button>
        )}

        <button className="info-modal__close-btn" onClick={closeModal}>
          <i className="fa-solid fa-times"></i> Cerrar
        </button>
      </div>
    </div>
  );
}

export default InfoModal;