import React, { useState } from 'react';
import leftArrow from '../../assets/logos/left-arrow.svg';
import rightArrow from '../../assets/logos/right-arrow.svg';
import './carrousel.scss'

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
  const isSingleImage = pictures.length === 1;

  return (
    <div className="carousel">
      {isSingleImage ? null :
        <button className="carousel-button prev-button" onClick={goToPreviousSlide}>
          <img src={leftArrow} alt="Previous" />
        </button>
      }
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
      {isSingleImage ? null :
        <button className="carousel-button next-button" onClick={goToNextSlide}>
          <img src={rightArrow} alt="Next" />
        </button>
      }
      {isSingleImage ? null : <div className='indicator'>{currentIndex+1}/{pictures.length}</div>}
    </div>
  );
}

export default Carrousel;

