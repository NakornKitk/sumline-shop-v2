import React, { useState } from 'react';


const ImageSlider = ({images}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto md:min-w-[283px]">
      <div className="overflow-hidden relative ">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 hover:scale-105 transform transition duration-2"
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;