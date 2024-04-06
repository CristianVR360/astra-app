import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faYoutube, faWhatsapp,  faWaze} from '@fortawesome/free-brands-svg-icons';
import './FooterProyectosInmobiliarios.css';

const FooterProyectosInmobiliarios = ({ instagramUrl, ubicacionUrl, whatsappNumber, nombreProyecto, message, videoUrl, colorPrimario, colorSecundario }) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
 
  const footerStyle = {
    '--colorPrimario': colorPrimario,
    '--colorSecundario': colorSecundario
  };


  return (
    <footer className="footer__proyectos-inmobiliarios" style={footerStyle}>




      <div className="footer__proyectos-inmobiliarios-row">
        
        <a href={instagramUrl} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="footer__proyectos-inmobiliarios__icono" /></a>
        <a href={videoUrl} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faYoutube} className="footer__proyectos-inmobiliarios__icono" /></a>
        <a href={whatsappLink} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faWhatsapp} className="footer__proyectos-inmobiliarios__icono" /></a>
        <a href={ubicacionUrl} target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faWaze} className="footer__proyectos-inmobiliarios__icono" /></a>

      </div>
      <div className="footer__proyectos-inmobiliarios-row">
      
      <span className='footer__proyectos-inmobiliarios__contacto'>{whatsappNumber}</span>
        
      </div>
      <div className="footer__proyectos-inmobiliarios-row">
        <p>
          <span className='footer__proyectos-inmobiliarios-nombreProyecto'>{nombreProyecto} </span>- Copyright © 2024 - Todos los derechos reservados  || Diseñado por Astra360
        </p>
      </div>
    </footer>
  );
};

export default FooterProyectosInmobiliarios;
