import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import videoSrc from '../../../video/chaignal3-bkgwebsite.mp4';
import InfoModal from './InfoModal';
import './ChaignalHeader.css';

const subtitles = ["aqui va puro kotazo", "mas kotazo", "y mas kotazo"];

function ChaignalPage() {
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible); // Esta función cambia el estado de modalVisible
  };

  return (
    <div className="chaignal-container">
      <header className="chaignal-header">
        <video autoPlay loop muted className="background-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="logo-container">
          <img className="chaignal-logo" src="/parcelas-Chaignal-logo.png" alt="Logo CHAIGNAL" />
        </div>
        {/* Botón para más información */}
        <button className="chaignal-header__info-btn" onClick={toggleModal}>Más información</button>
        {/* Botón de hamburguesa */}
        <div className="hamburger-menu" onClick={toggleModal}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {modalVisible && <InfoModal closeModal={toggleModal} />}
        <div className={`chaignal__subtitle ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
          {subtitles[subtitleIndex]}
        </div>
      </header>
    </div>
  );
}

export default ChaignalPage;
