import React, { useState, useEffect } from 'react';



import WhatsAppButton from '../WhatsappButton/WhatsAppButton';
import InfoModal from '../modal-proyectos/InfoModal';
import './LandingProyectosInmobiliarios.css';
import MenuInferior01 from '../MenuInferior/MenuInferior';
import FooterProyectosInmobiliarios from '../FooterProyectosInmobiliarios/FooterProyectosInmobiliarios';

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
  ubicacionUrl,
  brochureUrl,
  nombreProyecto,
  colorPrimario,
  colorPrimarioTransparente,
  colorSecundario,

}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const colorStyles = {
    '--colorPrimario': colorPrimario,
    '--colorPrimarioTransparente':colorPrimarioTransparente,
    '--colorSecundario': colorSecundario
    
  };

  
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
    <div className="landing-container" style={colorStyles}>
      <header className="landing-header">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="landing-logo-container">
          <img className="landing-logo" src={logoSrc} alt="Logo del proyecto" />
        </div>
       
       
        <MenuInferior01  colorPrimarioTransparente={colorPrimarioTransparente} colorSecundario={colorSecundario} colorPrimario={colorPrimario} brochureUrl={brochureUrl} toggleModal={toggleModal} />

        {modalVisible && (
          <InfoModal
            closeModal={toggleModal}
            masterPlanUrl={masterPlanUrl}
            videoUrl={videoUrl}
            instagramUrl={instagramUrl}
            ubicacionUrl={ubicacionUrl}
            whatsappNumber={whatsappNumber}
            whatsappMessage={whatsappMessage}
            colorPrimario={colorPrimario}
            colorPrimarioTransparente={colorPrimarioTransparente}
            colorSecundario={colorSecundario}
          />
        )}
        <div className={`landing__subtitle ${isVisible ? 'fadeIn' : 'fadeOut'}`}>
          {subtitles[subtitleIndex]}
        </div>
         <WhatsAppButton  phoneNumber={whatsappNumber} message={whatsappMessage} callToAction={callToAction} />     </header>

         <FooterProyectosInmobiliarios
         instagramUrl={instagramUrl}
         ubicacionUrl={ubicacionUrl}
         whatsappNumber={whatsappNumber}
         message={whatsappMessage}
         videoUrl={videoUrl}
         nombreProyecto={nombreProyecto}
         colorPrimario={colorPrimario}
         colorSecundario={colorSecundario}
         />
    </div>
  );
};

export default LandingProyectosInmobiliarios;