import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import videoSrc from '../../../../Assets/video/chaignal3-bkgwebsite.mp4';
import InfoModal from '../../../common/modal-proyectos/InfoModal';
import './ChaignalHeader.css';
import ramas from '../../../../Assets/ramas-Boton-quiero-saber-más.png';

const subtitles = [
  "Tu nueva vida en el sur de Chile, Región de los Ríos",
  "Parcelas de 5.000 m², con luz, agua y rol incluido",
  "Parcelas planas, limpias y con orilla de río",
  "Cerca de la ciudad y con fácil acceso al proyecto a través de la Ruta Internacional 203"
];

function ChaignalPage() {
  const [masterPlanUrl] = useState("https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Guillermo+Valenzuela/Chaignal/output/index.html");
  const [videoUrl] = useState("https://youtu.be/IJZB19xo_8k");
  const [brochureUrl] = useState("https://drive.google.com/file/d/1XQ5raObnBu9War6xac4hJSx2fiMddbEh/view");
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
        <button className="chaignal-header__info-btn" onClick={toggleModal} style={{ backgroundImage: `url(${ramas})` }}>
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
        <div className={`chaignal__subtitle ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
          {subtitles[subtitleIndex]}
        </div>
      </header>
    </div>
  );
}

export default ChaignalPage;
