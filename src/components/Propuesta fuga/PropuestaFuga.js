import React, { useState, useEffect } from 'react';
import './PropuestaFuga.css'; // Asegúrate de que el archivo CSS esté actualizado con los nuevos estilos

// Importaciones de imágenes
import inmobiliariaImg from './intro.jpg';
import loteosImg from './loteos.jpg';
import tourvirtualImg from './website.jpg';
import marketingImg from './produccion.jpg';
import logoImg from './logo.png';

const PropuestaFuga = () => {
  const [activeImage, setActiveImage] = useState(inmobiliariaImg);
  const [activeContent, setActiveContent] = useState({
    title: "Título del Primer Slider",
    description: "Estimado equipo de Fugapucon.cl, En Astra 360, comprendemos la importancia de mantener una imagen digital moderna y atractiva, especialmente en el competitivo mercado inmobiliario de Pucón. Con este objetivo en mente, nos complace presentarles nuestra propuesta personalizada para la renovación integral de su presencia digital.",
  });

  const services = [
    { name: 'Propuesta', image: inmobiliariaImg, title: "Título Propuesta", description: "Estimado equipo de Fugapucon.cl, En Astra 360, comprendemos la importancia de mantener una imagen digital moderna y atractiva, especialmente en el competitivo mercado inmobiliario de Pucón. Con este objetivo en mente, nos complace presentarles nuestra propuesta personalizada para la renovación integral de su presencia digital." },
    { name: 'Master Plan 360', image: loteosImg, title: "Título Master Plan 360", description: "Este servicio ofrece una visualización detallada del desarrollo, incorporando fotografías 360° de alta calidad con tags para georreferenciar el proyecto. Además, incluye un panel autoadministrable que permite actualizar la disponibilidad, precios y descripciones de las parcelas en tiempo real. Destacamos puntos de interés como amenities, senderos y zonas de esparcimiento, enriqueciendo la experiencia del usuario y facilitando la comprensión del valor y las características únicas del proyecto." },
    { name: 'Sitio Web', image: tourvirtualImg, title: "Título Sitio Web", description: "Entendemos la importancia de una presencia online impactante y diseñamos sitios web que no solo lucen espectaculares, sino que también ofrecen una experiencia de usuario fluida y adaptativa. Cada sitio es construido con un diseño responsivo, asegurando una visualización y navegación óptimas en cualquier dispositivo, desde smartphones hasta ordenadores de escritorio. Además, garantizamos la máxima operatividad con hosting de alta disponibilidad, asegurando que su sitio web esté accesible para sus clientes en todo momento." },
    { name: 'Produccion Audiovisual', image: marketingImg, title: "Título Produccion Audiovisual", description: "Diseñado para capturar la esencia de su proyecto con una precisión cinematográfica, ofreciendo desde la dirección creativa hasta la ejecución final. Este servicio incluye la creación de hasta 10 escenas, que abarcan tanto interiores, capturados con cámaras de video de alta definición, como exteriores, utilizando cámaras y drones para capturas aéreas espectaculares." },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage((prevImage) => {
        const nextIndex = (services.findIndex((svc) => svc.image === prevImage) + 1) % services.length;
        setActiveContent({
          title: services[nextIndex].title,
          description: services[nextIndex].description,
        }); 
        return services[nextIndex].image;
      });
    }, 28000); // Intervalo de cambio de imagen

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = (service) => {
    setActiveImage(service.image);
    setActiveContent({
      title: service.title,
      description: service.description,
    });
  };

  return (
    <div
      className="propuesta-fuga"
      style={{ '--background-image': `url(${activeImage})` }}
    >
      <div className="propuesta-fuga__background">
        <div className="propuesta-fuga__menu">
          {services.map((service, idx) => (
            <div
              className="propuesta-fuga__menu-item"
              onMouseEnter={() => handleMouseEnter(service)}
              key={idx}
            >
              {service.name}
            </div>
          ))}
        </div>
        <div className="propuesta-fuga__content">
          
          <img src={logoImg} alt="Logo" className="propuesta-fuga__logo"/>
          <p>{activeContent.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropuestaFuga;
