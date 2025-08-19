import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [showDragHint, setShowDragHint] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);

  const reviews = [
    "/review1.png",
    "/review2.png",
    "/review3.png",
    "/review4.jpg",
    "/review5.png",
    "/review6.jpg",
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const diffX = startX - currentX;
    const threshold = 50; // pixels mínimos para trocar slide

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextSlide(); // swipe left = próximo
      } else {
        prevSlide(); // swipe right = anterior  
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Mouse handlers para desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const diffX = startX - currentX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Intersection Observer para mostrar a dica
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDragHint(true);
          const timer = setTimeout(() => setShowDragHint(false), 3000);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Saiba o que os nossos clientes{" "}
        <span className="text-blue-500">têm a dizer</span>
      </h2>

      <div
        ref={carouselRef}
        className="relative max-w-3xl mx-auto h-[400px] sm:h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <img
            src={reviews[current]}
            alt={`Review ${current + 1}`}
            className="w-full h-full object-contain pointer-events-none rounded-xl shadow-lg"
            draggable={false}
          />
        </div>

        {/* Botões escondidos no mobile */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-1 sm:-left-4 md:-left-16 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md cursor-pointer transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-1 sm:-right-4 md:-right-16 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md cursor-pointer transition-all z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dica de arrastar no mobile */}
        {showDragHint && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:hidden flex flex-col items-center gap-2 pointer-events-none animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-500 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white text-sm bg-black/70 px-3 py-1 rounded-full">
              Arraste para ver mais
            </span>
          </div>
        )}

        {/* Indicador visual de arrastar */}
        {isDragging && (
          <div className="absolute inset-0 bg-black/10 rounded-xl pointer-events-none" />
        )}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === current ? "bg-blue-500 scale-110" : "bg-gray-500 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}