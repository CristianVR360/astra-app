import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css";

const Carrusel = ({
  CarruselLinks,
  colorPrimario,
  colorPrimarioTransparente,
  colorSecundario,
  colorTerciario,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 25000,
    pauseOnHover: false,
    swipe: true,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    arrows: true,
    draggable: true,
    touchMove: true,
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
                {link.url ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carrusel__button"
                    style={{
                      backgroundColor: colorTerciario,
                      color: colorSecundario,
                    }}
                  >
                    Más información
                  </a>
                ) : (
                  <span
                    className="carrusel__button"
                    style={{
                      backgroundColor: colorTerciario,
                      color: colorSecundario,
                      cursor: "default",
                    }}
                  >
                    Próximamente
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;