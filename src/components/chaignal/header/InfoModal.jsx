import React from 'react';
import './InfoModal.css'; // Asegúrate de crear este archivo CSS siguiendo BEM

function InfoModal({ closeModal }) {
  // Función para abrir el enlace de WhatsApp con un mensaje predefinido
  const handleContactClick = () => {
    const whatsappUrl = "https://wa.me/+56984305751?text=Hola,%20quiero%20más%20información%20del%20proyecto%20Chaignal";
    window.open(whatsappUrl, '_blank');
  };

  // Función para mostrar una alerta para el botón Brochure
  const handleBrochureClick = () => {
    alert("Próximamente");
  };

  return (
    <div className="info-modal">
      <div className="info-modal__content">
        <button className="info-modal__close-btn" onClick={closeModal}>Cerrar</button>
        <button className="info-modal__btn" onClick={() => window.open("https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Guillermo+Valenzuela/Chaignal/output/index.html", '_blank')}>MASTER PLAN 360</button>
        <button className="info-modal__btn" onClick={() => window.open("https://youtu.be/IJZB19xo_8k?si=X78kZI4PF1Mfwy5z", '_blank')}>VIDEO</button>
        <button className="info-modal__btn" onClick={handleBrochureClick}>BROCHURE</button>
        <button className="info-modal__btn" onClick={handleContactClick}>CONTÁCTO</button>
      </div>
    </div>
  );
}


export default InfoModal;
