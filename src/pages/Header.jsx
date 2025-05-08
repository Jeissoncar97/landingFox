import { Link } from 'react-router-dom';
import LogoDesktop from '../assets/images/LogoDesktop.svg';
import Navbar from './Navbar';


function Header() {
  return (
    <div>
      <div className="w-full bg-primary place-content-center flex div-sucio-css relative">

        <div className="flex w-full justify-between max-w-5xl p-2">
          <Link to="/">
            <img src={LogoDesktop} alt="Logo" className="w-40 bg-primary" />
          </Link>
          <Navbar />
        </div>
      </div>

      <div className="text-center mt-6">
        <a className="px-8 py-2 text-xl text-white bg-primary" 
          target="_blank"
          rel="noopener noreferrer" 
          href="https://wa.me/573227576963">ORDENA AQUÍ
        </a>
      </div>
    </div>
  );
}

export default Header;
