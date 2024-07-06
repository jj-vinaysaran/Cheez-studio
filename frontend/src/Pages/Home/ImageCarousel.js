import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Your custom CSS file for carousel styling

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flashSlide, setFlashSlide] = useState(null); // State to control flashing effect
  const images = [
    'https://via.placeholder.com/800x400?text=First+Slide',
    'https://via.placeholder.com/800x400?text=Second+Slide',
    'https://via.placeholder.com/800x400?text=Third+Slide',
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    setFlashSlide(currentSlide); // Trigger flash on the current slide
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    setFlashSlide(currentSlide); // Trigger flash on the current slide
  };

  // Automatically move to the next slide at a certain interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval time in milliseconds (e.g., 3000 for 3 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [currentSlide]);

  // Reset flash effect after animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlashSlide(null);
    }, 1000); // Adjust the flash duration time in milliseconds (e.g., 1000 for 1 second)

    return () => clearTimeout(timeout); // Cleanup function to clear timeout on unmount
  }, [flashSlide]);

  return (
    <div className="carousel">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide-container">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slide-image ${index === flashSlide ? 'flash' : ''}`}
            />
            <div className="slide-text">
              <p>Slide {index + 1}</p>
              {/* Additional text or content here if needed */}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
