// InformacionModal.jsx
import React from 'react';
import './InformacionModal.css'; // Asegúrate de que la ruta sea correcta y que el archivo exista

const InformacionModal = ({ close }) => (
    <div className="modal-container">
        <div className="cerrar-btn" onClick={close}>
            {/* Aquí puedes poner texto o un ícono para cerrar si no quieres usar FontAwesome */}
            Cerrar
        </div>
        <div className="iframe-container">
            {/* Utiliza el enlace modificado para incrustar */}
            <iframe src="https://drive.google.com/file/d/1Xayi96nOm4dFgQF1AG4Edmynb_-q24cv/preview" frameBorder="0" style={{width: '100%', height: '100%'}}></iframe>
        </div>
    </div>
);

export default InformacionModal;
