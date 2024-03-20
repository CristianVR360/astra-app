import React, { Suspense, lazy } from 'react'; // Estas son las importaciones estáticas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Importación de estilos al principio

// Aquí comienzan las importaciones dinámicas, correctas en su lugar dentro del cuerpo del módulo
const AstraComponent = lazy(() => import('./components/astra/AstraComponent'));

const LosTordosPage = lazy(() => import('./components/Proyectos-Inmobiliarios/los-tordos/LosTordosPage'));
const OrtSlider = lazy(() => import('./components/common/OrtSlider/OrtSlider'));
const PropuestaFuga = lazy(() => import('./components/Propuesta fuga/PropuestaFuga'));
const LosChiquillanesPage = lazy(() => import('./components/Proyectos-Inmobiliarios/los-chiquillanes/LosChiquillanesPage'));
const MarketingCampaignLosTordos = lazy(() => import('./components/Proyectos-Inmobiliarios/los-tordos/MarketingCampaignLosTordos'));
const ParcelasChaignal = lazy(() => import('./components/Proyectos-Inmobiliarios/parcelas-chaignal/ParcelasChaignal'));
const HaciendaZapallar = lazy(() => import('./components/Proyectos-Inmobiliarios/hacienda-zapallar/HaciendaZapallarpage'));
function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<AstraComponent />} />
           
            <Route path="/los-tordos" element={<LosTordosPage />} />
            <Route path="/ortslider" element={<OrtSlider/>}/>
            <Route path="/propuesta-fuga" element={<PropuestaFuga/>}/>
            <Route path="/los-chiquillanes" element={<LosChiquillanesPage/>}/>
            <Route path="/landing-los-tordos" element={<MarketingCampaignLosTordos/>}/>
            <Route path="/parcelas-chaignal" element={<ParcelasChaignal/>}/>
            <Route path="/hacienda-zapallar" element={<HaciendaZapallar/>}/>
            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
