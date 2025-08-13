import Category from '../components/Category'
import Img1 from '../assets/images/images-category/img1.webp'
import Img2 from '../assets/images/images-category/img2.webp'
import Img3 from '../assets/images/images-category/img3.webp'
import Img4 from '../assets/images/images-category/img4.webp'
import Img5 from '../assets/images/images-category/img5.webp'
import Img6 from '../assets/images/images-category/img6.webp'
import Img7 from '../assets/images/images-category/img7.webp'
import Img8 from '../assets/images/images-category/img8.webp'
import Img9 from '../assets/images/images-category/img9.webp'
import Img10 from '../assets/images/images-category/img10.webp'
import Img11 from '../assets/images/images-category/img11.webp'
import Img12 from '../assets/images/images-category/img12.webp'
function Menu() {
  return (
    <div className="text-center p-8 mx-auto ">
      <h1 className="text-3xl font-bold">Fox Pizza Gourmet</h1>
      <div className='max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <Category category="Pizzas con carne" image={Img12} linkTo="/menu/cuatro-sabores"/>
        <Category category="Pizzas con carne" image={Img1} linkTo="/menu/pizzas-vegetarianas"/>
        <Category category="Pizzas con carne" image={Img2} linkTo="/menu/pizzas-pollo"/>
        <Category category="Pizzas con carne" image={Img3} linkTo="/menu/pizzas-carne"/>
        <Category category="Pizzas con carne" image={Img4} linkTo="/menu/pizzas-mexicanas"/>
        <Category category="Pizzas con carne" image={Img5} linkTo="/menu/pizzas-dulces"/>
        <Category category="Pizzas con carne" image={Img6} linkTo="/menu/lasagnas"/>
        <Category category="Pizzas con carne" image={Img7} linkTo="/menu/spaguettis"/>
        <Category category="Pizzas con carne" image={Img8} linkTo="/menu/otros"/>
        <Category category="Pizzas con carne" image={Img9} linkTo="/menu/mexicano"/>
        <Category category="Pizzas con carne" image={Img10} linkTo="/menu/hamburguesas"/>
        <Category category="Pizzas con carne" image={Img11} linkTo="/menu/bebidas"/>
      </div>
    </div>
  );
}

export default Menu;