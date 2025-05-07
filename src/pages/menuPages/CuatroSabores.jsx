import { Link } from 'react-router-dom';
import PlatosPorCategoria from '../../components/PlatosPorCategorias';
function CuatroSabores() {
    return (
        <div className='max-w-5xl mx-auto'>
            <Link to='/menu'><i className="fa-solid fa-arrow-rotate-left text-primary text-2xl" style={{ color: "primary", }}></i></Link>
            <PlatosPorCategoria nombreTabla="pizza_4_sabores" title="Pizza cuatro sabores" />
        </div>
    );
}

export default CuatroSabores;