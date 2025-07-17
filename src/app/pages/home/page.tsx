// pages/index.js
"use client"
import Head from 'next/head'
import { useState } from 'react'
import { ChevronDown, Bell, Clock, Shield, Car, Lightbulb, Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react'

export default function HomePage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        banco: '',
        parcelasAtraso: '',
        vencimento: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Aqui você implementaria a lógica de envio
    }

    return (
        <div className='font-poppins'>
            <div className="min-h-screen bg-black text-white">
                {/* Header */}
                <header className="bg-black/90 backdrop-blur-sm fixed w-full top-0 z-50">
                    <nav className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-bold">grupoflex</span>
                            </div>

                            <div className="hidden md:flex space-x-8 font-poppins">
                                <a href="#inicio" className="hover:text-orange-400 transition-colors">Início</a>
                                <a href="#situacao" className="hover:text-orange-400 transition-colors">Situação</a>
                                <a href="#trabalho" className="hover:text-orange-400 transition-colors">Trabalho</a>
                                <a href="#formulario" className="hover:text-orange-400 transition-colors">Formulário</a>
                                <a href="#ajuda" className="hover:text-orange-400 transition-colors">Ajuda</a>
                            </div>

                            <button className="border border-orange-400 text-orange-400 font-bold px-4 py-2 rounded hover:bg-orange-400 hover:text-black transition-colors cursor-pointer">
                                Entrar em contato
                            </button>
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
                    <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-30" />
                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Parcelas atrasadas e<br />
                            <span className="text-orange-400">Risco de perder seu carro?</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-300">
                            Nossa equipe vai te ajudar a resolver com agilidade e segurança. <strong>Não perca tempo!</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="border border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">
                                Saiba Mais
                            </button>
                            <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded hover:bg-orange-600 transition-colors cursor-pointer">
                                RESOLVA AGORA!
                            </button>
                        </div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-white" />
                    </div>
                </section>

                {/* Situação Section */}
                <section id="situacao" className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Qual a sua <span className="text-orange-400">situação hoje?</span>
                            </h2>
                            <p className="text-xl text-gray-300">
                                Clique abaixo e resolva agora mesmo:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-[#1E1E1E] border border-[#FFFFFF] rounded-lg p-8 transition-colors flex flex-col">
                                <div className="text-orange-400 mb-4">
                                    <Bell className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-orange-400">Recebeu notificação?</h3>
                                <p className="text-gray-300 mb-6">
                                    Agimos rápido pra proteger você antes da apreensão acontecer.
                                </p>
                                <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded w-full hover:bg-orange-600 transition-colors cursor-pointer mt-auto">
                                    Solicitar atendimento urgente
                                </button>
                            </div>

                            <div className="bg-[#1E1E1E] border border-[#FFFFFF] rounded-lg p-8 transition-colors flex flex-col">
                                <div className="text-orange-400 mb-4">
                                    <Clock className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-orange-400">Parcelas atrasadas</h3>
                                <p className="text-gray-300 mb-6">
                                    Tenha clareza da sua situação e evite perder seu carro!
                                </p>
                                <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded w-full hover:bg-orange-600 transition-colors cursor-pointer mt-auto">
                                    Consultar minha situação
                                </button>
                            </div>

                            <div className="bg-[#1E1E1E] border border-[#FFFFFF] rounded-lg p-8 transition-colors flex flex-col">
                                <div className="text-orange-400 mb-4">
                                    <Shield className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-orange-400">Proteção veicular</h3>
                                <p className="text-gray-300 mb-6">
                                    Evite surpresas desagradáveis e mantenha seu veículo sempre seguro.
                                </p>
                                <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded w-full hover:bg-orange-600 transition-colors cursor-pointer mt-auto">
                                    Organizar planejamento
                                </button>
                            </div>
                        </div>

                        <div className="text-center mt-16">
                            <p className="text-xl mb-4">
                                Não entende muito sobre busca e apreensão ou <span className="text-orange-400">como proteger seu carro?</span>
                            </p>
                            <p className="text-gray-300">
                                Em apenas 5 minutos nossa equipe explica tudo de forma simples, sem enrolação, e mostra o melhor caminho para evitar perder seu carro e economizar nas parcelas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Relax Section */}
                <section
                    className="relative py-20 from-gray-900 to-black h-[980px]"
                >
                    {/* Imagem de fundo */}
                    <div className="absolute inset-0 opacity-30 h-full">
                        <img
                            src="/homem-dirigindo.png"
                            alt="Imagem de fundo homem dirigindo"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Conteúdo fica por cima */}
                    <div className="relative container mx-auto px-4 text-center flex flex-col justify-between h-full">
                        {/* Topo */}
                        <div className="mt-0"> {/* Pode ajustar margens se quiser */}
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-orange-400">Relaxe</span> enquanto a gente <span className="text-orange-400">resolve tudo</span> pra você!
                            </h2>
                            <p className="text-xl text-gray-300">
                                Enquanto você cuida da sua vida, nossa equipe trabalha sem parar para resolver sua situação de parcelas atrasadas e proteger seu carro contra busca e apreensão.
                            </p>
                        </div>

                        {/* Rodapé */}
                        <div className="mb-0"> {/* Ajuste margens também */}
                            <h3 className="text-3xl font-bold mb-4">
                                <span className="text-orange-400">Mais tempo pra você</span>, menos preocupação com o carro
                            </h3>
                            <p className="text-gray-300 mb-8">
                                Deixe o trabalho pesado com a gente. Enquanto você relaxa, nossa equipe cuida de proteger seu veículo, evitar a busca e apreensão e resolver sua situação com rapidez e eficiência.
                            </p>
                            <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded hover:bg-orange-600 transition-colors cursor-pointer">
                                RESOLVA AGORA!
                            </button>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section id="formulario" className="py-20 bg-orange-500">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Resolva sua situação com uma análise gratuita
                            </h2>
                            <p className="text-xl text-white">
                                Com uma <strong>análise rápida e gratuita</strong>, descubra se você corre risco de perder seu carro, <strong>como evitar a busca e apreensão</strong> e <strong>reduzir suas parcelas</strong> de forma simples e sem enrolação.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                                    Nós entraremos em contato com você!
                                </h3>
                                <p className="text-gray-600">
                                    Basta preencher o formulário abaixo com as suas informações de contato:
                                </p>
                            </div>

                            <div className="flex justify-center mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">1</span>
                                    </div>
                                    <div className="w-16 h-0.5 bg-gray-300" />
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-gray-500" />
                                    </div>
                                    <div className="w-16 h-0.5 bg-gray-300" />
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                        <Car className="w-6 h-6 text-gray-500" />
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
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
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
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Vencimento da sua parcela:
                                        </label>
                                        <input
                                            type="date"
                                            name="vencimento"
                                            value={formData.vencimento}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800"
                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="bg-orange-500 flex mx-auto text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors font-bold cursor-pointer">
                                    Consultar
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Risk Section */}
                <section className="py-20 bg-black relative overflow-hidden md:h-[700px]">
                    <div className="absolute inset-0 h-full">
                        <img
                            src="/carro-guinchado.jpg"
                            alt="Imagem de fundo carro guinchado"
                            className="w-full h-full object-cover opacity-30"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Cada dia que passa <span className="text-orange-400">aumenta o risco</span> de perder seu carro
                            </h2>
                            <p className="text-xl text-gray-300">
                                Evite maiores prejuízos agindo rápido!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="text-center">
                                <div className="text-orange-400 mb-4 flex justify-center">
                                    <Car className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-orange-400">RISCO DE PERDER O CARRO</h3>
                                <p className="text-gray-300 mb-4">
                                    Quanto mais tempo você deixa atrasar, maior o risco do banco apreender seu veículo.
                                </p>
                                <p className="text-white font-bold">
                                    Não espere perder seu carro para buscar ajuda.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-orange-400 mb-4 flex justify-center">
                                    <Lightbulb className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-orange-400">REVERSÃO</h3>
                                <p className="text-gray-300 mb-4">
                                    Quando o carro é levado, recuperar o veículo fica muito mais caro e complicado.
                                </p>
                                <p className="text-white font-bold">
                                    Resolva antes de chegar nesse ponto.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-orange-400 mb-4 flex justify-center">
                                    <Clock className="w-16 h-16" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-orange-400">DINHEIRO PERDIDO</h3>
                                <p className="text-gray-300 mb-4">
                                    Deixar pra depois faz você gastar muito mais tempo e dinheiro tentando recuperar o que poderia ter sido resolvido agora.
                                </p>
                                <p className="text-white font-bold">
                                    Ganhe tempo e tranquilidade.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="border border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">
                                Solicitar atendimento
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-black border-t border-gray-800 py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-xl font-bold">grupoflex</span>
                                </div>
                                <p className="text-gray-400 mb-6">
                                    Integrando soluções e entregando tranquilidade para sua vida pessoal e profissional.
                                </p>

                                <div>
                                    <h4 className="font-bold mb-4">Redes Sociais</h4>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                            <Instagram className="w-5 h-5 text-black" />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                            <Facebook className="w-5 h-5 text-black" />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                            <Linkedin className="w-5 h-5 text-black" />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                                            <MessageCircle className="w-5 h-5 text-black" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4">Chaves Rápidas</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                                    <li><a href="#situacao" className="hover:text-white transition-colors">Situação</a></li>
                                    <li><a href="#trabalho" className="hover:text-white transition-colors">Trabalho</a></li>
                                    <li><a href="#formulario" className="hover:text-white transition-colors">Formulário</a></li>
                                    <li><a href="#ajuda" className="hover:text-white transition-colors">Ajuda</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-4">Suporte</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-center space-x-2">
                                        <Phone className="w-4 h-4" />
                                        <span>(+51) 4141-7783</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Phone className="w-4 h-4" />
                                        <span>(+51) 9.8906-6224</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Mail className="w-4 h-4" />
                                        <span>contato@grupoflex.com.br</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Clock className="w-4 h-4" />
                                        <span>Das 9 às 18 hrs (seg-sex)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                © 2025 Grupo Flex. Todos os direitos reservados.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Termos de uso</a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidade</a>
                                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Cookies</a>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* WhatsApp Float Button */}
                <div className="fixed bottom-6 right-6 z-50">
                    <a
                        href="https://wa.me/5551989066224"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    )
}