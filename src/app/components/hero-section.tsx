import { Input } from '@/components/ui/input';
import { ChevronDown, Car, Shield, CircleCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    banco: '',
    parcelasAtraso: '',
    vencimento: ''
  });

  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const firstGroupComplete = formData.nome && formData.email && formData.telefone;
    const bancoPreenchido = !!formData.banco;
    const allFieldsComplete =
      formData.nome &&
      formData.email &&
      formData.telefone &&
      formData.banco &&
      formData.parcelasAtraso &&
      formData.vencimento;

    if (isSubmitted) {
      setProgress(3);
    } else if (allFieldsComplete) {
      setProgress(2);
    } else if (firstGroupComplete && bancoPreenchido) {
      setProgress(1.5);
    } else if (firstGroupComplete) {
      setProgress(1);
    } else {
      setProgress(0);
    }
  }, [formData, isSubmitted]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBack = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      banco: '',
      parcelasAtraso: '',
      vencimento: ''
    });
    setIsSubmitted(false);
    setProgress(0);
  };

  const handleSubmit = async () => {
    const allFieldsComplete =
      formData.nome && formData.email && formData.telefone &&
      formData.banco && formData.parcelasAtraso && formData.vencimento;

    if (!allFieldsComplete) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const getStepStyle = (step: number) => {
    const isActive =
      (step === 1 && progress >= 1) ||
      (step === 2 && progress >= 1.5) ||
      (step === 3 && progress >= 2);
    return `w-12 h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-orange-500' : 'bg-gray-300'}`;
  };

  const getIconStyle = (step: number) => {
    const isActive =
      (step === 1 && progress >= 1) ||
      (step === 2 && progress >= 1.5) ||
      (step === 3 && progress >= 2);
    return `w-6 h-6 ${isActive ? 'text-white' : 'text-gray-500'}`;
  };

  const handleResolverAgora = () => {
    const zenviaBtn = document.querySelector('.znv-float-button');
    if (zenviaBtn && zenviaBtn instanceof HTMLElement) zenviaBtn.click();
    else console.log('Botão do Zenvia não encontrado');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div
        className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-30"
      />

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Parcelas atrasadas e <span className="text-orange-500">Risco de perder seu carro?</span>
              </h1>
              <div className="space-y-4">
                <p className="text-xl font-bold">Não espere perder seu carro!</p>
                <p className="text-lg text-gray-300">Tome uma atitude agora!</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.open('https://grupoflex.com.br', '_blank')}
                className="border border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                Saiba Mais
              </button>
              <button
                onClick={handleResolverAgora}
                className="bg-orange-500 text-white font-bold px-8 py-3 rounded hover:bg-orange-600 transition-colors cursor-pointer"
              >
                ATENDIMENTO IMEDIATO
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full max-w-lg sm:max-w-full mx-auto p-4 sm:p-8">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Nós entraremos em contato com você!
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Basta preencher o formulário abaixo com as suas informações de contato:
                  </p>
                </div>

                {/* Progress */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={getStepStyle(1)}><Shield className={getIconStyle(1)} /></div>
                    <div className="w-8 h-0.5 bg-gray-300" />
                    <div className={getStepStyle(2)}><Car className={getIconStyle(2)} /></div>
                    <div className="w-8 h-0.5 bg-gray-300" />
                    <div className={getStepStyle(3)}><CircleCheck className={getIconStyle(3)} /></div>
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="space-y-4">

                  {/* Nome e Email */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="text"
                      name="nome"
                      placeholder="Nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 border border-gray-200 focus:border-orange-500 focus:outline-none"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 border border-gray-200 focus:border-orange-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Telefone e Banco */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      name="telefone"
                      placeholder="Telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 border border-gray-200 focus:border-orange-500 focus:outline-none"
                      required
                    />
                    <Input
                      type="text"
                      name="banco"
                      placeholder="Banco"
                      value={formData.banco}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 border border-gray-200 focus:border-orange-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Parcelas e Vencimento */}
                  <div className="flex flex-col sm:flex-row gap-4 mx-auto justify-center">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">
                        Parcelas em atraso:
                      </label>
                      <Input
                        type="text"
                        name="parcelasAtraso"
                        placeholder="XXXXXX"
                        value={formData.parcelasAtraso}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 border border-gray-200 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-1">
                        Vencimento:
                      </label>
                      <Input
                        type="date"
                        name="vencimento"
                        value={formData.vencimento}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 border border-gray-200 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex mx-auto max-w-[180px] bg-orange-500 text-white font-bold px-8 py-4 rounded hover:bg-orange-600 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6 cursor-pointer"
                  >
                    {isSubmitting ? 'Enviando...' : 'Consultar'}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <CircleCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Enviado com sucesso!</h3>
                  <p className="text-gray-600">Obrigado por enviar seus dados. Em breve, nossa equipe entrará em contato.</p>
                </div>
                <button
                  onClick={handleBack}
                  className="bg-gray-800 text-orange-500 px-8 py-3 rounded hover:bg-orange-500 hover:text-white transition-colors font-bold"
                >
                  Voltar
                </button>
              </div>
            )}
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
