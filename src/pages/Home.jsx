import Img3 from '../assets/images/img3.png'
import Img4 from '../assets/images/img4.png'
import Img5 from '../assets/images/img5.png'
import Img6 from '../assets/images/Img6.png'
import ImgHome1 from '../assets/images/imgHome1.png'
import ImgHome2 from '../assets/images/imgHome2.png'
import ImgHome3 from '../assets/images/imgHome3.png'
import ImgHome4 from '../assets/images/imgHome4.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="text-center p-8">
      <div className="max-w-5xl mx-auto">
        <div className='bg-primary flex flex-col md:flex-row' >
          <div className='content-center flex justify-center'>
            <img src={Img6} alt="" className='md:max-w-lg drop-shadow-lg m-8' style={{ filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.8))' }} />
          </div>
          <div className='content-center text-white content-center w-full px-3 mb-10 md:mb-0'>
            <p className='text-xl text-black'>PIZZA DE LA CASA</p>
            <h1 className='text-5xl text-dorado'>Fox del huerto</h1>
            <p className='text-xl'>Deliciosa y fresca combinación de pollo, jamón y rúcula, acompañados de champiñones y un toque de salsa César. Todo cubierto con nuestro queso especial para un sabor inolvidable.</p>

            <div className="text-center mt-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2 text-xl bg-white text-primary mb-5"
                href="https://wa.me/573227576963?text=Hola!%20me%20gustaría%20saber%20más%20sobre%20la%20pizza%20de%20la%20casa!">PEDIR
              </a>
            </div>
          </div>
        </div>

        <div className='bg-primary flex flex-col md:flex-row mt-5' >
          <div className='content-center flex justify-center'>
            <img src={Img5} alt="" className='md:max-w-lg drop-shadow-lg m-8' style={{ filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.8))' }} />
          </div>
          <div className='content-center text-white content-center w-full px-3 mb-10 md:mb-0'>
            <h1 className='text-5xl'>$53.000</h1>
            <p className='text-xl text-black text-black'>exclusiva</p>
            <h3 className='text-3xl text-dorado'>PIZZA CUATRO SABORES</h3>
            <p className='text-2xl'>Escoge tus sabores favoritos</p>
            <p className='text-black text-2xl'>44cm</p>
            <div className="text-center mt-6">
              <Link className="px-8 py-2 text-xl bg-white text-primary mb-5" to="/menu">SABORES</Link>
            </div>
          </div>
        </div>
        <div className='bg-primary flex flex-col md:flex-row mt-5' >
          <div className='content-center flex justify-center'>
            <img src={Img4} alt="" className='md:max-w-lg drop-shadow-lg mx-auto -px-10 ' style={{ filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.8))' }} />
          </div>
          <div className='content-center text-white content-center w-full px-3 mb-10 md:mb-0'>
            <h3 className='text-3xl text-dorado'>DESDE</h3>
            <h1 className='text-5xl'>$14.500</h1>
            <p className='text-xl text-black text-black'>exclusivas</p>
            <h3 className='text-3xl text-dorado'>PIZZA DULCES</h3>
            <p className='text-2xl'>Escoge tus sabores favoritos</p>
            <div className="text-center mt-6">
              <Link className="px-8 py-2 text-xl bg-white text-primary" to="/menu/pizzas-dulces">ORDENA AQUÍ</Link>
            </div>
          </div>
        </div>
        <div className='bg-primary flex flex-col md:flex-row mt-5' >
          <div className='content-center'>
            <img src={Img3} alt="" className='md:max-w-lg drop-shadow-lg m-8 mx-auto' style={{ filter: 'drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.8))' }} />
          </div>
          <div className='content-center text-white content-center w-full px-3 mb-10 md:mb-0'>
            <h3 className='text-4xl'>COMBOS DE HAMBURGUESA</h3>
            <h3 className='text-5xl -rotate-10 font-cursiva text-black italic bold text-dorado' >Artesanal</h3>
            <p className='text-2xl text-black'>Acompañados de papa a la francesa y gaseosa 250ml</p>
            <div className='flex justify-around mt-4'>
              <div>
                <p className='text-2xl'>Sencillo</p>
                <p className='text-black text-2xl'>$15.500</p>
              </div>
              <div>
                <p className='text-2xl'>Especial (doble carne)</p>
                <p className='text-black text-2xl'>$19.000</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <a className="px-8 py-2 text-xl bg-white text-primary" 
                target="_blank"
                rel="noopener noreferrer"  
              href="https://wa.me/573227576963">PIDELA AQUÍ</a>
            </div>
          </div>
        </div>

        <div className=' flex mt-5'  >
          <div className=' flex-col  content-center text-primary content-center w-full mr-2'>
            <img src={ImgHome1} alt="" className='size-40 m-auto' />
            <h3 className='text-2xl'>
              Pizza al momento
            </h3>
            <p className='text-xl text-black'>Aquí la masa no espera… ¡se lanza!</p>
          </div>
          <div className=' flex-col  content-center text-primary content-center w-full ml-2'>
            <img src={ImgHome2} alt="" className='size-40 m-auto' />
            <h3 className='text-2xl'>
              Ingredientes frescos
            </h3>
            <p className='text-xl text-black'>Ingredientes tan frescos que se relajan antes de entrar al horno.</p>
          </div>
        </div>
        <div className=' flex my-10' >
          <div className=' flex flex-col  content-center text-primary content-center w-full mr-2'>
            <img src={ImgHome3} alt="" className='size-40 m-auto' />
            <h3 className='text-2xl'>
              Domicilios
            </h3>
            <p className='text-xl text-black'>Tu pizza ya va en camino… y con ganas de verte.</p>
          </div>
          <div className=' flex flex-col  content-center text-primary content-center w-full ml-2'>
            <img src={ImgHome4} alt="" className='size-40 m-auto' />
            <h3 className='text-3xl'>
              Atención al cliente
            </h3>
            <p className='text-xl text-black'>Atención legendaria, servicio nivel héroe.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;