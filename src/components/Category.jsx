import { Link } from 'react-router-dom';

function Category({ category, image, linkTo }) {

  return (
    <Link
      to={linkTo}
      className="text-center m-2 hover:scale-105 transition-all duration-600"
    >
      <img src={image} alt={category} />
    </Link>
  );
}

export default Category;
