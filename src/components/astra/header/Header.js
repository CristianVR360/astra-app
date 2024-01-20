import React from 'react';
import './header.css'; // Asegúrate de que la ruta del CSS es correcta

function Header() {
  return (
    <header className="header">
      <div className="header__background">
        <div className="header__overlay"></div>
        <iframe 
          src="https://s3.sa-east-1.amazonaws.com/cristian.tv360/astra360/bkgwebsite/index.html" 
          frameborder="0" 
          className="header__iframe">
        </iframe>
      </div>
      <div className="header__content">
        <img src="/Logo-astra.png" alt="Logo Astra360" className="header__logo" />
        <h3>Marketing Inmobiliario Digital </h3>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
       
          <li className="nav__item"><a href="/#contact" className="nav__link">CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
