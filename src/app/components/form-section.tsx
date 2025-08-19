import { useState, useEffect } from 'react';
import { Shield, Car, CircleCheck } from 'lucide-react';

export default function FormSection() {
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
        const firstGroupComplete = formData.nome && formData.email && formData.telefone && formData.banco;
        const secondGroupComplete = formData.parcelasAtraso && formData.vencimento;

        if (isSubmitted) {
            setProgress(3);
        } else if (firstGroupComplete && secondGroupComplete) {
            setProgress(2);
        } else if (firstGroupComplete) {
            setProgress(1);
        } else {
            setProgress(0);
        }
    }, [formData, isSubmitted]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    // Função para enviar dados para RD Station
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Monta payload conforme API de Conversão
        const payload = {
            conversion_identifier: 'lp_busca_apreensao',
            name: formData.nome,
            email: formData.email,
            mobile_phone: formData.telefone,
            banco: formData.banco,
            parcelas_atraso: formData.parcelasAtraso,
            vencimento_parcela: formData.vencimento,
        };

        try {
            const response = await fetch('/api/rdstation-event', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                console.error('Erro no RD Station:', response.status, await response.text());
            } else {
                console.log('Conversão registrada com sucesso!');
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error('❌ Falha ao enviar conversão:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // tamanhos responsivos dos steps
    const getStepStyle = (step: number) =>
        `${step <= progress ? "bg-[#3B5BA6]" : "bg-gray-300"} 
   rounded-full flex items-center justify-center shrink-0
   w-10 h-10 sm:w-12 sm:h-12`;

    const getIconStyle = (step: number) =>
        `${step <= progress ? "text-white" : "text-gray-500"} 
   w-5 h-5 sm:w-6 sm:h-6`;

    // converte de YYYY-MM-DD para DD/MM/YYYY
    const formatDisplayDate = (isoDate: string) => {
        if (!isoDate) return '';
        const [year, month, day] = isoDate.split('-');
        return `${day}/${month}/${year}`;
    };

    // converte de DD/MM/YYYY para YYYY-MM-DD
    const parseDisplayDate = (displayDate: string) => {
        const [day, month, year] = displayDate.split('/');
        if (!day || !month || !year) return '';
        return `${year}-${month}-${day}`;
    };
    return (
        <section
            id="formulario"
            className="py-20 px-4 md:px-0"
        >
            <div className="container mx-auto px-4">
                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:block hidden md:text-5xl font-bold w-full text-white mb-6">
                                Cada minuto aumenta o risco!
                            </h2>
                            <h2 className="text-3xl md:hidden block md:text-5xl font-bold w-full text-white mb-6">
                                Solicite uma análise gratuita do seu caso
                            </h2>
                            <p className="md:block hidden text-xl text-white">
                                Com uma <strong>análise rápida e gratuita</strong>, descubra como evitar
                                a busca e apreensão, <strong>como evitar <br /> a busca e apreensão</strong> e <strong>reduzir suas parcelas</strong> de forma simples e sem enrolação.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-[#3B5BA6] mb-4">
                                    Nós entraremos em contato com você!
                                </h3>
                                <p className="text-gray-600">
                                    Basta preencher o formulário abaixo com as suas informações de contato:
                                </p>
                            </div>

                            <div className="flex justify-center mb-8">
                                <div className="w-full max-w-md sm:max-w-none px-2 overflow-hidden">
                                    <div className="flex items-center gap-2 sm:gap-4">
                                        <div className={getStepStyle(1)}>
                                            <Shield className={getIconStyle(1)} />
                                        </div>

                                        <div className="flex-1 h-px bg-gray-300" />

                                        <div className={getStepStyle(2)}>
                                            <Car className={getIconStyle(2)} />
                                        </div>

                                        <div className="flex-1 h-px bg-gray-300" />

                                        <div className={getStepStyle(3)}>
                                            <CircleCheck className={getIconStyle(3)} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="nome"
                                        placeholder="Nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500"
                                        required
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="tel"
                                        name="telefone"
                                        placeholder="Telefone"
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="banco"
                                        placeholder="Banco"
                                        value={formData.banco}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500"
                                        required
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#3B5BA6] mb-1">
                                            Parcelas em atraso:
                                        </label>
                                        <input
                                            type="text"
                                            name="parcelasAtraso"
                                            placeholder="XXXXXX"
                                            value={formData.parcelasAtraso}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500"
                                            required
                                        />
                                    </div>
                                    {/* Vencimento */}
                                    {/* Vencimento */}
                                    <div className="w-full min-w-0">
                                        <label className="block text-sm font-medium text-[#3B5BA6] mb-1">
                                            Vencimento da sua parcela:
                                        </label>

                                        {/* Mobile: placeholder visível */}
                                        {/* Mobile */}
                                        <input
                                            type="text"
                                            name="vencimento"
                                            placeholder="DD/MM/AAAA"
                                            value={formatDisplayDate(formData.vencimento)}
                                            onChange={(e) => {
                                                const parsed = parseDisplayDate(e.target.value);
                                                setFormData(prev => ({ ...prev, vencimento: parsed }));
                                            }}
                                            className="block sm:hidden w-full h-14 px-4 bg-gray-100 rounded text-gray-800 placeholder-gray-500 border focus:border-[#3B5BA6] focus:outline-none"
                                        />

                                        {/* Desktop / Tablet */}
                                        <input
                                            type="date"
                                            name="vencimento"
                                            value={formData.vencimento}
                                            onChange={(e) => setFormData(prev => ({ ...prev, vencimento: e.target.value }))}
                                            className="hidden sm:block w-full h-12 px-4 appearance-none bg-gray-100 rounded text-gray-800 placeholder-gray-500 focus:border-[#3B5BA6] focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#3B5BA6] flex mx-auto text-white px-8 py-3 rounded hover:bg-opacity-80 transition-colors font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Consultar'}
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 text-center">
                        <h3 className="text-3xl font-bold text-black mb-6">
                            Enviado com sucesso!
                        </h3>
                        <p className="text-gray-700 mb-8">
                            Obrigado por enviar seus dados. Em breve, nossa equipe entrará em contato.
                        </p>
                        <button
                            onClick={handleBack}
                            className="bg-black text-orange-500 px-8 py-3 rounded hover:bg-orange-500 hover:text-black transition-colors font-bold cursor-pointer"
                        >
                            Voltar
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}