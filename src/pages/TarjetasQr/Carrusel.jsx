import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrusel.css';

const Carrusel = ({ CarruselLinks }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 25000,
    pauseOnHover: false,
  };

  return (
    <div className="carrusel">
      <Slider {...settings}>
        {CarruselLinks.map((link, index) => (
          <div key={index} className="carrusel__slide">
            <div className="carrusel__video-container">
              {link.videoUrl && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline
                  poster={link.image}
                  className="carrusel__video"
                >
                  <source src={link.videoUrl} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="carrusel__content">
              {(link.title || link.description) && (
                <div className="carrusel__overlay">
                  {link.title && (
                    <h3 className="carrusel__title">{link.title}</h3>
                  )}
                  {link.description && (
                    <p className="carrusel__description">{link.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;