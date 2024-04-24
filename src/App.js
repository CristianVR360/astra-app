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
const Lomas7tazas = lazy(() => import('./components/Proyectos-Inmobiliarios/lomas-sietetazas/lomas-sietetazasPage'));
const VogelHuaus = lazy(() => import('./components/Proyectos-Inmobiliarios/vogel-haus/VogelHaus'));
const ParcelasVillarrica = lazy(() => import('./pages/ParcelasVillarrica/ParcelasVillarrica'));
const KarolFarias = lazy(() => import('./pages/KarolFarias/KarolFarias'));
const Kairos = lazy(() => import('./pages/Kairos/Kairos'));
const NicolasPortiño = lazy(() => import('./pages/NicolasPortiño/NicolasPortiño'));
const Astra360Drone = lazy(() => import('./pages/Astra360Drone/AstraDrone'));
const TasadorInmobiliario = lazy(() => import('./pages/TasadorInmobiliario/TasadorInmobiliario'));//EMDO
const TecnoAraucania = lazy(() => import('./pages/TecnoAraucania/TecnoAraucania'));//EMDO
const TranquesChile = lazy(() => import('./pages/TranquesChile/TranquesChile'));
const HtVilcun = lazy(() => import('./pages/HtVilcun/HtVilcun'));
const Astra360TourVirtual = lazy(() => import('./pages/Astra360TourVirtual/Astra360TourVirtual'));

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
            <Route path="/lomas-sietetazas" element={<Lomas7tazas/>}/>
            <Route path="/vogelHaus" element={<VogelHuaus/>}/>
            <Route path="/ParcelasVillarrica" element={<ParcelasVillarrica/>}/>
            <Route path="/KarolFarias" element={<KarolFarias/>}/>
            <Route path="/Kairos" element={<Kairos/>}/>
            <Route path="/NicolasPortiño" element={<NicolasPortiño/>}/>
            <Route path="/Astra360Drone" element={<Astra360Drone/>}/>
            <Route path="/TasadorInmobiliario" element={<TasadorInmobiliario/>}/>
            <Route path="/TecnoAraucania" element={<TecnoAraucania/>}/>
            <Route path="/TranquesChile" element={<TranquesChile/>}/>
            <Route path="/HtVilcun" element={<HtVilcun/>}/>
            <Route path="/Astra360TourVirtual" element={<Astra360TourVirtual/>}/>

            {/* Puedes agregar más rutas aquí */}

           

          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
