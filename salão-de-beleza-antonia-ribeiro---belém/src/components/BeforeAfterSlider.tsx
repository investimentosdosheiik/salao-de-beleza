import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageCircle, ArrowLeftRight, CheckCircle, Eye } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface BeforeAfterSliderProps {
  onOpenBooking: (serviceName?: string) => void;
  whatsAppNumber: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  onOpenBooking,
  whatsAppNumber,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const galleryItems = [
    {
      title: 'Loiro dos Sonhos & Babylights',
      category: 'Mechas Claras',
      image: SALON_DATA.images.blondTransformation,
      description: 'Cabelo revitalizado com fundo preservado, mechas ultrafinas e tratamento Kérastase pós-química.',
      tag: 'Mais Pedido',
    },
    {
      title: 'Morena Iluminada Avelã & Caramelo',
      category: 'Iluminação Quente',
      image: SALON_DATA.images.brunetteLights,
      description: 'Tons de caramelo suave que iluminam o rosto com sofisticação e baixíssima necessidade de retoque.',
      tag: 'Alta Durabilidade',
    },
    {
      title: 'Terapia Capilar com Vapor de Ozônio',
      category: 'Saúde dos Fios',
      image: SALON_DATA.images.spa,
      description: 'Desintoxicação profunda do couro cabeludo e hidratação das pontas ressecadas.',
      tag: 'Bem-estar',
    },
    {
      title: 'Blindagem em Gel & Spa dos Pés',
      category: 'Unhas & Estética',
      image: SALON_DATA.images.nails,
      description: 'Esmaltação de alta durabilidade com cutilagem combinada sem agredir as unhas.',
      tag: 'Durabilidade 20+ dias',
    },
  ];

  const handleScheduleSpecific = (transformationName: string) => {
    const message = `Olá, Antonia! Estava vendo a galeria do salão e amei o resultado de *${transformationName}*. Gostaria de saber valores e disponibilidade para fazer no meu cabelo!`;
    const cleanPhone = whatsAppNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="transformacoes" className="py-16 sm:py-24 bg-[#F5EFE6]/60 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6239] mb-2">
            <Sparkles className="w-4 h-4 text-[#A37D50]" />
            Resultados Reais no Marco · Belém
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Transformações que elevam sua autoestima
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal">
            Arraste para comparar a mudança ou explore nossa galeria de trabalhos recentes. Cada cabelo é tratado como uma obra de arte única.
          </p>
        </div>

        {/* Interactive Before & After Slider Box */}
        <div className="max-w-4xl mx-auto mb-16 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-stone-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Comparador Interativo
              </span>
              <h3 className="font-serif-display text-lg sm:text-xl font-bold text-stone-900">
                Loiro dos Sonhos: Recuperação & Clareamento Saudável
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full">
              <ArrowLeftRight className="w-3.5 h-3.5 text-stone-700" />
              <span>Arraste o cursor no centro da foto</span>
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className="relative w-full h-[320px] sm:h-[460px] rounded-xl overflow-hidden select-none cursor-ew-resize shadow-inner"
          >
            {/* AFTER IMAGE (Full width background) */}
            <img
              src={SALON_DATA.images.blondTransformation}
              alt="Depois da transformação - Antonia Ribeiro"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase">
              Depois (Studio Antonia)
            </div>

            {/* BEFORE IMAGE (Clipped by slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={SALON_DATA.images.brunetteLights}
                alt="Antes da transformação"
                className="absolute inset-y-0 left-0 w-full max-w-none h-full object-cover object-center brightness-90 saturate-75 filter"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 bg-stone-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase">
                Antes (Tom Natural / Desbotado)
              </div>
            </div>

            {/* DIVIDER LINE & HANDLE */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-stone-800 shadow-xl border-2 border-[#A37D50] flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4 text-stone-800" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-stone-100">
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Cabelo preservado com teste de mecha + Reconstrução Intensiva</span>
            </div>
            <button
              onClick={() => handleScheduleSpecific('Loiro dos Sonhos com Teste de Mecha')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B8049] hover:bg-[#15693C] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md shadow-sm transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero agendar uma avaliação deste tom</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-800 px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide">
                  {item.category}
                </div>
                <div className="absolute top-3 right-3 bg-[#A37D50] text-white px-2 py-0.5 rounded text-[10px] font-medium tracking-wide">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-display text-base font-bold text-stone-900 group-hover:text-[#A37D50] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100">
                  <button
                    onClick={() => handleScheduleSpecific(item.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#1B8049] hover:text-[#15693C] bg-emerald-50 hover:bg-emerald-100/70 py-2 px-3 rounded transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Quero agendar este resultado</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
