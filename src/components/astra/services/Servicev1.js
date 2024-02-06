import React from 'react';
import './services.css'; // Asegúrate de que la ruta del CSS es correcta
import inmobiliariaImage from '../../img/cards/inmobiliaria.jpg';

function Services() {
  return (
    <section className="services">
      <h1 id="services" className="services__title">Nuestros Servicios</h1>
      <article className="card">
        <img
          className="card__background"
          src={inmobiliariaImage} 
          alt="Tour Virtual Inmobiliarias"
          width="1920"
          height="2193"
        />
        <div className="card__content card__content--services">
          <div className="card__content--container">
            <h2 className="card__title card__title--services">Tour Virtual Inmobiliarias</h2>
            <p className="card__description card__description--services">
              Crea un gemelo digital de tu proyecto; desde una vista aérea en 360 grados para geolocalizar comercios y servicios, hasta espacios interiores, amenities y tipologías.
            </p>
          </div>
          <button className="card__button card__button--services" onClick={() => { /* Función para abrir popup */ }}>
            Ver Ejemplo
          </button>
        </div>
      </article>

      <article className="card">
        <img
          className="card__background"
          src="/recursos/img/cards/inmobiliaria.jpg"
          alt="Tour Virtual Inmobiliarias"
          width="1920"
          height="2193"
        />
        <div className="card__content card__content--services">
          <div className="card__content--container">
            <h2 className="card__title card__title--services">Tour Virtual Inmobiliarias</h2>
            <p className="card__description card__description--services">
              Crea un gemelo digital de tu proyecto; desde una vista aérea en 360 grados para geolocalizar comercios y servicios, hasta espacios interiores, amenities y tipologías.
            </p>
          </div>
          <button className="card__button card__button--services" onClick={() => { /* Función para abrir popup */ }}>
            Ver Ejemplo
          </button>
        </div>
      </article>

      <article className="card">
        <img
          className="card__background"
          src="/recursos/img/cards/inmobiliaria.jpg"
          alt="Tour Virtual Inmobiliarias"
          width="1920"
          height="2193"
        />
        <div className="card__content card__content--services">
          <div className="card__content--container">
            <h2 className="card__title card__title--services">Tour Virtual Inmobiliarias</h2>
            <p className="card__description card__description--services">
              Crea un gemelo digital de tu proyecto; desde una vista aérea en 360 grados para geolocalizar comercios y servicios, hasta espacios interiores, amenities y tipologías.
            </p>
          </div>
          <button className="card__button card__button--services" onClick={() => { /* Función para abrir popup */ }}>
            Ver Ejemplo
          </button>
        </div>
      </article>

      <article className="card">
        <img
          className="card__background"
          src="/recursos/img/cards/inmobiliaria.jpg"
          alt="Tour Virtual Inmobiliarias"
          width="1920"
          height="2193"
        />
        <div className="card__content card__content--services">
          <div className="card__content--container">
            <h2 className="card__title card__title--services">Tour Virtual Inmobiliarias</h2>
            <p className="card__description card__description--services">
              Crea un gemelo digital de tu proyecto; desde una vista aérea en 360 grados para geolocalizar comercios y servicios, hasta espacios interiores, amenities y tipologías.
            </p>
          </div>
          <button className="card__button card__button--services" onClick={() => { /* Función para abrir popup */ }}>
            Ver Ejemplo
          </button>
        </div>
      </article>

      {/* Repetir para los demás artículos 'card' con su respectiva información */}
    </section>
  );
}

export default Services;
