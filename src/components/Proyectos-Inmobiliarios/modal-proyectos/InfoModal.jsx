import React from 'react';
import './InfoModal.css'; // Asegúrate de tener este archivo CSS con la nomenclatura BEM
// Importa la imagen de ramas si la vas a utilizar, sino, quita esta línea
import ramas from '../../../Assets/ramas-menu.png';

function InfoModal({ closeModal, masterPlanUrl, videoUrl, brochureUrl, whatsappNumber, whatsappMessage }) {
  // Función para abrir el enlace de WhatsApp con un mensaje predefinido
  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="info-modal">
      <div className="info-modal__content" style={{ backgroundImage: `url(${ramas})` }}>
        <button className="info-modal__btn" onClick={() => window.open(masterPlanUrl, '_blank')}>Master Plan 360</button>
        <button className="info-modal__btn" onClick={() => window.open(videoUrl, '_blank')}>Video</button>
        <button className="info-modal__btn" onClick={() => window.open(brochureUrl, '_blank')}>Brochure</button>
        <button className="info-modal__btn" onClick={handleContactClick}>Contacto</button>
        <button className="info-modal__close-btn" onClick={closeModal}>X Cerrar</button>
      </div>
    </div>
  );
}

export default InfoModal;
