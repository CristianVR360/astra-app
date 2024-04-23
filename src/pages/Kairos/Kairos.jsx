import React from 'react';
import TarjetasQr from '../TarjetasQr/TarjetasQr';

import logo from '../../Assets/img/logos/logokairos.png';
import backgroundImage from '../../Assets/img/backgroundsimg/kairos.jpg';
import video1 from '../../Assets/video/reels/kairos/kairos1.mp4'
import video2 from '../../Assets/video/reels/kairos/kairos2.mp4';
import video3 from '../../Assets/video/reels/kairos/kairos3.mp4';
import fija1 from '../../Assets/video/reels/fija01.jpg'
import fija2 from '../../Assets/video/reels/fija02.jpg'
import fija3 from '../../Assets/video/reels/fija03.jpg'


const subtitles = [
  "Estimula la Imaginación y el Aprendizaje.",
  "Juguetes Educativos para Cada Etapa de Desarrollo.",
  "Calidad y Seguridad en Cada Producto.",
  "Descubre Nuestras Ofertas Especiales."
];

const CarruselLinks = [
  {
    url: 'https://example.com/56950830673',
    image: "",
    videoUrl: video1,
    title: 'Bloques de Construcción Magnéticos | Juguete Educativo STEM Descripción.',
    subtitle:'',
    description: 'Nuestros bloques de construcción magnéticos fomentan la creatividad y las habilidades STEM en niños de 3 a 8 años. Con piezas de colores vibrantes y fáciles de ensamblar, este juguete educativo promueve la resolución de problemas, la coordinación mano-ojo y la imaginación. Seguro, duradero y perfecto para el aprendizaje a través del juego.',
  },
  {
    url: 'https://example.com/link2',
    image: "",
    videoUrl: video2,
    title: 'Rompecabezas de Madera | Juguete Didáctico para Desarrollo Cognitivo Descripción.',
    subtitle:'',
    description: 'Nuestros rompecabezas de madera son ideales para estimular el desarrollo cognitivo en niños de 2 a 5 años. Con diseños atractivos y piezas de calidad, estos juguetes didácticos ayudan a mejorar la concentración, la motricidad fina y el reconocimiento de formas y colores. Una opción clásica y efectiva para el aprendizaje temprano.',
  },
  {
    url: 'https://example.com/link3',
    image: "",
    videoUrl: video3,
    title: 'Juego de Mesa Educativo | Aprende Mientras te Diviertes en Familia Descripción.',
    subtitle:'',
    description: 'Nuestro juego de mesa educativo es perfecto para niños de 6 a 12 años y para disfrutar en familia. Con preguntas adaptadas a diferentes edades y temas variados, este juguete didáctico promueve la adquisición de conocimientos, la socialización y la sana competencia. Una forma divertida y efectiva de aprender mientras se fortalecen los lazos familiares.',
  },
];


const Kairos = () => {
  const title = 'KAIROS'; //nombre de la marca
  const description = 'Juguetes Didácticos Creativos | Aprendizaje y Diversión.';//definicion principal del servicio
  const bookButtonText = 'VER SERVICIOS';//mensaje boton 1
  const bookDescription = '';// ausente por ahora
  const consultationButtonText = 'CONTÁCTANOS';//mensaje boton 2
  const subtitle = "¡Habla con Nosotros!";//mge btn wsp
  const telefono = '+56 9 7660 1734'; //fono de footer
  const instagramLink = '#';
  const facebookLink = '#';
  const gpsLink ="";
  const urlMenu01 = "";
  const urlMenu02 = "";
  const urlMenu03 ="";
  const colorPrimario ='rgba(255, 193, 7, 1' // color de botones 
  const colorPrimarioTransparente="rgba(28, 35, 49, 0.8)"; //fondo de los servicios
  const colorSecundario="white"; //color letras
  const colorTerciario ="rgba(255, 193, 7, 1"; //color boton inactivo
  const colorCuaternario ="rgba(28, 35, 49, 1)";//color de boton activo
  const btnTittle="Servicios";
  const footerAfterStyles = {
  background: "linear-gradient(to bottom, rgba(255, 193, 7, 0) 10%, rgba(255, 193, 7, 0.1) 65%, rgba(255, 193, 7, 0.4) 70%, rgba(255, 193, 7, 1) 85%)"
  };
  const layouTypeDesk = "";


  //Paletas de colores 
      //Amarillo (Hex #FFC107, RGBA rgba(255, 193, 7, 1))
      //Azul marino (Hex #1C2331, RGBA rgba(28, 35, 49, 1))
      //Verde menta (Hex #4ECDC4, RGBA rgba(78, 205, 196, 1))
      //Naranja (Hex #FF6B6B, RGBA rgba(255, 107, 107, 1))
      //Morado (Hex #9B59B6, RGBA rgba(155, 89, 182, 1))
      //Blanco (Hex #FFFFFF, RGBA rgba(255, 255, 255, 1))

  return (
    <div className="kairos">
      <TarjetasQr
        logo={logo}
        backgroundImage={backgroundImage}
        title={title}
        description={description}
        bookButtonText={bookButtonText}
        bookDescription={bookDescription}
        consultationButtonText={consultationButtonText}
        subtitle={subtitle}
        telefono={telefono}
        instagramLink={instagramLink}
        facebookLink={facebookLink}
        urlMenu01={urlMenu01}
        urlMenu02={urlMenu02}
        urlMenu03={urlMenu03}
        gpsLink={gpsLink}
        carruselLinks={CarruselLinks}
        colorPrimario={colorPrimario}
        colorPrimarioTransparente={colorPrimarioTransparente}
        colorSecundario={colorSecundario}
        colorTerciario={colorTerciario}
        colorCuaternario={colorCuaternario}
        btnTittle={btnTittle}
        footerAfterStyles={footerAfterStyles}        
        subtitles={subtitles}

      />
    </div>
  );
};

export default Kairos;