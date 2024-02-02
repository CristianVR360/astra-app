import React from 'react';
import './header.css'; // Asegúrate de que la ruta del CSS es correcta

function Header() {
  return (
    <header className="header">
      <div className="header__background">
        <div className="header__overlay"></div>
        <iframe title="background Astra360"  
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
       
        <button className="glow-on-hover nav__link" onClick={() => window.open('https://wa.me/+56984305751', '_blank')}>
  CONTACTO
</button>


        </ul>
      </nav>
    </header>
  );
}

export default Header;
