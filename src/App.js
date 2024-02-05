import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AstraComponent from './components/astra/AstraComponent'; // Ejemplo de componente Astra
import ChaignalPage from './components/Proyectos-Inmobiliarios/chaignal/ChaignalPage';
import LosTordosPage from './components/Proyectos-Inmobiliarios/los-tordos/LosTordosPage'; // Asegúrate de que el nombre del import coincida con el nombre del archivo y export

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AstraComponent />} />
          <Route path="/chaignal" element={<ChaignalPage />} />
          <Route path="/los-tordos" element={<LosTordosPage />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
