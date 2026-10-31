import React, { useState, useEffect } from 'react';
import { Gift, Clock, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface FirstVisitVoucherProps {
  onOpenBooking: () => void;
  whatsAppNumber: string;
}

export const FirstVisitVoucher: React.FC<FirstVisitVoucherProps> = ({
  onOpenBooking,
  whatsAppNumber,
}) => {
  // Simple countdown to midnight of current day or end of week
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClaimVoucher = () => {
    const message = `Olá, Antonia! Vi o voucher de boas-vindas no site do salão e gostaria de resgatar o meu *Diagnóstico Capilar + Tratamento de Brilho de Cortesia* para agendar esta semana!`;
    const cleanPhone = whatsAppNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-14 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A37D50]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1B8049]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                <Gift className="w-3.5 h-3.5" />
                Voucher de Boas-Vindas Exclusivo
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Primeira vez com Antonia Ribeiro no Bairro do Marco?
              </h3>

              <p className="text-sm sm:text-base text-stone-300 max-w-xl font-normal leading-relaxed">
                Ao agendar qualquer procedimento pelo WhatsApp através desta página, você ganha de presente um{' '}
                <strong className="text-white font-semibold">Diagnóstico Capilar Completo</strong> + uma{' '}
                <strong className="text-[#D4AF37] font-semibold">Hidratação de Brilho Espelhado Kérastase</strong> cortesia.
              </p>

              {/* Perks list */}
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-stone-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Válido para novos clientes
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  Economia de R$ 120 no seu primeiro atendimento
                </span>
              </div>
            </div>

            {/* Right: Countdown & Button */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-4 backdrop-blur-sm">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2 flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Vagas restantes desta semana
                </span>

                {/* Digital countdown box */}
                <div className="flex items-center justify-center gap-2 font-mono text-xl sm:text-2xl font-bold text-white">
                  <div className="bg-stone-800/80 px-2.5 py-1.5 rounded border border-stone-700">
                    {String(timeLeft.hours).padStart(2, '0')}
                    <span className="text-[9px] block font-sans text-stone-400 -mt-0.5">horas</span>
                  </div>
                  <span>:</span>
                  <div className="bg-stone-800/80 px-2.5 py-1.5 rounded border border-stone-700">
                    {String(timeLeft.minutes).padStart(2, '0')}
                    <span className="text-[9px] block font-sans text-stone-400 -mt-0.5">min</span>
                  </div>
                  <span>:</span>
                  <div className="bg-stone-800/80 px-2.5 py-1.5 rounded border border-stone-700 text-amber-400">
                    {String(timeLeft.seconds).padStart(2, '0')}
                    <span className="text-[9px] block font-sans text-stone-400 -mt-0.5">seg</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClaimVoucher}
                className="w-full bg-[#1B8049] hover:bg-[#15693C] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Garantir Meu Presente no WhatsApp</span>
              </button>

              <p className="text-[10px] text-stone-400">
                Apenas 3 cortesias restantes para agendamentos desta semana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
