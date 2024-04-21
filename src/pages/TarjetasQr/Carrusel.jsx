import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css";

const Carrusel = ({ CarruselLinks,  colorPrimario,
  colorPrimarioTransparente,
  colorSecundario,
  colorTerciario }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 25000,
    pauseOnHover: false,
    swipe: true, // Habilita el gesto de swipe
    vertical: false,
    verticalSwiping: false, // Habilita el gesto de deslizamiento vertical
    swipeToSlide: true,
    arrows: true,
    draggable: true,

    touchMove: true, // Habilita el movimiento táctil
    beforeChange: (current, next) => {
      // Realiza acciones antes de cambiar de diapositiva, si es necesario
    },
    afterChange: (current) => {
      // Realiza acciones después de cambiar de diapositiva, si es necesario
    },
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
            <div
              className="carrusel__content"
              style={{ backgroundColor: colorPrimarioTransparente }}
            >
              <div className="carrusel__overlay">
                <h2
                  className="carrusel__title"
                  style={{ color: colorSecundario }}
                >
                  {link.title}
                </h2>
                <h3
                  className="carrusel__subtitle"
                  style={{ color: colorTerciario }}
                >
                  {link.subtitle}
                </h3>
                <p
                  className="carrusel__description"
                  style={{ color: colorSecundario }}
                >
                  {link.description}
                </p>
                <button
                  className="carrusel__button"
                  style={{
                    backgroundColor: colorPrimario,
                    color: colorSecundario,
                  }}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
