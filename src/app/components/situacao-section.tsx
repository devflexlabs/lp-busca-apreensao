import { Bell, Clock, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SituacaoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToFormulario = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const situacaoCards = [
    { icon: Bell, title: "Recebeu notificação?", description: "Agimos rápido pra proteger você antes da apreensão acontecer.", buttonText: "Solicitar atendimento urgente" },
    { icon: Clock, title: "Parcelas atrasadas", description: "Tenha clareza da sua situação e evite perder seu carro!", buttonText: "Consultar minha situação" },
    { icon: Shield, title: "Proteção veicular", description: "Evite surpresas desagradáveis e mantenha seu veículo sempre seguro.", buttonText: "Organizar planejamento" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % situacaoCards.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + situacaoCards.length) % situacaoCards.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section id="situacao" className="py-20 bg-gradient-to-tr">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Qual a sua <span className="text-[#3B5BA6]">situação agora?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Clique abaixo antes que seja tarde demais:
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#3B5BA6] hover:bg-[#5A7CCF] text-white rounded-full p-2 transition-colors cursor-pointer">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#3B5BA6] text-white rounded-full p-2 transition-colors cursor-pointer">
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Animated Card */}
              <div className="min-h-[320px] flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1F1F1F] border border-[#3B5BA6] rounded-xl p-8 flex flex-col shadow-lg w-full max-w-xl"
                  >
                    <div className="text-[#3B5BA6] mb-4">
                      {React.createElement(situacaoCards[currentSlide].icon, { className: "w-12 h-12" })}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">{situacaoCards[currentSlide].title}</h3>
                    <p className="text-gray-300 mb-6 flex-grow">{situacaoCards[currentSlide].description}</p>
                    <button
                      onClick={scrollToFormulario}
                      className="bg-[#3B5BA6] hover:bg-[#2d4785] text-white font-bold px-6 py-3 rounded-lg w-full max-w-xs mx-auto text-center transition duration-300 ease-in-out"
                    >
                      {situacaoCards[currentSlide].buttonText}
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {situacaoCards.map((_, index) => (
                  <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-[#3B5BA6]' : 'bg-gray-500'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <div className="relative">
              <img src="/moldura-iphone.png" alt="Moldura iPhone" className="w-80 h-[600px] object-contain relative" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-[85%] h-[96%] bg-black rounded-[2rem] overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/NN03RakP1Ow"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
