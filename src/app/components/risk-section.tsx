import { Car, Lightbulb, Clock } from 'lucide-react';

export default function RiskSection() {
    const riskItems = [
        {
            icon: Car,
            title: "RISCO DE PERDER O CARRO",
            description: "Quanto mais tempo você deixa atrasar, maior o risco do banco apreender seu veículo.",
            highlight: "Não espere perder seu carro para buscar ajuda."
        },
        {
            icon: Lightbulb,
            title: "REVERSÃO",
            description: "Quando o carro é levado, recuperar o veículo fica muito mais caro e complicado.",
            highlight: "Resolva antes de chegar nesse ponto."
        },
        {
            icon: Clock,
            title: "DINHEIRO PERDIDO",
            description: "Deixar pra depois faz você gastar muito mais tempo e dinheiro tentando recuperar o que poderia ter sido resolvido agora.",
            highlight: "Ganhe tempo e tranquilidade."
        }
    ];

    return (
        <section id="ajuda" className="py-20 bg-black relative overflow-hidden md:h-[700px] px-4 md:px-0">
            <div className="absolute inset-0 h-full">
                <img
                    src="/carro-guinchado.jpg"
                    alt="Imagem de fundo carro guinchado"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Cada dia que passa <span className="text-orange-500">aumenta o risco</span> de perder seu carro
                    </h2>
                    <p className="text-xl text-gray-300">
                        Evite maiores prejuízos agindo rápido!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {riskItems.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-orange-500 mb-4 flex justify-center">
                                <item.icon className="w-16 h-16" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-orange-500">{item.title}</h3>
                            <p className="text-gray-300 mb-4">
                                {item.description}
                            </p>
                            <p className="text-white font-bold">
                                {item.highlight}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">
                        Solicitar atendimento
                    </button>
                </div>
            </div>
        </section>
    );
}