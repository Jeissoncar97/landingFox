import Category from '../components/Category'
import Img1 from '../assets/images/images-category/img1.png'
import Img2 from '../assets/images/images-category/img2.png'
import Img3 from '../assets/images/images-category/img3.png'
import Img4 from '../assets/images/images-category/img4.png'
import Img5 from '../assets/images/images-category/img5.png'
import Img6 from '../assets/images/images-category/img6.png'
import Img7 from '../assets/images/images-category/img7.png'
import Img8 from '../assets/images/images-category/img8.png'
import Img9 from '../assets/images/images-category/img9.png'
import Img10 from '../assets/images/images-category/img10.png'
import Img11 from '../assets/images/images-category/img11.png'
import Img12 from '../assets/images/images-category/img12.png'
import Img1Hover from '../assets/images/images-category/img1-hover.png'
import Img2Hover from '../assets/images/images-category/img2-hover.png'
import Img3Hover from '../assets/images/images-category/img3-hover.png'
import Img4Hover from '../assets/images/images-category/img4-hover.png'
import Img5Hover from '../assets/images/images-category/img5-hover.png'
import Img6Hover from '../assets/images/images-category/img6-hover.png'
import Img7Hover from '../assets/images/images-category/img7-hover.png'
import Img8Hover from '../assets/images/images-category/img8-hover.png'
import Img9Hover from '../assets/images/images-category/img9-hover.png'
import Img10Hover from '../assets/images/images-category/img10-hover.png'
import Img11Hover from '../assets/images/images-category/img11-hover.png'
import Img12Hover from '../assets/images/images-category/img12-hover.png'
function Menu() {
  return (
    <div className="text-center p-8 mx-auto ">
      <h1 className="text-3xl font-bold">Fox Pizza Gourmet</h1>
      <div className='max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <Category category="Pizzas con carne" image={Img12} imgHover={Img12Hover} linkTo="/menu/cuatro-sabores"/>
        <Category category="Pizzas con carne" image={Img1} imgHover={Img1Hover} linkTo="/menu/pizzas-vegetarianas"/>
        <Category category="Pizzas con carne" image={Img2} imgHover={Img2Hover} linkTo="/menu/pizzas-pollo"/>
        <Category category="Pizzas con carne" image={Img3} imgHover={Img3Hover} linkTo="/menu/pizzas-carne"/>
        <Category category="Pizzas con carne" image={Img4} imgHover={Img4Hover} linkTo="/menu/pizzas-mexicanas"/>
        <Category category="Pizzas con carne" image={Img5} imgHover={Img5Hover} linkTo="/menu/pizzas-dulces"/>
        <Category category="Pizzas con carne" image={Img6} imgHover={Img6Hover} linkTo="/menu/lasagnas"/>
        <Category category="Pizzas con carne" image={Img7} imgHover={Img7Hover} linkTo="/menu/spaguettis"/>
        <Category category="Pizzas con carne" image={Img8} imgHover={Img8Hover} linkTo="/menu/otros"/>
        <Category category="Pizzas con carne" image={Img9} imgHover={Img9Hover} linkTo="/menu/mexicano"/>
        <Category category="Pizzas con carne" image={Img10} imgHover={Img10Hover} linkTo="/menu/hamburguesas"/>
        <Category category="Pizzas con carne" image={Img11} imgHover={Img11Hover} linkTo="/menu/bebidas"/>
      </div>
    </div>
  );
}

export default Menu;