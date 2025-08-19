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
        <section id="solucao" className="relative py-20 h-[980px] px-4 md:px-0 bg-black/70 backdrop-blur-xs">
            {/* Imagem de fundo */}
            <div className="absolute inset-0 opacity-40">
                {/* Desktop */}
                <img
                    src="/homem-dirigindo.png"
                    alt="Imagem de fundo homem dirigindo"
                    className="hidden md:block w-full h-full object-cover object-center"
                />
            </div>

            {/* Conteúdo fica por cima */}
            <div className="relative container mx-auto px-4 text-left md:text-center flex flex-col justify-between h-full">
                
                {/* Topo com imagem de fundo no mobile */}
                <div className="mt-0 relative">
                    {/* Imagem de fundo apenas no mobile - cobre desde "Relaxe" */}
                    <div className="absolute inset-0 md:hidden bg-[url('/homem-dirigindo-mobile.png')] bg-cover bg-center  opacity-40 -mx-10" style={{bottom: '-30px', top: '-100px'}}></div>
                    
                    {/* Conteúdo do topo */}
                    <div className="relative md:p-0 p-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mt-0 mt-[-60px]">
                            <span className="text-orange-500">Relaxe</span> enquanto a gente <span className="text-orange-500">resolve tudo</span> pra você!
                        </h2>
                        <p className="text-xl text-gray-300">
                            Enquanto você cuida da sua vida, nossa equipe trabalha sem parar para resolver sua situação de parcelas atrasadas e proteger seu carro contra busca e apreensão.
                        </p>
                    </div>
                </div>

                {/* Rodapé - ainda dentro da área com imagem de fundo no mobile */}
                <div className="mb-0 relative md:p-0 p-6">
                    <h3 className="text-3xl font-bold mb-4">
                        <span className="text-orange-500">Mais tempo pra você</span>, menos preocupação com o carro
                    </h3>
                    <p className="text-gray-300 mb-8">
                        Deixe o trabalho pesado com a gente. Enquanto você relaxa, nossa equipe cuida de proteger seu veículo, evitar a busca e apreensão e resolver sua situação com rapidez e eficiência.
                    </p>
                    <button
                        onClick={handleResolverAgora}
                        className="bg-white text-orange-500 font-bold px-8 py-3 rounded hover:opacity-80  transition-colors cursor-pointer mx-auto flex"
                    >
                        RESOLVA AGORA!
                    </button>
                </div>
            </div>
        </section>
    );
}