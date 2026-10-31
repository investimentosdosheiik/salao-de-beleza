import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Clock, User, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  whatsAppNumber: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  whatsAppNumber,
}) => {
  const [service, setService] = useState(initialService || SALON_DATA.services[0].title);
  const [day, setDay] = useState('Esta Semana');
  const [shift, setShift] = useState('Manhã (09h - 13h)');
  const [clientName, setClientName] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const nameStr = clientName.trim() ? `Meu nome é *${clientName.trim()}*. ` : '';
    const message = `Olá, Antonia! Gostaria de agendar um horário no salão do Marco.\n\n${nameStr}✨ *Procedimento:* ${service}\n📅 *Previsão:* ${day}\n⏰ *Turno de preferência:* ${shift}\n\nVocê tem vaga disponível nesta semana?`;
    
    const cleanPhone = whatsAppNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Atendimento Rápido · Studio Antonia Ribeiro
          </div>
          <h3 className="font-serif-display text-2xl font-bold text-stone-900">
            Agendar Horário Exclusivo
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Escolha o procedimento e fale diretamente com a equipe para confirmar sua data.
          </p>
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Serviço Desejado
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full text-sm rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-stone-800 focus:bg-white focus:border-[#A37D50] focus:ring-1 focus:ring-[#A37D50]"
            >
              {SALON_DATA.services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} — a partir de {s.priceFrom}
                </option>
              ))}
              <option value="Avaliação Personalizada / Teste de Mecha">
                Outro procedimento / Quero fazer avaliação primeiro
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                Dia Preferido
              </label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full text-sm rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-stone-800 focus:bg-white focus:border-[#A37D50] focus:ring-1 focus:ring-[#A37D50]"
              >
                <option value="Esta Semana (Mais rápido)">Esta Semana</option>
                <option value="Hoje / Encaixe urgente">Hoje / Encaixe</option>
                <option value="Amanhã">Amanhã</option>
                <option value="Quinta-feira">Quinta-feira</option>
                <option value="Sexta-feira">Sexta-feira</option>
                <option value="Sábado">Sábado</option>
                <option value="Semana que vem">Semana que vem</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                Turno
              </label>
              <select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                className="w-full text-sm rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-stone-800 focus:bg-white focus:border-[#A37D50] focus:ring-1 focus:ring-[#A37D50]"
              >
                <option value="Manhã (09h - 13h)">Manhã (09h - 13h)</option>
                <option value="Tarde (13h - 18h)">Tarde (13h - 18h)</option>
                <option value="Qualquer horário vago">Qualquer horário vago</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-stone-400" />
              Seu Nome (opcional)
            </label>
            <input
              type="text"
              placeholder="Como podemos te chamar?"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full text-sm rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-stone-800 focus:bg-white focus:border-[#A37D50] focus:ring-1 focus:ring-[#A37D50]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#1B8049] hover:bg-[#15693C] text-white font-bold text-sm py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Abrir WhatsApp e Confirmar Vaga</span>
            </button>
            <p className="text-[11px] text-center text-stone-500 mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
              Sem taxa de pré-reserva · Tv. Dr. Enéas Pinheiro, 2672 (Marco)
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
