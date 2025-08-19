import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/app/components/dropdown-menu';

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xs"></div> {/* fundo com blur */}

            <nav className="relative container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src="/logo-grupo-flex.png" alt="Logo Grupo Flex" className="md:h-12 h-10" />
                    </div>

                    {/* Menu Desktop */}
                    <div className="hidden lg:flex space-x-8 font-poppins">
                        <a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a>
                        <a href="#situacao" className="hover:text-orange-500 transition-colors">Situação</a>
                        <a href="#solucao" className="hover:text-orange-500 transition-colors">Solução</a>
                        <a href="#formulario" className="hover:text-orange-500 transition-colors">Formulário</a>
                        <a href="#ajuda" className="hover:text-orange-500 transition-colors">Ajuda</a>
                    </div>

                    {/* Menu Mobile */}
                    <div className="lg:hidden">
                        {/* ... seu dropdown ... */}
                    </div>

                    <button
                        onClick={() => (window as any).abrirFormularioWhatsApp()}
                        className="hidden lg:block border border-white text-orange-500 font-bold px-4 py-2 rounded hover:bg-orange-500 hover:text-black transition-colors cursor-pointer"
                    >
                        Entrar em contato
                    </button>
                </div>
            </nav>
        </header>
    );
}
