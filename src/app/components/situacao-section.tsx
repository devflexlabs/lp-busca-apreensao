import { Bell, Clock, Shield } from 'lucide-react';

export default function SituacaoSection() {
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

    return (
        <section id="situacao" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-left md:text-center mb-16 px-4 md:px-0">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Qual a sua <span className="text-orange-500">situação hoje?</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Clique e resolva agora mesmo!
                    </p>
                </div>

                {/* Desktop version - 3 columns */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {situacaoCards.map((card, index) => (
                        <div key={index} className="bg-white border border-black rounded-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_#ffffff50] flex flex-col">
                            <div className="text-orange-500 mb-4">
                                <card.icon className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-orange-500">{card.title}</h3>
                            <p className="text-black mb-6">
                                {card.description}
                            </p>
                            <button 
                                onClick={scrollToFormulario}
                                className="bg-orange-500 text-white font-bold px-6 py-3 rounded w-full hover:opacity-80 transition-colors cursor-pointer mt-auto"
                            >
                                {card.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Mobile version - Horizontal scroll carousel */}
                <div className="md:hidden">
                    <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {situacaoCards.map((card, index) => (
                            <div key={index} className="bg-white border border-white rounded-lg p-6 flex-shrink-0 w-80 flex flex-col">
                                <div className="text-orange-500 mb-4">
                                    <card.icon className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-orange-500">{card.title}</h3>
                                <p className="text-black mb-6">
                                    {card.description}
                                </p>
                                <button 
                                    onClick={scrollToFormulario}
                                    className="bg-orange-500 text-white font-bold px-6 py-3 rounded w-full hover:opacity-80 transition-colors cursor-pointer mt-auto"
                                >
                                    {index === 0 ? "Solicitar atendimento" : card.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-left md:text-center mt-16">
                    <p className="text-xl mb-4 font-medium text-white">
                        Não entende muito sobre busca e apreensão ou <span className="text-orange-400">como proteger seu carro?</span>
                    </p>
                    <p className="text-black">
                        Em apenas 5 minutos nossa equipe explica tudo de forma simples, sem enrolação, e mostra o melhor caminho para evitar perder seu carro e economizar nas parcelas.
                    </p>
                </div>
            </div>
        </section>
    );
}