import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const FooterProyectosInmobiliarios = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h4>Contacto</h4>
            <p>Dirección: Calle Principal, Ciudad</p>
            <p>Teléfono: 123-456-7890</p>
            <p>Email: info@proyectosinmobiliarios.com</p>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociales</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Facebook</a></li>
              <li><a href="#" className="text-light">Twitter</a></li>
              <li><a href="#" className="text-light">Instagram</a></li>
              <li><a href="#" className="text-light">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Enlaces Útiles</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Nosotros</a></li>
              <li><a href="#" className="text-light">Proyectos</a></li>
              <li><a href="#" className="text-light">Servicios</a></li>
              <li><a href="#" className="text-light">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-2">
        <div className="container">
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} Proyectos Inmobiliarios - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterProyectosInmobiliarios;
