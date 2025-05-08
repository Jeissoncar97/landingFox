import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrolToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Termycon from './pages/Termycon'
import Politicas from './pages/Politicas'
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu'
import Footer from './pages/Footer'
import Pvegetarianas from './pages/menuPages/Pvegetarianas'
import Ppollo from './pages/menuPages/Ppollo'
import Pcarne from './pages/menuPages/Pcarne'
import Pdulces from './pages/menuPages/Pdulces'
import Pmexicanas from './pages/menuPages/Pmexicanas'
import Lasagnas from './pages/menuPages/Lasagnas'
import Spaguettis from './pages/menuPages/Spaguettis'
import Otros from './pages/menuPages/Otros'
import Mexicano from './pages/menuPages/Mexicano'
import Hamburguesas from './pages/menuPages/Hamburguesas'
import Bebidas from './pages/menuPages/Bebidas'
import CuatroSabores from './pages/menuPages/CuatroSabores'

function App() {
  return (
    <BrowserRouter class>
      <div className='box-border bg-[url(./assets/images/bg.jpg)] bg-cover bg-no-repeat bg-center'>
        <Header />
        <ScrolToTop />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/contac/terminosycondiciones' element={<Termycon />} />
          <Route path='/contac/politicas' element={<Politicas />} />
          <Route path='/menu/pizzas-vegetarianas' element={<Pvegetarianas/>} />
          <Route path='/menu/pizzas-pollo' element={<Ppollo/>} />
          <Route path='/menu/pizzas-carne' element={<Pcarne/>} />
          <Route path='/menu/pizzas-mexicanas' element={<Pmexicanas/>} />
          <Route path='/menu/pizzas-dulces' element={<Pdulces/>} />
          <Route path='/menu/lasagnas' element={<Lasagnas/>} />
          <Route path='/menu/spaguettis' element={<Spaguettis/>} />
          <Route path='/menu/otros' element={<Otros/>} />
          <Route path='/menu/mexicano' element={<Mexicano/>} />
          <Route path='/menu/hamburguesas' element={<Hamburguesas/>} />
          <Route path='/menu/bebidas' element={<Bebidas/>} />
          <Route path='/menu/cuatro-sabores' element={<CuatroSabores/>} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
