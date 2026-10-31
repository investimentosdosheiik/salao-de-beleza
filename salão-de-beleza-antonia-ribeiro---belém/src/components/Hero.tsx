import React, { useState } from 'react';
import { Star, MessageCircle, Sparkles, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Calendar, User, Phone, Camera, Check } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
  whatsAppNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, whatsAppNumber }) => {
  const [selectedService, setSelectedService] = useState(SALON_DATA.services[0].title);
  const [selectedDay, setSelectedDay] = useState('Esta Semana');
  const [selectedShift, setSelectedShift] = useState('Manhã (09h - 13h)');
  const [clientName, setClientName] = useState('');

  // Interactive banner photo switcher
  const [activeBannerIdx, setActiveBannerIdx] = useState(0);

  const bannerSlides = [
    {
      id: 'fachada',
      title: 'Fachada & Entrada Oficial',
      label: 'Fachada Principal',
      image: SALON_DATA.images.facade,
      caption: 'Salão Antônia Ribeiro · Estética, Saúde, Beleza · Tv. Dr. Enéas Pinheiro, 2672 (Marco, Belém)',
    },
    {
      id: 'interno',
      title: 'Salão Interno Climatizado',
      label: 'Espaço Interno',
      image: SALON_DATA.images.hero,
      caption: 'Estações individuais de atendimento, poltronas confortáveis e iluminação arquitetônica suave',
    },
    {
      id: 'transformacao',
      title: 'Transformações de Loiros & Mechas',
      label: 'Antes & Depois',
      image: SALON_DATA.images.blondTransformation,
      caption: 'Técnica de iluminação com preservação total da saúde e brilho dos fios',
    },
    {
      id: 'lavatorio',
      title: 'Área de Spa & Lavatório',
      label: 'Lavatório & Terapia',
      image: SALON_DATA.images.spa,
      caption: 'Lavatório relaxante com massagem craniana, vapor de ozônio e produtos Kérastase',
    },
  ];

  const daysOptions = [
    'Esta Semana (Mais rápido)',
    'Hoje / Encaixe urgente',
    'Amanhã',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Próxima semana'
  ];

  const shiftOptions = [
    'Manhã (09h - 13h)',
    'Tarde (13h - 18h)',
    'Qualquer horário disponível'
  ];

  const handleQuickWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameGreeting = clientName.trim() ? `Meu nome é *${clientName.trim()}*. ` : '';
    const message = `Olá, Antônia! Vi o site do salão e gostaria de agendar um horário.\n\n${nameGreeting}✨ *Serviço desejado:* ${selectedService}\n📅 *Previsão:* ${selectedDay}\n⏰ *Turno:* ${selectedShift}\n\nVocês têm horário vago para atendimento no salão da Tv. Enéas Pinheiro, 2672?`;
    
    const encoded = encodeURIComponent(message);
    const cleanPhone = whatsAppNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, '_blank');
  };

  return (
    <section className="relative pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8D7C3]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Local Micro-bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600 mb-4 pb-2 border-b border-stone-200/60">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-stone-800">
              <MapPin className="w-3.5 h-3.5 text-[#A37D50]" />
              Tv. Dr. Enéas Pinheiro, 2672 – Bairro do Marco · Belém - PA
            </span>
            <span aria-hidden="true" className="text-stone-300 hidden sm:inline">·</span>
            <a
              href={SALON_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-stone-900 group transition-colors"
            >
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-stone-800 underline decoration-stone-300 underline-offset-2">
                4.9 ({SALON_DATA.reviewsCount} avaliações no Google)
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-stone-500">
            <span className="inline-flex items-center gap-1 text-stone-700 font-medium">
              <Phone className="w-3 h-3 text-[#1B8049]" />
              Fixo: {SALON_DATA.phoneLandline}
            </span>
            <span className="hidden md:inline text-stone-300">·</span>
            <span className="inline-flex items-center gap-1 text-stone-700 font-medium">
              <MessageCircle className="w-3 h-3 text-[#1B8049]" />
              WhatsApp: {SALON_DATA.phoneWhatsAppDisplay}
            </span>
          </div>
        </div>

        {/* 🌟 PROMINENT ESTABLISHMENT PHOTO BANNER SHOWCASE */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-stone-200/90 shadow-xl bg-white relative group">
          <div className="relative h-[250px] sm:h-[360px] md:h-[440px] w-full bg-stone-900 overflow-hidden">
            <img
              src={bannerSlides[activeBannerIdx].image}
              alt={bannerSlides[activeBannerIdx].title}
              className="w-full h-full object-cover object-center transition-all duration-700 brightness-[0.96]"
            />

            {/* Gradient shadow overlay for text readability at bottom only */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent pointer-events-none" />


            {/* Bottom Info on the Banner */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 right-3 sm:right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] mb-0.5">
                  Fotos do Estabelecimento ({activeBannerIdx + 1}/{bannerSlides.length})
                </p>
                <h3 className="font-serif-display text-lg sm:text-2xl font-bold leading-tight">
                  {bannerSlides[activeBannerIdx].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 mt-1 line-clamp-1 sm:line-clamp-none">
                  {bannerSlides[activeBannerIdx].caption}
                </p>
              </div>

              {/* Direct Quick WhatsApp Call to Action on the Banner */}
              <button
                onClick={() => onOpenBooking()}
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#1B8049] hover:bg-[#15693C] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Horário Neste Salão</span>
              </button>
            </div>
          </div>

          {/* Interactive Photo Switcher Tabs underneath Banner */}
          <div className="p-2 sm:p-2.5 bg-stone-100/90 border-t border-stone-200 flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto scrollbar-none">
            {bannerSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveBannerIdx(idx)}
                className={`whitespace-nowrap px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeBannerIdx === idx
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white/80 hover:bg-white text-stone-700 hover:text-stone-950 border border-stone-200'
                }`}
              >
                <Camera className="w-3.5 h-3.5 text-[#A37D50]" />
                <span>{slide.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Headline + Benefits & WhatsApp Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Headline and Trust */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6239]">
              <Sparkles className="w-4 h-4 text-[#A37D50]" />
              Estética · Saúde · Beleza · Atendimento com Hora Marcada
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.12] text-stone-900 font-bold tracking-tight">
              Realce a sua melhor versão no{' '}
              <span className="italic font-normal text-[#966E40] border-b-2 border-[#D4AF37]/50 pb-0.5">
                Salão Antônia Ribeiro
              </span>{' '}
              em Belém.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Localizado na <strong className="font-semibold text-stone-800">Tv. Dr. Enéas Pinheiro, 2672 (Marco)</strong>,
              oferecemos atendimento personalizado com hora marcada, teste de mecha prévio, tratamentos de luxo (Kérastase, Wella, Truss)
              e uma experiência relaxante para seus cabelos e bem-estar.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1B8049] shrink-0" />
                <span>Teste de mecha rigoroso antes de descolorir</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1B8049] shrink-0" />
                <span>Espaço climatizado e café cortesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1B8049] shrink-0" />
                <span>Marcas: Kérastase, L'Oréal, Truss & Wella</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1B8049] shrink-0" />
                <span>Fácil estacionamento na porta do salão</span>
              </div>
            </div>

            {/* Social Proof Metric bar */}
            <div className="pt-4 border-t border-stone-200/80 flex items-center gap-6 sm:gap-10 text-stone-800">
              <div>
                <p className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-900">
                  {SALON_DATA.clientsServed}
                </p>
                <p className="text-xs text-stone-500">Clientes atendidas</p>
              </div>
              <div className="w-px h-8 bg-stone-300" />
              <div>
                <p className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-900">
                  {SALON_DATA.yearsExperience} anos
                </p>
                <p className="text-xs text-stone-500">De tradição em Belém</p>
              </div>
              <div className="w-px h-8 bg-stone-300" />
              <div>
                <p className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-900 flex items-center gap-1">
                  4.9 <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                </p>
                <p className="text-xs text-stone-500">Google Maps</p>
              </div>
            </div>
          </div>

          {/* Right Column: High Conversion WhatsApp Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-xl border border-stone-200/90 p-6 sm:p-7 relative transition-all">
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-3 mb-5 pb-4 border-b border-stone-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Resposta rápida no WhatsApp
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    Agendamento Expresso
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Envie seu pedido diretamente para o WhatsApp de Antônia Ribeiro
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1B8049]/10 text-[#1B8049] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleQuickWhatsAppSubmit} className="space-y-4">
                {/* Field 1: Service */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    1. Procedimento desejado
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full text-sm rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-stone-800 focus:bg-white focus:border-[#A37D50] focus:ring-1 focus:ring-[#A37D50] transition-colors"
                  >
                    {SALON_DATA.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} — a partir de {s.priceFrom}
                      </option>
                    ))}
                    <option value="Dúvida geral / Diagnóstico presencial">
                      Outro / Quero conversar primeiro para avaliar
                    </option>
                  </select>
                </div>

                {/* Field 2: Day */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    2. Data preferida
                  </label>
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="w-full text-sm rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2.5 text-stone-800 focus:bg-white focus:border-[#A37D50] focus:ring-1 focus:ring-[#A37D50] transition-colors"
                  >
                    {daysOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 3: Turno / Horário */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    3. Turno de preferência
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {shiftOptions.slice(0, 2).map((shift) => (
                      <button
                        type="button"
                        key={shift}
                        onClick={() => setSelectedShift(shift)}
                        className={`text-xs py-2 px-3 rounded-md text-center transition-all cursor-pointer font-medium border ${
                          selectedShift === shift
                            ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {shift.split(' ')[0]} {shift.includes('Manhã') ? '☀️' : '🌤️'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 4: Name (optional) */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-stone-400" />
                    Seu Nome (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Amanda Santos"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full text-sm rounded-lg border border-stone-300 bg-stone-50/50 px-3.5 py-2 text-stone-800 focus:bg-white focus:border-[#A37D50] focus:ring-1 focus:ring-[#A37D50] transition-colors placeholder:text-stone-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1B8049] hover:bg-[#15693C] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-[0.99]"
                  >
                    <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span>Confirmar Horário no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[11px] text-center text-stone-500 mt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                    WhatsApp Oficial: {SALON_DATA.phoneWhatsAppDisplay}
                  </p>
                </div>
              </form>

              {/* Special First-time Banner badge */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <span className="text-[#966E40] font-semibold flex items-center gap-1">
                  🎁 1ª visita?
                </span>
                <span className="text-stone-500 text-[11px]">
                  Diagnóstico Capilar + Tratamento de Brilho cortesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
