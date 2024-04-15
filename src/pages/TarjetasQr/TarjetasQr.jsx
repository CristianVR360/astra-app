import React, { useState } from 'react';
import PaginaInicio from './PaginaInicio';
import './TarjetasQr.css';
import Carrusel from './Carrusel';
import video1 from '../../Assets/video/reels/01.mp4';
import video2 from '../../Assets/video/reels/02.mp4';
import video3 from '../../Assets/video/reels/03.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'

const CarruselLinks = [
  {
    url: 'https://example.com/link1',
    image: fija1,
    videoUrl: video1,
    title: 'Slide 1 Title',
    description: 'Slide 1 Description',
  },
  {
    url: 'https://example.com/link2',
    image: fija2,
    videoUrl: video2,
    title: 'Slide 2 Title',
    description: 'Slide 2 Description',
  },
  {
    url: 'https://example.com/link3',
    image: fija3,
    videoUrl: video3,
    title: 'Slide 3 Title',
    description: 'Slide 3 Description',
  },
];

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
  colorPrimary,
  colorSecundary,
  urlMenu01,
  urlMenu02,
  urlMenu03,
}) => {
  const [activeComponent, setActiveComponent] = useState('inicio');

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="tarjeta-qr">
      <nav className="tarjeta-qr__nav">
        <button
          className={`tarjeta-qr__nav-button ${activeComponent === 'inicio' ? 'active' : ''}`}
          onClick={() => handleNavigation('inicio')}
        >
          Inicio
        </button>
        <button
          className={`tarjeta-qr__nav-button ${activeComponent === 'carrusel' ? 'active' : ''}`}
          onClick={() => handleNavigation('carrusel')}
        >
          Proyectos
        </button>
      </nav>

      {activeComponent === 'inicio' && (
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
          colorPrimary={colorPrimary}
          colorSecundary={colorSecundary}
          gpsLink={gpsLink}
        />
      )}

      {activeComponent === 'carrusel' && <Carrusel CarruselLinks={CarruselLinks} />}
    </div>
  );
};

export default TarjetasQr;