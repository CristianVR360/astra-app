import React, { useState } from 'react';
import './Portafolio.css';
import NualartLogo from '../../Assets/img/logos/nualartlogo.jpg';
import OneWaiteLogo from '../../Assets/img/logos/onewaitelogo.png'
import HelveticaLogo from '../../Assets/img/logos/logohelvetica.png'
import TascoLogo from '../../Assets/img/logos/tascologo.png'
const Portfolio = () => {
  const [cards, setCards] = useState([
    { id: 1, title: '', projects: [{ name: 'PONTEVEDRA', link: 'link1' }, { name: 'Proyecto 5', link: 'link3' }], buttonText: 'Ver proyectos', bgImage: NualartLogo },
    { id: 2, title: 'PUERTO MAYOR', projects: [{ name: 'CONDOMINIO ARAGÓN', link: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/PuertoMayor/PilotoAragon/index.html' }, { name: 'CATALUÑA', link: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/TourVirtual/Catalu%C3%B1a+Casa+Piloto/Catalu%C3%B1a+Casa+Piloto/index.html' }, { name: 'ALWE LAFQUÉN', link: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/outputAlwe2022/index.html' }], buttonText: 'Explorar', bgImage: '' },
    { id: 3, title: '', projects: [{ name: 'PUCÓN ANDINO', link: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/OneWaite/PuconAndino/output/index.html' }, { name: 'INFINITY', link: 'https://my.matterport.com/show/?m=5eRVz5UfPji' }, { name: '', link: 'link7' }], buttonText: 'Más información', bgImage: OneWaiteLogo },
    { id: 4, title: '', projects: [{ name: 'Proyecto 10', link: 'link8' }, { name: 'Proyecto 11', link: 'link9' }, { name: 'Proyecto 12', link: 'link10' }], buttonText: 'Descubrir', bgImage: HelveticaLogo },
    { id: 5, title: '', projects: [{ name: 'Proyecto 13', link: 'link11' }, { name: 'Proyecto 14', link: 'link12' }, { name: 'Proyecto 15', link: 'link13' }], buttonText: 'Visitar', bgImage: TascoLogo },
    { id: 6, title: 'PROXIMAMENTE', projects: [{ name: 'Proyecto 16', link: 'link14' }, { name: 'Proyecto 17', link: 'link15' }, { name: 'Proyecto 18', link: 'link16' }], buttonText: 'Conocer más', bgImage: '' },
  ]);

  const handleButtonTextChange = (cardId, newText) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, buttonText: newText } : card
      )
    );
  };

 // const handleBackgroundImageChange = (cardId, imageUrl) => {
    //setCards((prevCards) =>
     // prevCards.map((card) =>
       // card.id === cardId ? { ...card, bgImage: imageUrl } : card
     // )
    //);
 // };

  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <h1 className="portfolio-title">Portafolio de inmobiliarias</h1>
        <div className="card-container">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <div className="card-inner">
                <div className="card-front" style={{ backgroundImage: `url(${card.bgImage})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <div className="card-back">
                  <ul style={{ textAlign: 'center' }}>
                    {card.projects.map((project, index) => (
                      <li key={index}>
                        <a href={project.link}>{project.name}</a>
                      </li>
                    ))}
                  </ul>
                  <div className="card-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input
                      type="text"
                      value={card.buttonText}
                      onChange={(e) => handleButtonTextChange(card.id, e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
