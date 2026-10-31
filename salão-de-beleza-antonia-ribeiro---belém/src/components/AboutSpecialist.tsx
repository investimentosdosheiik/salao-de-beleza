import React from 'react';
import { Award, Heart, CheckCircle2, MessageCircle, Coffee, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface AboutSpecialistProps {
  onOpenBooking: () => void;
  whatsAppNumber: string;
}

export const AboutSpecialist: React.FC<AboutSpecialistProps> = ({
  onOpenBooking,
  whatsAppNumber,
}) => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative frame */}
              <div className="absolute -inset-4 bg-[#E8D7C3]/50 rounded-3xl -rotate-2 -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] bg-stone-100">
                <img
                  src={SALON_DATA.images.specialist}
                  alt="Antonia Ribeiro - Especialista em Beleza em Belém"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-stone-900 text-white p-4 rounded-xl shadow-xl border border-stone-800 max-w-[210px]">
                <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Referência</span>
                </div>
                <p className="font-serif-display text-xl font-bold">14+ Anos</p>
                <p className="text-[11px] text-stone-300">
                  Transformando vidas e elevando a autoestima em Belém - PA
                </p>
              </div>
            </div>
          </div>

          {/* Bio and Salon Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6239]">
              <Sparkles className="w-4 h-4 text-[#A37D50]" />
              Conheça Antonia Ribeiro
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              “Beleza não é apenas estética; é acolhimento, saúde e confiança.”
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                Com mais de uma década de trajetória dedicada ao universo da beleza em Belém,{' '}
                <strong className="text-stone-900 font-semibold">Antonia Ribeiro</strong> construiu seu espaço
                no tradicional bairro do Marco alicerçada em um princípio inegociável:{' '}
                <em>respeitar a saúde de cada fio de cabelo</em>.
              </p>
              <p>
                Aqui, cada atendimento começa com uma escuta atenta e uma criteriosa avaliação capilar. Não
                acreditamos em receitas prontas: seja para desenhar o tom exato do seu Loiro dos Sonhos, criar a
                suavidade de uma Morena Iluminada ou revitalizar cabelos danificados com terapia intensiva, nosso
                foco é harmonizar o visual com seu estilo de vida e personalidade.
              </p>
            </div>

            {/* Principles cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Segurança Capilar Absoluta</span>
                </div>
                <p className="text-xs text-stone-600">
                  Teste de mecha rigoroso antes de qualquer descoloração para blindar a saúde do seu cabelo.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-stone-200/80">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1">
                  <Heart className="w-4 h-4 text-[#A37D50]" />
                  <span>Atendimento Humanizado</span>
                </div>
                <p className="text-xs text-stone-600">
                  Pontualidade nos agendamentos, sem esperas exaustivas e com total atenção individual.
                </p>
              </div>
            </div>

            {/* Salon comfort list */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Conforto pensado para sua pausa especial:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-stone-700">
                {SALON_DATA.amenities.map((am, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B8049] shrink-0" />
                    <span>{am.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  const message = `Olá, Antonia! Gostaria de conversar com você sobre um procedimento e agendar um horário no seu salão.`;
                  const cleanPhone = whatsAppNumber.replace(/\D/g, '');
                  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-[#1B8049] hover:bg-[#15693C] text-white font-semibold text-sm py-3.5 px-6 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com Antonia no WhatsApp</span>
              </button>
              <a
                href={SALON_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 py-3.5 px-4 rounded-lg border border-stone-300 hover:border-stone-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#A37D50]" />
                <span>Ver Localização no Marco, Belém</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
