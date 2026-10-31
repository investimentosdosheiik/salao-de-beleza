import React, { useState } from 'react';
import { Clock, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { SALON_DATA, ServiceItem } from '../data/salonData';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  whatsAppNumber: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  whatsAppNumber,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mechas' | 'tratamento' | 'corte' | 'estetica'>('all');

  const filteredServices = activeFilter === 'all'
    ? SALON_DATA.services
    : SALON_DATA.services.filter((s) => s.category === activeFilter);

  const handleBookService = (service: ServiceItem) => {
    const message = `Olá, Antonia! Gostaria de agendar o serviço de *${service.title}* (${service.priceFrom}). Quais os dias e horários disponíveis nesta semana no salão da Tv. Enéas Pinheiro?`;
    const cleanPhone = whatsAppNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'mechas', label: 'Mechas & Cores' },
    { id: 'tratamento', label: 'Tratamentos & SPA' },
    { id: 'corte', label: 'Cortes & Visagismo' },
    { id: 'estetica', label: 'Unhas & Estética' },
  ] as const;

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6239] mb-2">
            <Sparkles className="w-4 h-4 text-[#A37D50]" />
            Menu de Cuidados & Procedimentos
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Serviços pensados para realçar sua essência
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal">
            Trabalhamos exclusivamente com marcas consagradas mundialmente, garantindo o resultado desejado sem comprometer a saúde e vitalidade dos seus cabelos.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls (functional buttons with click handlers) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-stone-200/70 rounded-xl max-w-2xl mx-auto mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Category */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-medium tracking-wide">
                    {service.categoryLabel}
                  </div>
                  {service.popular && (
                    <div className="absolute top-3 right-3 bg-[#A37D50] text-white px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide">
                      ★ Destaque
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold text-[#8C6239] uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-stone-500">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl font-bold text-stone-900 group-hover:text-[#A37D50] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Included benefits checklist */}
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                      O que está incluso:
                    </span>
                    {service.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Price & WhatsApp CTA */}
              <div className="p-6 pt-0 mt-2">
                <div className="flex items-center justify-between py-3 border-t border-stone-100 mb-3">
                  <div>
                    <span className="text-[11px] text-stone-500 uppercase tracking-wider block">
                      A partir de
                    </span>
                    <span className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900">
                      {service.priceFrom}
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-500 text-right">
                    Consulte valor exato<br />no diagnóstico capilar
                  </span>
                </div>

                <button
                  onClick={() => handleBookService(service)}
                  className="w-full bg-[#1B8049] hover:bg-[#15693C] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                  <span>Agendar este serviço</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized quote helper */}
        <div className="mt-12 p-6 sm:p-8 bg-stone-100 rounded-2xl border border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-display text-lg sm:text-xl font-bold text-stone-900">
              Não tem certeza de qual procedimento é o ideal para você?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl">
              Envie uma foto do seu cabelo atual e da sua inspiração pelo WhatsApp. Antonia e sua equipe realizam uma avaliação visual prévia e orientam o melhor caminho sem custo algum.
            </p>
          </div>
          <button
            onClick={() => {
              const message = `Olá, Antonia! Gostaria de uma avaliação gratuita do meu cabelo. Posso enviar uma foto para vocês analisarem o que é mais indicado?`;
              const cleanPhone = whatsAppNumber.replace(/\D/g, '');
              window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="shrink-0 bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Enviar Foto para Avaliação</span>
          </button>
        </div>
      </div>
    </section>
  );
};
