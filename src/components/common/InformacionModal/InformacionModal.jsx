// InformacionModal.jsx
import React, { useState } from 'react';
import './InformacionModal.css'; // Asegúrate de que la ruta sea correcta y que el archivo exista

const InformacionModal = ({ brochureUrl, close }) => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <div className="info-modal-overlay">
        <div className="modal-container">
            <div className="cerrar-btn" onClick={close}>
                {/* Aquí puedes poner texto o un ícono para cerrar si no quieres usar FontAwesome */}
                Cerrar
            </div>
            {loading && (
                <div className="loader-container">
                    {/* Aquí puedes poner tu pantalla de carga, por ejemplo, un spinner */}
                    <div className="loader"></div>
                </div>
            )}
            <div className="iframe-container">
                {/* Utiliza el enlace modificado para incrustar */}
                <iframe
                    title="Brochure"
                    src={brochureUrl}
                    frameBorder="0"
                    style={{ width: '100%', height: '100%' }}
                    onLoad={handleLoad}
                ></iframe>
                
            </div>
        </div>
        </div>
    );
};

export default InformacionModal;
