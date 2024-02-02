import React from 'react';
import './InfoModal.css'; // Asegúrate de crear este archivo CSS siguiendo BEM
import ramas from './ramas-menu.png';

function InfoModal({ closeModal }) {
  // Función para abrir el enlace de WhatsApp con un mensaje predefinido
  const handleContactClick = () => {
    const whatsappUrl = "https://wa.me/+56984305751?text=Hola,%20quiero%20más%20información%20del%20proyecto%20Chaignal";
    window.open(whatsappUrl, '_blank');
  };

  // Función para mostrar una alerta para el botón Brochure
 

  return (
    <div className="info-modal">
      <div className="info-modal__content" style={{ backgroundImage: `url(${ramas})` }}>
        
        <button className="info-modal__btn" onClick={() => window.open("https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Guillermo+Valenzuela/Chaignal/output/index.html", '_blank')}>Master Plan 360</button>
        <button className="info-modal__btn" onClick={() => window.open("https://youtu.be/IJZB19xo_8k?si=X78kZI4PF1Mfwy5z", '_blank')}>Video</button>
        <button className="info-modal__btn" onClick={() => window.open("https://drive.google.com/file/d/1XQ5raObnBu9War6xac4hJSx2fiMddbEh/view?usp=sharing", '_blank')}>Brochure</button>
        <button className="info-modal__btn" onClick={handleContactClick}>Contacto</button>
        <button className="info-modal__close-btn" onClick={closeModal}>X Cerrar</button>
      </div>
    </div>
  );
}


export default InfoModal;
