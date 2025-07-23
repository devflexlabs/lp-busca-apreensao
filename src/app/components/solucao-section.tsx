export default function SolucaoSection() {
    const handleResolverAgora = () => {
        const zenviaBtn = document.querySelector('.znv-float-button');
        if (zenviaBtn && zenviaBtn instanceof HTMLElement) {
            zenviaBtn.click();
        } else {
            console.log('Botão do Zenvia não encontrado');
        }
    };

    return (
        <section id="solucao" className="relative py-20 from-gray-900 to-black h-[980px] px-4 md:px-0">
            {/* Imagem de fundo */}
            <div className="absolute inset-0 opacity-30">
                <img
                    src="/homem-dirigindo.png"
                    alt="Imagem de fundo homem dirigindo"
                    className="w-[500px] md:w-full h-full object-cover object-center"
                />
            </div>

            {/* Conteúdo fica por cima */}
            <div className="relative container mx-auto px-4 text-left md:text-center flex flex-col justify-between h-full">
                {/* Topo */}
                <div className="mt-0">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-orange-500">Relaxe</span> enquanto a gente <span className="text-orange-500">resolve tudo</span> pra você!
                    </h2>
                    <p className="text-xl text-gray-300">
                        Enquanto você cuida da sua vida, nossa equipe trabalha sem parar para resolver sua situação de parcelas atrasadas e proteger seu carro contra busca e apreensão.
                    </p>
                </div>

                {/* Rodapé */}
                <div className="mb-0">
                    <h3 className="text-3xl font-bold mb-4">
                        <span className="text-orange-500">Mais tempo pra você</span>, menos preocupação com o carro
                    </h3>
                    <p className="text-gray-300 mb-8">
                        Deixe o trabalho pesado com a gente. Enquanto você relaxa, nossa equipe cuida de proteger seu veículo, evitar a busca e apreensão e resolver sua situação com rapidez e eficiência.
                    </p>
                    <button
                        onClick={handleResolverAgora}
                        className="bg-[#3B5BA6] text-white font-bold px-8 py-3 rounded hover:opacity-80  transition-colors cursor-pointer mx-auto flex"
                    >
                        RESOLVA AGORA!
                    </button>
                </div>
            </div>
        </section>
    );
}