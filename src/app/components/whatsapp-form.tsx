'use client';

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

type WhatsAppFormProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function WhatsAppForm({ isOpen, setIsOpen }: WhatsAppFormProps) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    banco: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    internal_source: '',
  });

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setForm((prev) => ({
      ...prev,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      internal_source: params.get('internal_source') || '',
    }));
  }, []);

  // Bloquear scroll do body quando abrir modal e liberar quando fechar
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Limpar no unmount, caso algo dê errado
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fecha modal se clicar fora da área branca
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/rdstation-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      alert('Enviado com sucesso!');
      setIsOpen(false);
    } catch {
      alert('Erro ao enviar');
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition cursor-pointer"
        >
          <FaWhatsapp className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={handleOutsideClick}
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-2xl w-full max-w-md relative shadow-xl animate-fade-in"
          >
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-red-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
            <h2 className="text-center text-gray-700 mb-4 text-base mt-8">
              Preencha os campos abaixo para que possamos entrar em contato com você:
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'nome', label: 'Nome', type: 'text' },
                { name: 'email', label: 'E-mail', type: 'email' },
                { name: 'telefone', label: 'Telefone', type: 'tel' },
                { name: 'banco', label: 'Banco', type: 'text' },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-sm text-gray-600 font-medium"
                  >
                    {label}
                  </label>
                  <input
                    required
                    type={type}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 p-2 outline-none text-gray-500"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition cursor-pointer"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
