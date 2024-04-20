import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppButton01.css';

function WhatsAppButton({ phoneNumber, message, callToAction }) {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="whatsapp-button-container">
      <a href={whatsappLink} className="floating-button" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </a>
      <span className="whatsapp-button-text">{callToAction}</span>
    </div>
  );
}

export default WhatsAppButton;