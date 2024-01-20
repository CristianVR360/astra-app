import React from 'react';
import './ContactForm.css'; // Asegúrate de importar el CSS correctamente

function ContactForm() {
    return (
        <div id="contact" className="contact-form">
            <h2 className="contact-form__title">Contacto</h2>
            
            <form action="https://formspree.io/f/mleqraeb" method="POST" className="contact-form__form">
                <div className="contact-form__group">
                    <label htmlFor="name" className="contact-form__label">Nombre:</label>
                    <input type="text" id="name" name="name" className="contact-form__input" required />
                </div>
                
                <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" className="contact-form__input" required />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="phone" className="contact-form__label">Número Telefónico:</label>
                  <input type="tel" id="phone" name="phone" className="contact-form__input" required />
                </div>
                
                <div className="contact-form__group">
                    <label htmlFor="message" className="contact-form__label">Mensaje:</label>
                    <textarea id="message" name="message" rows="4" className="contact-form__textarea" required></textarea>
                </div>
                
                <button type="submit" className="contact-form__button">Enviar Mensaje</button>
            </form>
        </div>
    );
}

export default ContactForm;
