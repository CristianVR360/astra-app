import React from 'react';
import LandingPage from '../../common/LandingProyectos/LandingPage';

// Importar imágenes y assets
import HeroImage from '../../../Assets/img/services/inmobiliaria.jpg'
import VideoThumbnail from '../../../Assets/video/lostordos-background.mp4';

const MarketingCampaignLosTordos = () => {
  const heroTitle = 'Simplifica tu búsqueda: el camino más fácil hacia tu nueva propiedad.';
  const heroSubtitle = 'Los tordos de villarrica, una inversión segura';
  const cardContent = {
    title: 'Desde los $50.000.000',
    description: 'Conoce nuestro crédito directo como método de financiamiento.Contactanos en el botón de whatsapp y obten un bono de 1 millón de pesos escribiendo #miparcelaenelsur',
  };
  const formTitle = 'Contáctanos';

  return (
    <LandingPage
      heroImage={HeroImage}
      heroTitle={heroTitle}
      heroSubtitle={heroSubtitle}
      cardContent={cardContent}
      videoThumbnail={VideoThumbnail}
      formTitle={formTitle}
    />
  );
};

export default MarketingCampaignLosTordos;