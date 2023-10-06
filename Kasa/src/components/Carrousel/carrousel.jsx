import React, { useState } from 'react';
import leftArrow from '../../assets/logos/left-arrow.svg';
import rightArrow from '../../assets/logos/right-arrow.svg';

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % pictures.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev-button" onClick={goToPreviousSlide}>
        <img src={leftArrow} alt="Previous" />
      </button>
      <div className="carousel-content">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={picture} className='imgCarou' alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next-button" onClick={goToNextSlide}>
        <img src={rightArrow} alt="Next" />
      </button>
      <div className='indicator'>{currentIndex+1}/{pictures.length}</div>
    </div>
  );
}

export default Carrousel;

