import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import videoSrc from '../../../../Assets/video/lostordos-background.mp4'; // Asegúrate de tener el video correcto para Los Tordos
import InfoModal from '../../modal-proyectos/InfoModal';
import './LosTordosHeader.css'; // Asegúrate de que este CSS esté correctamente referenciado y contenga estilos para Los Tordos
import ramas from '../../../../Assets/ramas-Boton-quiero-saber-más.png';
import logoSrc from '../../../../Assets/lostordosblanco.svg'; //


const subtitles = [
  "Tu nueva vida en el sur de Chile, Villarrica, Araucanía Lacustre",
  "Parcelas de 5.000 m², con luz, agua y rol incluido",
  "Parcelas planas, limpias y listas para comenzar a construir",
  "Cerca de la ciudad y con fácil acceso al proyecto a través de la Ruta s63"
];

function LosTordosPage() {
  const [masterPlanUrl] = useState("https://lostordosmaster360-production.up.railway.app/");
  const [videoUrl] = useState("https://youtu.be/ZDqds6I9dXE?si=MHc1w8gtJ9eHtYLH");
  const [brochureUrl] = useState("https://drive.google.com/file/d/1ZkGcGwoAY_tVNYhCbGZFJe48Mg3yg28r/view");
  const [whatsappNumber] = useState("+56931354518");
  const [whatsappMessage] = useState("Hola, quiero más información del proyecto");

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
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="lostordos-container">
      <header className="lostordos-header">
        <video autoPlay loop muted className="background-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="lostordos-logo-container">
        <img className="lostordos-logo" src={logoSrc} alt="Logo Los Tordos" />
        </div>
        {/* Botón para más información */}
        <button className="lostordos-header__info-btn" onClick={toggleModal} style={{ backgroundImage: `url(${ramas})` }}>
          Quiero saber <b> más</b>
        </button>
        {/* Botón de hamburguesa */}
        <div className="hamburger-menu" onClick={toggleModal}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {modalVisible && (
          <InfoModal
            closeModal={toggleModal}
            masterPlanUrl={masterPlanUrl}
            videoUrl={videoUrl}
            brochureUrl={brochureUrl}
            whatsappNumber={whatsappNumber}
            whatsappMessage={whatsappMessage}
          />
        )}
        <div className={`lostordos__subtitle ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
          {subtitles[subtitleIndex]}
        </div>
      </header>
    </div>
  );
}

export default LosTordosPage;
