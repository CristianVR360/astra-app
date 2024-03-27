import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt,  faBars } from '@fortawesome/free-solid-svg-icons';

import InformacionModal from '../InformacionModal/InformacionModal';

import './MenuInferior.css';

const MenuInferior01 = ({ brochureUrl, toggleModal }) => {
    const [isInformacionOpen, setIsInformacionOpen] = useState(false);
   

    const toggleInformacion = () => {
        setIsInformacionOpen(!isInformacionOpen);
       
    };


    const closeAllModals = () => {
        setIsInformacionOpen(false);
        
    };

    return (

        <div className="navegador01-container"> 
        <div className="navegador01">
        <div className="navegador01__button" onClick={closeAllModals}>
            <FontAwesomeIcon icon={faHome} className="navegador01__icon" /><span className="navegador01__text">Home</span>
        </div>
        
        <div className="navegador01__button" onClick={toggleInformacion}>
            <FontAwesomeIcon icon={faFileAlt} className="navegador01__icon" /><span className="navegador01__text">Brochure</span>
        </div>
        
    
        <div className="navegador01__separator">|</div>
        <div className="navegador01__button" onClick={toggleModal}>
            <FontAwesomeIcon icon={faBars} /> <span className="navegador01__text">Menu</span>
        </div>
    
        
       
    </div>
    {isInformacionOpen && <InformacionModal brochureUrl={brochureUrl} close={toggleInformacion} />}

    </div>
    );
};

export default MenuInferior01;
