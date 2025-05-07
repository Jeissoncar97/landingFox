import { useState } from 'react';
import { Link } from 'react-router-dom';

function Category({ category, image, imgHover, linkTo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={linkTo}
      className="text-center m-2 hover:scale-105 transition-all duration-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? imgHover : image} alt={category} />
    </Link>
  );
}

export default Category;
