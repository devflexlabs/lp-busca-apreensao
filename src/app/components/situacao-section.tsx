import { Bell, Clock, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

export default function SituacaoSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const scrollToFormulario = () => {
        document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
    };

    const situacaoCards = [
        {
            icon: Bell,
            title: "Recebeu notificação?",
            description: "Agimos rápido pra proteger você antes da apreensão acontecer.",
            buttonText: "Solicitar atendimento urgente"
        },
        {
            icon: Clock,
            title: "Parcelas atrasadas",
            description: "Tenha clareza da sua situação e evite perder seu carro!",
            buttonText: "Consultar minha situação"
        },
        {
            icon: Shield,
            title: "Proteção veicular",
            description: "Evite surpresas desagradáveis e mantenha seu veículo sempre seguro.",
            buttonText: "Organizar planejamento"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % situacaoCards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + situacaoCards.length) % situacaoCards.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section id="situacao" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center mx-auto">
                    {/* Left Column - Carousel */}
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
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-[#3B5BA6] hover:bg-[#5A7CCF] text-white rounded-full p-2 transition-colors cursor-pointer"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-[#3B5BA6]  text-white rounded-full p-2 transition-colors cursor-pointer"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Card Display */}
                            <div className=" border border-white rounded-lg p-8 min-h-[300px] flex flex-col">
                                <div className="text-white mb-4">
                                    {React.createElement(situacaoCards[currentSlide].icon, { className: "w-12 h-12" })}
                                </div>
                                <h3 className="text-[#3B5BA6] text-2xl font-bold mb-4">
                                    {situacaoCards[currentSlide].title}
                                </h3>
                                <p className="text-white mb-6 flex-grow">
                                    {situacaoCards[currentSlide].description}
                                </p>
                                <button
                                    onClick={scrollToFormulario}
                                    className="
        bg-[#3B5BA6] 
        text-white 
        font-bold 
        px-6 py-3 
        rounded-lg 
        w-full 
        max-w-xs 
        mx-auto 
        text-center 
        hover:opacity-80 
        transition 
        duration-300 
        ease-in-out 
        flex 
        justify-center 
        items-center
        cursor-pointer
    "
                                >
                                    {situacaoCards[currentSlide].buttonText}
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {situacaoCards.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-[#3B5BA6] cursor-pointer' : 'bg-gray-500 cursor-pointer'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <div className="text-left mt-8">
                            <p className="text-lg font-light text-white mb-2">
                                Não entende muito sobre busca e apreensão ou{' '}
                                <span className="text-orange-500 font-bold">como proteger seu carro?</span>
                            </p>
                            <p className="text-gray-300 text-sm">
                                Em apenas 5 minutos nossa equipe explica tudo de forma simples, sem enrolação, e mostra o melhor caminho para evitar perder seu carro e economizar nas parcelas.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Phone Mockup */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Moldura iPhone */}
                            <img
                                src="/moldura-iphone.png"
                                alt="Moldura iPhone"
                                className="w-80 h-[600px] object-contain relative"
                            />

                            {/* Conteúdo da tela dentro da moldura */}
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
                                <div className="w-[85%] h-[92%] bg-black rounded-[2rem] overflow-hidden">
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