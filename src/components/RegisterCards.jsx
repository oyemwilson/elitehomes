import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterCards() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "FOR CLIENTS",
      subtitle: "Register",
      description:
        "We match you with trusted professionals across a range of home support services.",
      role: "Client",
      button: "Register as Client",
      image: "/assets/images/happyfam.webp",
    },
    {
      title: "FOR STAFF CANDIDATES",
      subtitle: "Register",
      description:
        "We match you with opportunities that align with your skills and experience.",
      role: "Candidate",
      button: "Register as Candidate",
      image: "/assets/images/worker.webp",
    },
  ];

  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto py-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative flex-1 h-96 overflow-hidden shadow-md group"
        >
          {!imageLoaded[index] && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#1c4c50]"></div>
            </div>
          )}

          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            width="800"
            height="600"
            onLoad={() => handleImageLoad(index)}
            className={`w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out ${
              !imageLoaded[index] ? "opacity-0" : "opacity-100"
            }`}
          />

          <div className="absolute inset-0 bg-[#1c4c50]/40 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-2xl font-bold mb-1">{card.title}</h2>
            <p className="text-white text-lg font-medium mb-2">
              {card.subtitle}
            </p>
            <p className="text-white mb-4 max-w-md text-sm sm:text-base">
              {card.description}
            </p>
            <button
              onClick={() =>
                navigate("/contact", { state: { role: card.role } })
              }
              className="bg-[#1c4c50] text-white px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
