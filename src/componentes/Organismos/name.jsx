import { useState } from "react";
import './name.css';
import ENC from '../../assets/images/ENC.jpg';
import PROD1 from '../../assets/images/PROD1.jpg';
import PROD2 from '../../assets/images/PROD2.jpg';
import PROD3 from '../../assets/images/PROD3.jpg';
import PROD4 from '../../assets/images/PROD4.jpg';
import LOGO from '../../assets/images/LOGO.png';
import ESPONJA from '../../assets/images/imagespt3/ESPONJA.png';
import FIGURA2 from '../../assets/images/imagespt3/FIGURA2.png';
import MENTA from '../../assets/images/imagespt3/MENTA.png';
import NUEZ from '../../assets/images/imagespt3/NUEZ.png';
import PRINCESA from '../../assets/images/imagespt3/PRINCESA.png';
import PURPURA from '../../assets/images/imagespt3/PURPURA.png';
import BARRACH from '../../assets/images/imagespt3/BARRACH.png';
import DUQUESA from '../../assets/images/imagespt3/DUQUESA.png';
import ENANO from '../../assets/images/imagespt3/ENANO.png';
import FTVIEJA from '../../assets/images/imagespt4/FTVIEJA.jpg';
import TIENDA from '../../assets/images/imagespt4/TIENDA.jpg';
import BISCOCH from '../../assets/images/imagespt4/BISCOCH.jpg';
import DONAS from '../../assets/images/imagespt4/DONAS.jpg';
import PT5 from '../../assets/images/imagespt5/PT5.png';
import ANTOJO from '../../assets/images/imagespt6/ANTOJO.png';
import LOVE from '../../assets/images/imagespt6/LOVE.png';
import GIFT from '../../assets/images/imagespt6/GIFT.png';
import IMG1 from '../../assets/images/imagespt6/IMG1.jpg';
import IMG2 from '../../assets/images/imagespt6/IMG2.jpg';
import IMG3 from '../../assets/images/imagespt6/IMG3.jpg';
import IMG4 from '../../assets/images/imagespt6/IMG4.jpg';
import IMG5 from '../../assets/images/imagespt6/IMG5.jpg';
import IMG6 from '../../assets/images/imagespt6/IMG6.jpg';
import IMG7 from '../../assets/images/imagespt6/IMG7.jpg';
import IMG8 from '../../assets/images/imagespt6/IMG8.jpg';


function PARTE1() {
  return (
    <section className="hero">
      <img src={ENC} alt="Chocolate Costanzo 70% cacao" />
      <div className="hero-texto">
        <p>EL NUEVO E</p>
        <h1>IRRESISTIBLE SABOR</h1>
      </div>
    </section>
  );
}

function PARTE2() {
  return (
    <section className="variedad">
      <p className="variedad-subtitulo">CONOCE NUESTRA</p>
      <h2 className="variedad-titulo1">
        DELICIOSA Y SURTIDA <span className="variedad-destacado">Variedad</span>
      </h2>
      <div className="variedad-productos">
        <div className="producto">
          <img src={PROD1} alt="Producto 1" />
          <p>Chocolates envueltos, sin envolver y semillas cubiertas</p>
        </div>
        <div className="producto">
          <img src={PROD2} alt="Producto 2" />
          <p>Caramelos, chiclosos, jaleas y gomitas</p>
        </div>
        <div className="producto">
          <img src={PROD3} alt="Producto 3" />
          <p>Piezas, presentaciones, tablillas y bolsas</p>
        </div>
        <div className="producto">
          <img src={PROD4} alt="Producto 4" />
          <p>Temporalidades</p>
        </div>
      </div>
    </section>
  );
}

function PARTE3() {
  const productos = [
    { img: ESPONJA, texto: "Esponja. Suave malvavisco cubierto de chocolate amargo. Lo puedes encontrar en sabores fresa, naranja, limón y natural." },
    { img: FIGURA2, texto: "Figuras. Tradicional chocolate macizo semiamargo" },
    { img: MENTA, texto: "Menta Blanca. Delicioso caramelo aireado sabor menta" },
    { img: NUEZ, texto: "Nuez Encanelada. Sabrosa nuez cubierta con jarabe de cajeta y canela" },
    { img: PRINCESA, texto: "Princesa de Fresa. Bombón de chocolate amargo relleno de fondant y jalea. También la puedes encontrar en sabores limón y naranja." },
    { img: PURPURA, texto: "Púrpura y Oro. Exquisito chocolate crocante relleno de cacahuate y cubierto de delicioso chocolate" },
    { img: BARRACH, texto: "Tornillo. Delicioso chocolate macizo con leche" },
    { img: DUQUESA, texto: "Duquesa. Irresistible sandwich de galleta relleno de jalea de frutas con cubierta de chocolate " },
    { img: ENANO, texto: "Enano. Divertida y rica tablilla de chocolate con leche" }
  ];

  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice(indice === 0 ? productos.length - 1 : indice - 1);
  };

  const siguiente = () => {
    setIndice(indice === productos.length - 1 ? 0 : indice + 1);
  };

  return (
    <section className="PARTE3">
      <h2 className="variedad-titulo2">
        <img src={LOGO} alt="LOGO2" className="LOGO2" />
        LOS FAVORITOS Y <span className="variedad-destacado">CONSENTIDOS</span>
      </h2>

      <p className="parraff">Contamos con una gran variedad de ricos dulces y chocolates que
        encantan a chicos y grandes desde hace más de 92 años, pero siempre
        en nuestros corazones y paladares contamos con nuestros favoritos
        por excelencia que nos hacen sentir esa dulzura y tradición que nos
        recuerda nuestros mejores momentos.
      </p>
      <div className="carrusel">
        <button onClick={anterior} className="flecha">‹</button>
        <div className="producto">
          <img src={productos[indice].img} alt={`Producto ${indice + 1}`} />
          <p>{productos[indice].texto}</p>
        </div>
        <button onClick={siguiente} className="flecha">›</button>
      </div>
    </section>
  );
}

