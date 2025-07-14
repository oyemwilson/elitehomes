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
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Preload all images
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setLoadedImages((prev) => {
          const updated = new Set(prev);
          updated.add(index);
          return updated;
        });
      };
    });
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = new Set(prev);
      updated.add(index);
      return updated;
    });
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden shadow-lg mt-5 h-[300px] md:h-[500px]">
      {/* Image */}
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        onLoad={() => handleImageLoad(currentIndex)}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          loadedImages.has(currentIndex) ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 w-full bg-[#1c4c50]/40 text-white text-center pb-10 px-6 py-4 text-sm md:text-lg font-medium z-20">
        {slides[currentIndex].text}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 text-white z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev + 1) % slides.length)
        }
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 text-white z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-8 h-1 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}