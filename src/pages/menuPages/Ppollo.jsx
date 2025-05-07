import PlatosPorCategoria from '../../components/PlatosPorCategorias';
import { Link } from 'react-router-dom';
function Ppollo() {
    return (
        <div className='max-w-5xl mx-auto'>
            <Link to='/menu'><i className="fa-solid fa-arrow-rotate-left text-primary text-2xl" style={{ color: "primary", }}></i></Link>
            <PlatosPorCategoria nombreTabla="pizzas_con_pollo" title="Pizzas con pollo" />
        </div>
    );
}

export default Ppollo;