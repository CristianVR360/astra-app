// InfoModal.js
import React from 'react';
import './InfoModal.css'; // Asegúrate de tener este archivo CSS con la nomenclatura BEM
import ramas from '../../../Assets/ramas-menu.png'; // Ajusta la ruta según sea necesario

function InfoModal({ closeModal, masterPlanUrl, videoUrl, brochureUrl, whatsappNumber, whatsappMessage, showAlertButton }) {
  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="info-modal">
      <div className="info-modal__content" style={{ backgroundImage: `url(${ramas})` }}>
        {showAlertButton && (
        <button className="info-modal__btn" onClick={() => alert("Próximamente")}>Master Plan 360</button>
        )}
         {!showAlertButton && (
        <button className="info-modal__btn" onClick={() => window.open(masterPlanUrl, '_blank')}>Master Plan 360</button>
        )}
        
        {showAlertButton && (
        <button className="info-modal__btn" onClick={() => alert("Próximamente")}>Video</button>
        )}
        {!showAlertButton && (
        <button className="info-modal__btn" onClick={() => window.open(videoUrl, '_blank')}>Video</button>
        )}

        {showAlertButton && (
        <button className="info-modal__btn" onClick={() => alert("Próximamente")}>Brochure</button>
        )}
        {!showAlertButton && (
        <button className="info-modal__btn" onClick={() => window.open(brochureUrl, '_blank')}>Brochure</button>
        )}
        
        {showAlertButton && (
          <button className="info-modal__btn" onClick={() => alert("Próximamente")}>Contácto</button>
        )}
        {!showAlertButton && (
          <button className="info-modal__btn" onClick={handleContactClick}>Contacto</button>
        )}

        <button className="info-modal__close-btn" onClick={closeModal}>X Cerrar</button>
      </div>
    </div>
  );
}

export default InfoModal;
