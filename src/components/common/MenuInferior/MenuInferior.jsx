import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faTag, faBars } from '@fortawesome/free-solid-svg-icons';

import InformacionModal from '../InformacionModal/InformacionModal';
import PromocionesModal from '../PromocionesModal/PromocionesModal';
import './MenuInferior.css';

const MenuInferior01 = ({ toggleModal }) => {
    const [isInformacionOpen, setIsInformacionOpen] = useState(false);
    const [isPromocionesOpen, setIsPromocionesOpen] = useState(false);

    const toggleInformacion = () => {
        setIsInformacionOpen(!isInformacionOpen);
        setIsPromocionesOpen(false); // Cierra Promociones si está abierto
    };

    const togglePromociones = () => {
        setIsPromocionesOpen(!isPromocionesOpen);
        setIsInformacionOpen(false); // Cierra Información si está abierto
    };

    const closeAllModals = () => {
        setIsInformacionOpen(false);
        setIsPromocionesOpen(false);
    };

    return (
        <div className="menu">
            <div className="menu__button" onClick={closeAllModals}>
                <FontAwesomeIcon icon={faHome} className="menu__icon" /><span className="menu__text">Home</span>
            </div>
            <div className="menu__button" onClick={toggleInformacion}>
                <FontAwesomeIcon icon={faInfo} className="menu__icon" /><span className="menu__text">Información</span>
            </div>
            <div className="menu__button" onClick={togglePromociones}>
                <FontAwesomeIcon icon={faTag} className="menu__icon" /><span className="menu__text">Promociones</span>
            </div>
            
            <div className="menu__separator">|</div>
            <div className="menu__button" onClick={toggleModal}>
                <FontAwesomeIcon icon={faBars} /> <span className="menu__text">Menu</span>
            </div>

            {isInformacionOpen && <InformacionModal close={toggleInformacion} />}
            {isPromocionesOpen && <PromocionesModal close={togglePromociones} />}
        </div>
    );
};

export default MenuInferior01;
