import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__contact">
                <h3>Astra360</h3>
                <p>Correo: <a href="mailto:contacto@astra360.cl">contacto@astra360.cl</a></p>
                <p>Teléfono: +56 9 8430 5751</p>
                <p>Temuco Chile</p>
            </div>

            <div className="footer__social">
                <a href="https://www.instagram.com/astra.360/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="#" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
