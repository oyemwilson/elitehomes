import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/assets/images/slider1.webp",
    text: "Loving and experienced child-carers for your little ones",
  },
  {
    image: "/assets/images/slider2.webp",
    text: "Experienced and qualified nannies, governesses and maternity nurses",
  },
  {
    image: "/assets/images/slider3.webp",
    text: "Trusted and trained housekeepers for every home",
  },
  {
    image: "/assets/images/slider4.webp",
    text: "Discreet, professional help to keep your household running smoothly",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setImageLoaded(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setImageLoaded(false);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden shadow-lg mt-5 h-[300px] md:h-[500px]">
      {/* Loader */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#1c4c50]"></div>
        </div>
      )}

      {/* Image */}
      <img
        loading="lazy"
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        onLoad={() => setImageLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Caption Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-[#1c4c50]/40 text-white text-center pb-10 px-6 py-4 text-sm md:text-lg font-medium z-20">
        {slides[currentIndex].text}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 text-white z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 text-white z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setImageLoaded(false);
            }}
            className={`w-8 h-1 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
