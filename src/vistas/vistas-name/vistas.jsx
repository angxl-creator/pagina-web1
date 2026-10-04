import Moleculas from '../../componentes/Moleculas/name';
import { PARTE1, PARTE3, PARTE2, PARTE4, PARTE5, Imagen, PARTE6, PARTE7} from '../../componentes/Organismos/name';
import './vistas.css';

function Vista() {
  return (
    <>
      <Moleculas />
      <PARTE1 />
      <PARTE2 />
      <PARTE3 />
      <PARTE4 />
      <PARTE5 />
      <Imagen />
      <PARTE6 />
      <PARTE7/>
    </>
  );
}

export default Vista;