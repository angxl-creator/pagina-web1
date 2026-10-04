import './name.css';

export function MenuButton({ open, handleClick }) {
  return (
    <>
      <button
        className="menu-btn"
        onClick={handleClick}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        <span className={`linea ${open ? "abierta" : ""}`}></span>
        <span className={`linea ${open ? "abierta" : ""}`}></span>
        <span className={`linea ${open ? "abierta" : ""}`}></span>
        <span className={`linea ${open ? "abierta" : ""}`}></span>
      </button>
    </>
  );
}