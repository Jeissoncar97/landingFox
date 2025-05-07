import PlatosPorCategoria from '../../components/PlatosPorCategorias2';
import { Link } from 'react-router-dom';

function Lasagnas() {
    return (
        <div className='max-w-5xl mx-auto'>
            <Link to='/menu'><i className="fa-solid fa-arrow-rotate-left text-primary text-2xl" style={{ color: "primary", }}></i></Link>
            <PlatosPorCategoria nombreTabla="lasagnas" title="Lasagnas" />

        </div>
    );
}

export default Lasagnas;