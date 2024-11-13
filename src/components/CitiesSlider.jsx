import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './citiesSlider.css';


const CitiesSlider = ({ slides }) => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 3000;

  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  const changeTO = useRef(null);
  const loadedImages = useRef(0);

  // Initialize slider and start auto-changing
  useEffect(() => {
    runAutoChange();
    return () => clearTimeout(changeTO.current); // Cleanup on unmount
  }, []);

  const runAutoChange = () => {
    changeTO.current = setTimeout(() => {
      changeSlides(1); // Go to the next slide
      runAutoChange(); // Keep auto-changing
    }, AUTOCHANGE_TIME);
  };

  const changeSlides = (change) => {
    clearTimeout(changeTO.current); // Reset timer
    setPrevSlide(activeSlide);
    setActiveSlide((prevActiveSlide) => {
      const length = slides.length;
      const newActiveSlide = (prevActiveSlide + change) % length;
      return newActiveSlide < 0 ? length - 1 : newActiveSlide;
    });
  };

  const handleImageLoad = () => {
    loadedImages.current += 1;
    if (loadedImages.current === slides.length) {
      setSliderReady(true); // Mark slider as ready when all images are loaded
    }
  };

  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      <p className="slider__top-heading">Travelers</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames('slider__slide', {
              's--active': activeSlide === index,
              's--prev': prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.city.split('').map((letter, i) => (
                  <span key={i}>{letter}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className="slider__slide-parts">
              {Array.from({ length: IMAGE_PARTS }).map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
            {/* Preload the image */}
            <img
              src={slide.img}
              alt={slide.city}
              style={{ display: 'none' }}
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
};

// Prop validation
CitiesSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CitiesSlider;
