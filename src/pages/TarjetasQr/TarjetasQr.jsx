import React, { useState } from "react";
import PaginaInicio from "./PaginaInicio";
import "./TarjetasQr.css";
import Carrusel from "./Carrusel";
import ProductList from "./Vitrina";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
  colorCuaternario,
  urlMenu01,
  urlMenu02,
  urlMenu03,
  carruselLinks,
  footerAfterStyles,
  subtitles,
}) => {
  const [activeComponent, setActiveComponent] = useState("inicio");

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  const getTransitionClassName = () => {
    if (activeComponent === "inicio") {
      return "tarjeta-qr-transition-inicio";
    } else if (activeComponent === "carrusel") {
      return "tarjeta-qr-transition-carrusel";
    } else {
      return "tarjeta-qr-transition-vitrina";
    }
  };

  return (
    <div className="tarjeta-qr">
      <nav className="tarjeta-qr__nav">
        <button
          className={`tarjeta-qr__nav-button ${
            activeComponent === "inicio" ? "active" : ""
          }`}
          onClick={() => handleNavigation("inicio")}
          style={{
            backgroundColor:
              activeComponent === "inicio" ? colorCuaternario : colorTerciario,
            color: colorSecundario,
          }}
        >
          <i className="fas fa-home"></i>
          <span>Inicio</span>
        </button>
        <button
          className={`tarjeta-qr__nav-button ${
            activeComponent === "carrusel" ? "active" : ""
          }`}
          onClick={() => handleNavigation("carrusel")}
          style={{
            backgroundColor:
              activeComponent === "carrusel" ? colorCuaternario : colorTerciario,
            color: colorSecundario,
          }}
        >
          <i className="fas fa-images"></i>
          <span>Proyectos</span>
        </button>
        <button
          className={`tarjeta-qr__nav-button ${
            activeComponent === "vitrina" ? "active" : ""
          }`}
          onClick={() => handleNavigation("vitrina")}
          style={{
            backgroundColor:
              activeComponent === "vitrina" ? colorCuaternario : colorTerciario,
            color: colorSecundario,
          }}
        >
          <i className="fas fa-store"></i>
          <span>Vitrina</span>
        </button>
      </nav>

      <TransitionGroup>
        <CSSTransition
          key={activeComponent}
          timeout={500}
          classNames={getTransitionClassName()}
        >
          <div className="tarjeta-qr__content">
            {activeComponent === "inicio" ? (
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
                colorCuaternario={colorCuaternario}
                carruselLinks={carruselLinks}
                footerAfterStyles={footerAfterStyles}
                subtitles={subtitles}
              />
            ) : activeComponent === "carrusel" ? (
              <Carrusel
                CarruselLinks={carruselLinks}
                colorPrimario={colorPrimario}
                colorPrimarioTransparente={colorPrimarioTransparente}
                colorSecundario={colorSecundario}
                colorTerciario={colorTerciario}
                colorCuaternario={colorCuaternario}
              />
            ) : (
              <ProductList />
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default TarjetasQr;