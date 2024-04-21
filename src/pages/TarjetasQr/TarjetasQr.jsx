import React, { useState } from 'react';
import PaginaInicio from './PaginaInicio';
import './TarjetasQr.css';
import Carrusel from './Carrusel';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TarjetasQr = ({
  logo,
  backgroundImage,
  title,
  description,
  bookButtonText,
  bookDescription,
  consultationButtonText,
  subtitle,
  telefono,
  instagramLink,
  facebookLink,
  gpsLink,
  colorPrimario,
  colorPrimarioTransparente,
  colorSecundario,
  colorTerciario,
  urlMenu01,
  urlMenu02,
  urlMenu03,
  carruselLinks,
}) => {
  const [activeComponent, setActiveComponent] = useState('inicio');

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  const getTransitionClassName = () => {
    if (activeComponent === 'inicio') {
      return 'tarjeta-qr-transition-inicio';
    } else {
      return 'tarjeta-qr-transition-carrusel';
    }
  };

  return (
    <div className="tarjeta-qr">
 <nav className="tarjeta-qr__nav">
  <button
    className={`tarjeta-qr__nav-button ${activeComponent === 'inicio' ? 'active' : ''}`}
    onClick={() => handleNavigation('inicio')}
    style={{
      backgroundColor: activeComponent === 'inicio' ? colorPrimarioTransparente : colorPrimario,
      color: colorSecundario,
    }}
  >
    <i className="fas fa-home"></i>
    <span>Inicio</span>
  </button>
  <button
    className={`tarjeta-qr__nav-button ${activeComponent === 'carrusel' ? 'active' : ''}`}
    onClick={() => handleNavigation('carrusel')}
    style={{
      backgroundColor: activeComponent === 'carrusel' ? colorTerciario : colorPrimario,
      color: colorSecundario,
    }}
  >
    <i className="fas fa-images"></i>
    <span>Proyectos</span>
  </button>
</nav>

      <TransitionGroup>
        <CSSTransition
          key={activeComponent}
          timeout={500}
          classNames={getTransitionClassName()}
        >
          <div className="tarjeta-qr__content">
            {activeComponent === 'inicio' ? (
              <PaginaInicio
                logo={logo}
                backgroundImage={backgroundImage}
                title={title}
                description={description}
                bookButtonText={bookButtonText}
                bookDescription={bookDescription}
                consultationButtonText={consultationButtonText}
                subtitle={subtitle}
                telefono={telefono}
                instagramLink={instagramLink}
                facebookLink={facebookLink}
                gpsLink={gpsLink}
                colorPrimario={colorPrimario}
                colorPrimarioTransparente={colorPrimarioTransparente}
                colorSecundario={colorSecundario}
                colorTerciario={colorTerciario}
                carruselLinks={carruselLinks}
              />
            ) : (
              <Carrusel CarruselLinks={carruselLinks} />
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default TarjetasQr;