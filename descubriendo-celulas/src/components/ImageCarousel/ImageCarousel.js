import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

const images = [
  { src: require('../../assets/images/Infografia-1.jpg'), alt: 'Infografía 1' },
  { src: require('../../assets/images/Infografia-2.jpg'), alt: 'Infografía 2' },
  { src: require('../../assets/images/Infografia-3.jpg'), alt: 'Infografía 3' },
  { src: require('../../assets/images/Infografia-4.jpg'), alt: 'Infografía 4' },
];

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.alt}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
