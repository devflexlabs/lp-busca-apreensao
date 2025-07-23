import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const handleResolverAgora = () => {
    const zenviaBtn = document.querySelector('.znv-float-button');
    if (zenviaBtn && zenviaBtn instanceof HTMLElement) {
      zenviaBtn.click();
    } else {
      console.log('Botão do Zenvia não encontrado');
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-[700px] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div
        className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-30"
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl text-left md:text-center md:text-6xl font-bold mb-6">
          Parcelas atrasadas e
          <br className="md:block hidden" />
          <span className="text-orange-500"> Risco de perder seu carro?</span>
        </h1>
        <div className="mt-40 md:mt-0">
          <p className="text-xl text-left md:text-center md:text-2xl mb-8 text-gray-300">
            <strong>Não espere perder seu carro!</strong> Tome uma atitude agora!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.open('https://grupoflex.com.br', '_blank')}
                className="border border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                Saiba Mais
              </button>
              <button
                onClick={handleResolverAgora}
                className="bg-[#3B5BA6] text-white font-bold px-8 py-3 rounded hover:opacity-80 transition-colors cursor-pointer text-center"
              >
                RESOLVA AGORA!
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#situacao"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </a>
    </section>
  );
}
