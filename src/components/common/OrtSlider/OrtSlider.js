import React, { useState, useEffect } from 'react';
import './OrtSlider.css';

// Importaciones de imágenes
import inmobiliariaImg from '../../../Assets/img/services/inmobiliaria.jpg';
import loteosImg from '../../../Assets/img/services/loteos.jpg';
import tourvirtualImg from '../../../Assets/img/services/tourvirtual.jpg';
import marketingImg from '../../../Assets/img/services/marketing.jpg';

const OrtSlider = () => {
  const [activeImage, setActiveImage] = useState(inmobiliariaImg);

  const services = [
    { name: 'Propuesta', image: inmobiliariaImg },
    { name: 'Master Plan 360', image: loteosImg },
    { name: 'Sitio Web', image: tourvirtualImg },
    { name: 'Produccion Audiovisual', image: marketingImg },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage((prevImage) => {
        const nextIndex = (services.findIndex((svc) => svc.image === prevImage) + 1) % services.length;
        return services[nextIndex].image;
      });
    }, 18000); // Cambia la imagen cada 10 segundos

    return () => clearInterval(intervalId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMouseEnter = (image) => {
    setActiveImage(image);
  };

  return (
    <div
      className="ort-slider"
      style={{ '--background-image': `url(${activeImage})` }} // Uso de la variable CSS para controlar el fondo
    >
      <div className="ort-slider__background">
        <div className="ort-slider__menu">
          {services.map((service, idx) => (
            <div
              className="ort-slider__menu-item"
              onMouseEnter={() => handleMouseEnter(service.image)}
              key={idx}
            >
              {service.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrtSlider;
