import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, MapPin, Phone, Settings2 } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenSettings: () => void;
  whatsAppNumber: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenSettings,
  whatsAppNumber,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Antes & Depois', href: '#transformacoes' },
    { label: 'Sobre Antonia', href: '#sobre' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
          : 'bg-[#FAF7F2] py-4 border-b border-stone-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#A37D50] transition-colors">
              SALÃO ANTÔNIA RIBEIRO
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-stone-500 -mt-0.5">
              Estética · Saúde · Beleza · Belém (Marco)
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-stone-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A37D50] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* Quick config for phone */}
            <button
              onClick={onOpenSettings}
              title="Configurar número do WhatsApp"
              className="hidden sm:flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 transition-colors px-2 py-1.5 rounded border border-stone-200/80 hover:border-stone-300"
            >
              <Settings2 className="w-3.5 h-3.5 text-stone-400" />
              <span>WhatsApp: {(whatsAppNumber.replace(/^55/, '')) || '91 9...'}</span>
            </button>

            {/* Direct WhatsApp Call to Action Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#1B8049] hover:bg-[#15693C] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-200 group active:scale-[0.98] cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
              </span>
              <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Agendar no WhatsApp</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-stone-200 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-2 text-base font-medium text-stone-800 hover:bg-stone-100 rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <div className="text-xs text-stone-500 flex items-center gap-1.5 px-2">
                <MapPin className="w-3.5 h-3.5 text-[#A37D50]" />
                <span>Tv. Dr. Enéas Pinheiro, 2672 – Marco</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSettings();
                }}
                className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1.5 px-2 py-1"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Alterar número do WhatsApp ({whatsAppNumber})</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
