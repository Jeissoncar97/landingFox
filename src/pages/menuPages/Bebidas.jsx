import { Link } from 'react-router-dom';
import PlatosPorCategoria from '../../components/PlatosPorCategorias3';
function Bebidas() {
    return (
        <div className='max-w-5xl mx-auto'>
            <Link to='/menu'><i className="fa-solid fa-arrow-rotate-left text-primary text-2xl" style={{ color: "primary", }}></i></Link>
            <PlatosPorCategoria nombreTabla="bebidas_naturales" title="Bebidas naturales" />
            <PlatosPorCategoria nombreTabla="otras_bebidas" title="Otras bebidas" />
        </div>
    );
}

export default Bebidas;