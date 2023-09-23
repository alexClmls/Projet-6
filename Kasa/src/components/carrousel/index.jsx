import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import leftArrow from '../../assets/logos/left-arrow.svg';
import rightArrow from '../../assets/logos/right-arrow.svg';

function Carrousel ({pictures}){
    return (
        <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button onClick={onClickHandler} className="carousel-button prev-button">
              <img src={leftArrow}/>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button onClick={onClickHandler} className="carousel-button next-button">
              <img src={rightArrow}/>
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index) => (
          <div
            onClick={onClickHandler}
            className={`indicator ${isSelected ? "selected" : ""}`}
            key={index}
          >
            {index + 1}/{pictures.length} {/* Affichez l'index de l'image actuelle */}
          </div>
        )}
        showStatus={false} // Désactivez l'affichage de l'état (dots)
    >
        {pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} className='imgCarou' alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    );
    
}
export default Carrousel;