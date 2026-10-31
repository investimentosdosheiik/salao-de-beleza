import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Clock, CheckCheck, Settings2 } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface FloatingWhatsAppProps {
  whatsAppNumber: string;
  onOpenSettings: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsAppNumber,
  onOpenSettings,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Quero agendar um horário para esta semana',
    'Quanto custa o Loiro dos Sonhos / Morena Iluminada?',
    'Gostaria de resgatar o voucher de primeira visita',
    'Como chegar no salão da Tv. Enéas Pinheiro?',
  ];

  const handleSend = (text: string) => {
    const message = text.trim() || 'Olá, Antonia! Gostaria de informações sobre horários disponíveis no salão.';
    const cleanPhone = whatsAppNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded WhatsApp Modal Box */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[370px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={SALON_DATA.images.specialist}
                  alt="Antonia Ribeiro"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/60"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight">Antonia Ribeiro</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span>Online agora</span> · <span>Responde rápido</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#EFEAE2] p-4 space-y-3 min-h-[190px] max-h-[300px] overflow-y-auto">
            {/* Automatic Greeting bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-xs max-w-[90%] text-xs text-stone-800 space-y-1">
              <p className="font-semibold text-stone-900">
                Olá! Seja muito bem-vinda ao Studio Antonia Ribeiro ✨
              </p>
              <p>
                Como posso ajudar você hoje? Clique em um dos tópicos rápidos ou digite sua mensagem:
              </p>
              <div className="text-[9px] text-stone-400 flex items-center justify-end gap-1 pt-1">
                <span>Agora</span>
                <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
              </div>
            </div>

            {/* Quick choice pills */}
            <div className="space-y-1.5 pt-1">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="block w-full text-left text-xs bg-white/95 hover:bg-white text-stone-700 hover:text-stone-950 px-3 py-2 rounded-lg border border-stone-200 shadow-2xs transition-colors cursor-pointer"
                >
                  💬 {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-stone-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(customMsg);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 text-xs px-3 py-2 rounded-full border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-[#1B8049] hover:bg-[#15693C] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Enviar"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
            <div className="mt-2 flex items-center justify-between text-[10px] text-stone-400 px-1">
              <span>WhatsApp: +{whatsAppNumber}</span>
              <button
                onClick={onOpenSettings}
                className="hover:text-stone-700 underline flex items-center gap-0.5"
              >
                <Settings2 className="w-2.5 h-2.5" />
                Alterar número
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#1B8049] hover:bg-[#15693C] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-900/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        {/* Unread badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 text-[10px] font-bold text-stone-900 items-center justify-center">
            1
          </span>
        </span>

        <MessageCircle className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Agendar no WhatsApp
        </span>
      </button>
    </div>
  );
};
