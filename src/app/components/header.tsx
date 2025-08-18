import { Menu } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/app/components/dropdown-menu';

export default function Header() {
    return (
        <header className="bg-black/90 backdrop-blur-sm fixed w-full top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src="/logo-grupo-flex.png" alt="Logo Grupo Flex" className="md:h-12 h-10" />
                    </div>

                    {/* Menu Desktop - só mostra em telas grandes */}
                    <div className="hidden lg:flex space-x-8 font-poppins">
                        <a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a>
                        <a href="#situacao" className="hover:text-orange-500 transition-colors">Situação</a>
                        <a href="#solucao" className="hover:text-orange-500 transition-colors">Solução</a>
                        <a href="#formulario" className="hover:text-orange-500 transition-colors">Formulário</a>
                        <a href="#ajuda" className="hover:text-orange-500 transition-colors">Ajuda</a>
                    </div>

                    {/* Menu Mobile / iPad */}
                    <div className="lg:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button aria-label="Abrir menu">
                                    <Menu size={32} strokeWidth={2} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white" align="start">
                                {["#inicio", "#situacao", "#solucao", "#formulario", "#ajuda"].map((id, i) => (
                                    <DropdownMenuItem key={i} asChild>
                                        <a href={id} className="w-full hover:text-orange-500 transition-colors capitalize">
                                            {id.replace("#", "")}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <button  onClick={() => (window as any).abrirFormularioWhatsApp()} className="hidden lg:block border border-white text-orange-500 font-bold px-4 py-2 rounded hover:bg-orange-500 hover:text-black transition-colors cursor-pointer">
                        Entrar em contato
                    </button>
                </div>
            </nav>
        </header>
    );
}