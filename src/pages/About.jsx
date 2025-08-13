import Galery from '../pages/Gallery'
import Tienda1 from '../assets/images/tienda1.png'
import Img6 from '../assets/images/Img6.png'
import Platos from '../assets/images/platos-animados.png'
import Reviews from './Reviews'


function About() {
  return (
    <div>
      <div className='felx flex-row' >
        <div className='max-w-5xl m-auto mt-10 flex flex-col md:flex-row'>
          <div className='px-10 font-helvetica flex flex-col'>
            <h1 className='text-6xl m-auto font-sans'>Nuestra Historia</h1><br />
            <p><strong>Fox Pizza Gourmet y Más</strong> nació en 2017 con un propósito claro: ofrecer comida con <strong>sabor auténtico</strong>, hecha con pasión y frescura en cada detalle. Desde entonces, nos hemos convertido en mucho más que una pizzería: somos un espacio donde la creatividad y el gusto se encuentran en cada plato.</p>
            <img className='w-md m-auto py-10' src={Tienda1} alt="Inicion fox pizza" title='Inicios Fox pizza' />
            <p>Nuestra especialidad son las pizzas con recetas propias, entre las que destaca la favorita de muchos: la <strong>Pizza del Huerto</strong>, una combinación única de ingredientes frescos y sabores del campo. También hemos creado una experiencia diferente con nuestra innovadora <strong>Pizza Cuatro Sabores</strong>, donde puedes elegir cuatro combinaciones en una sola pizza —una propuesta que encantó a nuestros clientes y marcó un antes y un después en nuestras ventas.</p>
            <img className='w-xs m-auto' src={Img6} alt="Pizza Fox del huerto " title='Pizza Fox del huerto' />
            <p>Pero no todo es pizza. En Fox Pizza Gourmet y Más también te ofrecemos una deliciosa variedad de hamburguesas artesanales, platos mexicanos, lasañas, spaguettis y más. Todos nuestros platillos están elaborados con ingredientes frescos y salsas caseras preparadas por nosotros mismos, cuidando cada sabor como si fuera único.</p><br />
            <p>Con <strong>más de 40 sabores de pizza</strong> y un menú que sigue creciendo, nuestro compromiso es que cada visita sea una experiencia que quieras repetir. Porque para nosotros, cocinar es compartir, y compartir es crear comunidad.</p>
            <img className='w-sm m-auto py-10' src={Platos} alt="Platos Fox pizza" title='Platos Fox pizza' />
            <p>Te invitamos a conocernos, a probar algo nuevo, o a reencontrarte con tu sabor favorito. <strong>Bienvenido a Fox Pizza Gourmet y Más.</strong></p>
          </div>
          <article className=' bg-primary-claro text-black p-6 m-4 rounded-xl shadow-xl flex flex-col gap-6 h-fit'>
            <section>
              <h2 className='text-2xl font-bold mb-2'>¿Qué nos hace únicos?</h2>
              <ul className='list-disc list-inside'>
                <li>Más de 40 sabores de pizza.</li>
                <li>Ingredientes frescos y locales.</li>
                <li>Salsas caseras y recetas propias.</li>
                <li>Una comunidad que nos inspira.</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-semibold mt-4 mb-2'>Nuestros Favoritos</h2>
              <p>🍕 Pizza del Huerto – Nuestra joya vegetariana.</p>
              <p>🍔 Hamburguesa artesanal – Pan horneado en casa.</p>
              <p>🍝 Spaguetti Boloñesa – Sabor clásico, hecho con alma.</p>
            </section>

            <section>
              <h2 className='text-xl font-semibold mt-4 mb-2 '>Lo que dicen nuestros clientes</h2>
              <blockquote className='italic text-sm'>"Excelente comida y muy buena atención. Me encantó la variedad de comida... volvería siempre."</blockquote>
              ⭐⭐⭐⭐⭐
              <p className='text-sm text-right'>– Anniank Saenz</p>
              <br />
              <blockquote className='italic text-sm'>"Tienen platos muy innovadores en comparación con la oferta de la comida en la zona. Sus pizzas son deliciosas. Los precios me han parecido siempre bastante buenos. Un punto a mejorar son los adiciones y entradas, que parecen hacerlo de afán, siempre pido las mismas cosas y me llegan en estados distintos de cantidad, punto de cocción y sabor. (papás francesas, pan de ajo)"</blockquote>
              ⭐⭐⭐⭐⭐
              <p className='text-sm text-right'>– Andrés Alvarez</p>
              <br />
              <blockquote className='italic text-sm'>"Estuvo rico la variedad de pizzas y platos es amplia, el servicio es excelente, me gustó que los pedidos son frescos y cada pizza es preparada en el sitio así que la espera vale la pena."</blockquote>
              ⭐⭐⭐⭐⭐
              <p className='text-sm text-right'>– Javier Patiño</p>
              <br />
              <blockquote className='italic text-sm'>"Delicioso, 3 platos diferentes, todos muy bien preparados, lo único es el espacio, recomendó en comida rápida."</blockquote>
              ⭐⭐⭐⭐
              <p className='text-sm text-right'>– Juan David Castillo</p>
            </section>

            <section>
              <h2 className='text-xl font-semibold mt-4 mb-2'>¿Sabías que...?</h2>
              <ul className='list-disc list-inside'>
                <li>¡Nacimos en 2017 con una sola receta!</li>
                <li>Usamos más de 15 tipos de vegetales diferentes.</li>
                <li>La pizza de la casa ha cambiado 3 veces… ¡evoluciona contigo!</li>
              </ul>
            </section>
            <section>
              <h2 className='text-xl'>
                Revisa nuestro menú
              </h2>
              <div className="text-center mt-6">
                <a className="px-8 py-2 text-xl bg-white text-primary" href="#">MENÚ</a>
              </div>
            </section>
          </article>
        </div>
      </div>
      <Reviews/>
      <Galery />
    </div>
  );
}

export default About;