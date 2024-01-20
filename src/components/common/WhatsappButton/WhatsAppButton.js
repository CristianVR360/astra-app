import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppButton.css'; // Asegúrate de tener este archivo CSS en tu proyecto

function WhatsAppButton() {
    return (
        <a href="https://wa.me/56984305751" className="floating-button" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    );
}

export default WhatsAppButton;
