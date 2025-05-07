import PlatosPorCategoria from '../../components/PlatosPorCategorias3';
import { Link } from 'react-router-dom';
function Otros() {
    return (
        <div className='max-w-5xl mx-auto'>
            <Link to='/menu'><i className="fa-solid fa-arrow-rotate-left text-primary text-2xl" style={{ color: "primary", }}></i></Link>
            <PlatosPorCategoria nombreTabla="otros_gustos" title="Otros gustos" />

        </div>
    );
}

export default Otros;