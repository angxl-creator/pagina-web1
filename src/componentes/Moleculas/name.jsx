import { useState } from 'react';
import './name.css';
import { MenuButton } from '../Atomos/name';
import ENC from '../../assets/images/ENC.jpg';
import LOGO from '../../assets/images/LOGO.png';

function Moleculas() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="ENCAB">
        <img src={LOGO} alt="Logo" className="logo" />
        <MenuButton open={open} handleClick={() => setOpen(!open)} />
      </div> 

    </>
  );
}

export default Moleculas;