import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [showDragHint, setShowDragHint] = useState(false); // Inicialmente escondida
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

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Intersection Observer para mostrar a maozinha quando o carrossel entrar na tela
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
    <section className="py-20 bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Saiba o que os nossos clientes{" "}
        <span className="text-[#3B5BA6]">têm a dizer</span>
      </h2>

      <div
        {...handlers}
        ref={carouselRef}
        className="relative max-w-3xl mx-auto h-[400px] sm:h-[500px] md:h-[600px]"
      >
        <Image
          src={reviews[current]}
          alt={`Review ${current + 1}`}
          fill
          className="rounded-xl shadow-lg object-contain"
          style={{ objectPosition: "center" }}
        />

        {/* Botões escondidos no mobile */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-1 sm:-left-4 md:-left-16 bg-[#3B5BA6] hover:bg-[#5A7CCF] text-white p-2 rounded-full shadow-md cursor-pointer transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-1 sm:-right-4 md:-right-16 bg-[#3B5BA6] hover:bg-[#5A7CCF] text-white p-2 rounded-full shadow-md cursor-pointer transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Mãozinha temporária no mobile, agora com seta para a direita */}
        {showDragHint && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:hidden flex flex-col items-center gap-2 pointer-events-none animate-fade">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#3B5BA6] animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Seta para a direita */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              Arraste para ver mais
            </span>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-[#3B5BA6]" : "bg-gray-500"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
