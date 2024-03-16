import React from 'react';
import styles from './LandingProyectos.module.css';

const LandingPage = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  cardContent,
  videoThumbnail,
  formTitle,
}) => {
  return (
    <div className={styles['landing-page__container']}>
      <div
        className={styles['landing-page__hero-section']}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})` }}
      >
        <h1 className={styles['landing-page__hero-title']}>{heroTitle}</h1>
        <p className={styles['landing-page__hero-subtitle']}>{heroSubtitle}</p>
      </div>
      <section className={styles['landing-page__content-section']}>
        <div className={styles['landing-page__card']}>
          <h2>{cardContent.title}</h2>
          <p>{cardContent.description}</p>
        </div>
        <div className={styles['landing-page__video-container']}>
          <img
            src={videoThumbnail}
            alt="Video Thumbnail"
            className={styles['landing-page__video-thumbnail']}
          />
          <div className={styles['landing-page__play-icon']}>&#9658;</div>
        </div>
        <div className={styles['landing-page__form-container']}>
          <h2>{formTitle}</h2>
          <form>
            {/* Campos del formulario */}
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <textarea placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;