function PARTE4() {
  return (
    <section className="HISTORIA">
      <p className="HISTORIA-subtitulo">92 años llevando sabor desde</p>
      <h2 className="variedad-titulo3">
        <span className="variedad-destacado">SAN LUIS POTOSI</span>
        <div alt="TXT" />
        <p className="TTTT">Somos una empresa honesta con valores familiares, apasionados por los dulces y chocolates. Utilizando recetas originales y tradicionales que han formado identidad a lo largo de los últimos 92 años. Buscamos ofrecer una atención personalizada y aplicar estrategias innovadoras y exitosas.</p>
      </h2>
      <button className="HIS-boton">LEER MAS</button>
      <img src={FTVIEJA} alt="imghis" />
      <img src={TIENDA} alt="imghis" />

      <p className="subtt">Descubre nuestras</p>
      <span className="variedad-destacado">Deliciosas recetas</span>

      <section className="recetas">
        <div className="imagen-con-texto">
          <img src={BISCOCH} alt="imgrec" />
          <div className="texto-overlay">
            <h2>Biscochitos De Plátano Con Tornillo</h2>
          </div>
        </div>

        <div className="imagen-con-texto">
          <img src={DONAS} alt="imgrec" />
          <div className="texto-overlay">
            <h2>Donas Rellenas De Figuritas</h2>
          </div>
        </div>


        <button className="HIS-boton">VER MAS</button>
      </section>
    </section>
  );
}

function PARTE5() {
  return (
    <section className="FRASE">
      <h1 className="signo">"</h1>
      <h1 className="FR">ESTAMOS SIEMPRE EVOLUCIONANDO, PARA LLEVAR EL DELICIOSO SABOR Y PASIÓN POR LOS DULCES A MÁS LUGARES DEL PAÍS. SIEMPRE CONSERVANDO SU CALIDAD Y TRADICIÓN.</h1>
      <p className="FR2">Don Jose Constanzo</p>
    </section>
  );
}

function Imagen() {
  return (
    <section className="Contenedor-Imagen">
      <img src={PT5} alt="FT1" className="FT1" />
    </section>
  );
}

function PARTE6() {
  return (
    <section className="CH">
      <h1 className="sub">Chocolates constanzo</h1>
      <h1 className="T1">DULZURA Y TRADICION PARA CADA</h1>
      <h1 className="FE">OCASION</h1>

      <div className="images">
        <img src={ANTOJO} alt="SS" />
        <div className="texto-OV">
          <h2>PARA EL ANTOJO</h2>
        </div>

        <img src={LOVE} alt="SS" />
        <div className="texto-OV">
          <h2>PARA ENAMORAR</h2>
        </div>

        <img src={GIFT} alt="SS" />
        <div className="texto-OV">
          <h2>PARA REGALAR</h2>
        </div>

        <div className="images2">
          <img src={IMG1} alt="im" />
          <img src={IMG2} alt="im" />
          <img src={IMG3} alt="im" />
          <img src={IMG4} alt="im" />
          <img src={IMG5} alt="im" />
          <img src={IMG6} alt="im" />
          <img src={IMG7} alt="im" />
          <img src={IMG8} alt="im" />
          <div />

        </div>
      </div>
    </section>
  );
}

function PARTE7() {
  return (
    <section className="PT7">
      <img src={LOGO} alt="ii" />


      <h1 className="TU">Index</h1>
      <h2>Producutos</h2>
      <h2>Favoritos</h2>
      <h2>Historia</h2>
      <h2>Contacto</h2>
      <h2>Ubica tu tienda</h2>

      <h1 className="TU">Los Favoritos</h1>
      <h2>Tornillo</h2>
      <h2>Princesa</h2>
      <h2>Duquesa</h2>
      <h2>Envinados</h2>
      <h2>Purpura y Oro Envuelto</h2>

      <h2>Nuez encanelada</h2>
      <h2>Esponjas</h2>
      <h2>Figuras</h2>
      <h2>Menta Blanca</h2>
      <h2>Enano</h2>

      <h1 className="TU">Sugerencias</h1>
      <h3>Escríbenos y cuentanos tus ideas o inquietudes, recetas.</h3>
      <h3>Introduce tu correo electronico.</h3>
    </section>
  );
}


export { PARTE1, PARTE2, PARTE3, PARTE4, PARTE5, Imagen, PARTE6, PARTE7 };
