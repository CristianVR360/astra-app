import React from 'react';
import AstraComponent from './components/astra/AstraComponent'; // Ejemplo de componente Astra
import ChaignalPage from './components/chaignal/ChaignalPage'; // Ejemplo de componente Chaignal
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.css';

function App() {
  // Lógica para decidir qué componente renderizar basado en la ruta
  // Esto es un ejemplo y debería ser reemplazado por tu lógica específica
  const route = window.location.pathname;
  let ContentComponent = AstraComponent; // El componente por defecto

  if (route.includes('/chaignal')) {
    ContentComponent = ChaignalPage;
  }

  return (
    <div className="App">
      <Header />
      <ContentComponent />
      <Footer />
    </div>
  );
}

export default App;
