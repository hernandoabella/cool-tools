"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const initialSlides = ["Project 1", "2", "3"];
const maxVisibleSlides = 3;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState(initialSlides);

  const handleUp = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleDown = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Calculate the visible slides based on activeIndex
    const calculateVisibleSlides = () => {
      const newSlides = [];
      for (let i = 0; i < maxVisibleSlides; i++) {
        const index = (activeIndex + i) % initialSlides.length;
        newSlides.push(initialSlides[index]);
      }
      setSlides(newSlides);
    };

    calculateVisibleSlides();
  }, [activeIndex]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleUp}
          className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Up
        </button>
        <div className="flex flex-col items-center space-y-4">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: index === 1 ? 1.1 : 1, // Escala aumentada para el elemento activo
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "tween" }} // Añadido tipo de transición tween
              layout // Activar la propiedad layout para gestionar la transición
              className={` w-48 h-48 flex items-center justify-center transition-opacity duration-300 ${
                index === 1
                  ? "animated opacity-100 bg-blue-500"
                  : "opacity-50 bg-gray-400 blur-sm"
              } text-white`}
            >
              {slide}
            </motion.div>
          ))}
        </div>
        <button
          onClick={handleDown}
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Down
        </button>
      </div>
    </main>
  );
}
