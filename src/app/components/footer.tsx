import { Phone, Mail, Clock, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const navigationLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#situacao", label: "Situação" },
    { href: "#soluçao", label: "Solução" },
    { href: "#formulario", label: "Formulário" },
    { href: "#ajuda", label: "Ajuda" }
  ];

  const supportInfo = [
    { icon: Phone, text: "(+51) 4141-7783" },
    { icon: Phone, text: "(+51) 9.8906-6224" },
    { icon: Mail, text: "contato@grupoflex.com.br" },
    { icon: Clock, text: "Das 9 às 18 hrs (seg-sex)" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: MessageCircle, href: "#" }
  ];

  const footerLinks = [
    { href: "#", label: "Termos de uso" },
    { href: "#", label: "Política de Privacidade" },
    { href: "#", label: "Política de Cookies" }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 md:px-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <img src="/logo-grupo-flex.png" alt="Logo Grupo Flex" className="md:h-12 h-10" />
            </div>
            <p className="text-gray-400 mb-6">
              Integrando soluções e entregando tranquilidade para sua vida pessoal e profissional.
            </p>

            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Chaves Rápidas</h4>
            <ul className="space-y-2 text-gray-400">
              {navigationLinks.map(({ href, label }, index) => (
                <li key={index}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              {supportInfo.map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Grupo Flex. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs">
            {footerLinks.map(({ href, label }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
