import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
  whatsAppNumber: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, whatsAppNumber }) => {
  return (
    <footer className="bg-[#141210] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif-display text-2xl font-bold text-white tracking-tight block">
              ANTONIA RIBEIRO
            </span>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
              Salão de Beleza & Estética · Belém (Marco)
            </p>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Dedicados à arte de transformar sua beleza com saúde e sofisticação. Especialista em mechas,
              loiros saudáveis, morena iluminada e terapia capilar.
            </p>

            <div className="pt-2">
              <a
                href={SALON_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
              >
                <span>★ 4.9 no Google Maps (+380 avaliações no Bairro do Marco)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Navegação Rápida
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Tabela de Serviços & Valores
                </a>
              </li>
              <li>
                <a href="#transformacoes" className="hover:text-white transition-colors">
                  Antes & Depois de Clientes
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Antonia Ribeiro
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações Verificadas
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização & Como Chegar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Atendimento & Endereço
            </span>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {SALON_DATA.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SALON_DATA.schedule.weekdays}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: +{whatsAppNumber}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full bg-[#1B8049] hover:bg-[#15693C] text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Horário no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Studio Antonia Ribeiro. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span>Marco, Belém - PA</span>
            <span>·</span>
            <a
              href={SALON_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 underline"
            >
              Ficha Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
