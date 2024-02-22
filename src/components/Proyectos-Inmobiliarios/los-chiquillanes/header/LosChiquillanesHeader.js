// LosChiquillanesPage.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import videoSrc from '../../../../Assets/video/Loschiquillanes-Bkg.mp4';
import InfoModal from '../../modal-proyectos/InfoModal'; // Asegúrate de que la ruta de importación sea correcta
import './LosChiquillanesHeader.css'; // Asegúrate de que la ruta de importación sea correcta
import ramas from '../../../../Assets/ramas-Boton-quiero-saber-más.png'; // Asegúrate de que la ruta de importación sea correcta
import logoSrc from '../../../../Assets/img/logos/Logo chiquillanes blanco.png'; // Asegúrate de que la ruta de importación sea correcta

const subtitles = [
  "Asombrosa belleza natural que ofrece la Región del Maule.",
  "Parcelas con vistas únicas, accesibilidad y servicios",
  "Un entorno ideal para tus aventuras o proyecto de vida",
  "Descubre la belleza y tranquilidad de vivir en Los Chiquillanes",
  "VENDE LEGAL PARCELAS"
];

function LosChiquillanesPage() {
  const [masterPlanUrl] = useState("URL_del_plan_maestro_de_Los_Chiquillanes");
  const [videoUrl] = useState("URL_del_video_promocional_de_Los_Chiquillanes");
  const [brochureUrl] = useState("URL_del_brochure_de_Los_Chiquillanes");
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
    <div className="loschiquillanes-container">
      <header className="loschiquillanes-header">
        <video autoPlay loop muted className="background-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="loschiquillanes-logo-container">
          <img className="loschiquillanes-logo" src={logoSrc} alt="Logo Los Chiquillanes" />
        </div>
        <button className="loschiquillanes-header__info-btn" onClick={toggleModal} style={{ backgroundImage: `url(${ramas})` }}>
          Quiero saber <b>más</b>
        </button>
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
            showAlertButton={true} // Muestra el botón de "Próximamente" dentro del modal
          />
        )}
        <div className={`loschiquillanes__subtitle ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
          {subtitles[subtitleIndex]}
        </div>
      </header>
    </div>
  );
}

export default LosChiquillanesPage;
