// PromocionesModal.js
import React from 'react';

const PromocionesModal = ({ close }) => (
    <div className="promociones-modal">
        <button onClick={close}>Cerrar</button>
        {/* Contenido del modal de Promociones */}
    </div>
);

export default PromocionesModal;
