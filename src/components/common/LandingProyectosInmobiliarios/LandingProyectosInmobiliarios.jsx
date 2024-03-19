import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import WhatsAppButton from '../WhatsappButton/WhatsAppButton';
import InfoModal from '../modal-proyectos/InfoModal';
import './LandingProyectosInmobiliarios.css';

const LandingProyectosInmobiliarios = ({
  videoSrc,
  logoSrc,
  ramas,
  subtitles,
  masterPlanUrl,
  videoUrl,
  instagramUrl,
  whatsappNumber,
  whatsappMessage,
  callToAction,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setSubtitleIndex(prevIndex => (prevIndex + 1) % subtitles.length);
        setIsVisible(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [subtitles.length]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="landing-logo-container">
          <img className="landing-logo" src={logoSrc} alt="Logo del proyecto" />
        </div>
       
        <div className="hamburger-menu" onClick={toggleModal}>
          <FontAwesomeIcon icon={faBars} /> Menu
        </div>
        {modalVisible && (
          <InfoModal
            closeModal={toggleModal}
            masterPlanUrl={masterPlanUrl}
            videoUrl={videoUrl}
            instagramUrl={instagramUrl}
            whatsappNumber={whatsappNumber}
            whatsappMessage={whatsappMessage}
          />
        )}
        <div className={`landing__subtitle ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
          {subtitles[subtitleIndex]}
        </div>
        <WhatsAppButton phoneNumber={whatsappNumber} message={whatsappMessage} callToAction={callToAction} />
      </header>
    </div>
  );
};

export default LandingProyectosInmobiliarios;