import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-primary p-4 content-center">
      <div className="flex justify-between items-center">
        {/* Botón hamburguesa */}
        <button onClick={toggleMenu} className="text-white text-3xl md:hidden focus:outline-none">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Menú */}
      <div className={`flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <Link
          className="text-lg p-2 text-white border-b-2 border-transparent hover:border-white transition-all duration-200"
          to="/"
          onClick={closeMenu}
        >
          INICIO
        </Link>
        <Link
          className="text-lg p-2 text-white border-b-2 border-transparent hover:border-white transition-all duration-200"
          to="/about"
          onClick={closeMenu}
        >
          ACERCA DE NOSOTROS
        </Link>
        <Link
          className="text-lg p-2 text-white border-b-2 border-transparent hover:border-white transition-all duration-200"
          to="/contact"
          onClick={closeMenu}
        >
          CONTACTO
        </Link>
        <Link
          className="text-lg p-2 text-white border-b-2 border-transparent hover:border-white transition-all duration-200"
          to="/menu"
          onClick={closeMenu}
        >
          MENÚ
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
