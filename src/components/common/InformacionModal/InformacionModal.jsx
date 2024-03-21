// InformacionModal.js
import React from 'react';

const InformacionModal = ({ close }) => (
    <div className="informacion-modal">
        <button onClick={close}>Cerrar</button>
        {/* Contenido del modal de Información */}
    </div>
);

export default InformacionModal;

