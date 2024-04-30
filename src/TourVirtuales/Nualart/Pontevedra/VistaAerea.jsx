import React from 'react';

const VistaAerea = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/a%C3%A9rea/output/index.html"
        title="Vista Aérea Pontevedra"
        frameborder="0"
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default VistaAerea;