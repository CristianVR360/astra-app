import React from 'react';
import './PromocionesModal.css'; // Asegúrate de tener este archivo CSS en tu proyecto
import backgroundImage from '../../../Assets/img/services/loteos.jpg'; // Asegúrate de que la ruta sea correcta

const PromocionesModal = () => {
    return (
        <div className="promociones-modal-overlay">
            <div className="promociones-modal">
                <header className="promociones-modal__header" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <h1 className="promociones-modal__title">Simplifica tu búsqueda: el camino más fácil hacia tu nueva propiedad.</h1>
                    <h2 className="promociones-modal__subtitle">Los Tordos de Villarrica, una inversión segura.</h2>
                </header>

                <section className="promociones-modal__benefits">
                    <p className="promociones-modal__benefits-text">
                        Disfruta de una vida tranquila y conectada con la naturaleza. Nuestro proyecto ofrece redes de agua y luz soterradas, excelente accesibilidad y la tranquilidad de estar cerca de toda la zona turística lacustre.
                    </p>
                </section>

                <section className="promociones-modal__financing">
                    <h3 className="promociones-modal__financing-title">Financiamiento Directo a tu Alcance</h3>
                    <p className="promociones-modal__financing-text">
                        Adquiere tu parcela con facilidad gracias a nuestro sistema de crédito directo. Diseñado para adaptarse a tus necesidades, este método de financiamiento te permite iniciar tu inversión de manera accesible y sin complicaciones.
                    </p>
                </section>

                <div className="promociones-modal__cta">
                    <button className="promociones-modal__cta-button" onClick={() => { /* Aquí puedes agregar la lógica para abrir WhatsApp */ }}>
                        Contacta con nosotros
                    </button>
                    <span className="promociones-modal__cta-text">y obtén un bono de 1 millón de pesos escribiendo #miparcelaenelsur</span>
                </div>
            </div>
        </div>
    );
};

export default PromocionesModal;
