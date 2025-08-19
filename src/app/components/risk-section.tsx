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
        <section id="ajuda" className="py-20 relative overflow-hidden md:h-[700px] px-4 md:px-0">
            <div className="absolute inset-0 h-full">
                <img
                    src="/carro-guinchado.jpg"
                    alt="Imagem de fundo carro guinchado"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-orange-[500]">
                        Risco de perder o carro?
                    </h2>
                    <p className="text-xl text-gray-300">
                        Cada dia atrasado pode custar seu veículo!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {riskItems.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-white mb-4 flex justify-center">
                                <item.icon className="w-16 h-16" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-orange-500">{item.title}</h3>
                            <p className="text-gray-300 mb-4">
                                {item.description}  <span className="text-white font-bold">{item.highlight}</span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button onClick={() => (window as any).abrirFormularioWhatsApp()} className="border border-[#3B5BA6] text-white font-bold px-8 py-3 rounded hover:bg-[#3B5BA6] hover:text-white transition duration-300 ease-in-out cursor-pointer">
                        Solicitar atendimento
                    </button>
                </div>
            </div>
        </section>
    );
}