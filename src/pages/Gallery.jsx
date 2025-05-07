import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Img1 from '../assets/images/images-gallery/img1.jpeg'
import Img2 from '../assets/images/images-gallery/img2.jpeg'
import Img3 from '../assets/images/images-gallery/img3.jpeg'
import Img4 from '../assets/images/images-gallery/img4.jpeg'
import Img5 from '../assets/images/images-gallery/img5.jpeg'
import Img6 from '../assets/images/images-gallery/img6.jpeg'
import Img7 from '../assets/images/images-gallery/img7.jpeg'
import Img8 from '../assets/images/images-gallery/img8.jpeg'
import Img9 from '../assets/images/images-gallery/img9.jpeg'
import Img10 from '../assets/images/images-gallery/img10.jpeg'
import Img11 from '../assets/images/images-gallery/img11.jpeg'
import Img12 from '../assets/images/images-gallery/img12.jpeg'
import Img13 from '../assets/images/images-gallery/img13.jpeg'

function Gallery() {
  const images = [Img1,Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  return (
    <div className="max-w-6xl mx-auto p-4 mb-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Galería</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={src}
              alt={`Galería ${i + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Thumbnails]}
      />
    </div>
  );
}

export default Gallery;