import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from '../assets/1.jpg'

const NewSlider = () => {
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Slide transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (2 seconds)
    pauseOnHover: true, // Pause autoplay on hover for better user experience
    draggable: true, // Allow manual sliding via dragging
    swipe: true, // Enable swipe gesture for touch devices
  };

  const images = [img, img, img];

  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden', // Hide overflow to ensure fullscreen image
      marginTop: '0', 
      marginBottom: '0',
      borderRadius: '0'
    }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ width: '100vw', height: '100vh' }}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', // Ensure image covers the entire screen
                borderRadius: '0'
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewSlider;
