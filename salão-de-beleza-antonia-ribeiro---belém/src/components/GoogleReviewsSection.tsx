import React from 'react';
import { Star, ShieldCheck, ExternalLink, MessageCircle, Quote } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface GoogleReviewsSectionProps {
  onOpenBooking: () => void;
  whatsAppNumber: string;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  onOpenBooking,
  whatsAppNumber,
}) => {
  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Brand styling */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {/* Google colored G badge or text */}
              <span className="font-bold text-stone-800 text-sm tracking-wide flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.98 0 12c0 2.02.45 3.84 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                Google Maps Avaliações
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-xs text-stone-500">Bairro do Marco, Belém</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              A satisfação de quem confia em nossas mãos
            </h2>
          </div>

          {/* Rating Summary Block */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-stone-200/90 shadow-sm shrink-0">
            <div className="text-center pr-3 border-r border-stone-200">
              <span className="font-serif-display text-3xl font-bold text-stone-900">
                {SALON_DATA.rating}
              </span>
              <div className="flex items-center text-amber-500 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-800">
                Excelente classificação
              </p>
              <p className="text-[11px] text-stone-500">
                Baseado em {SALON_DATA.reviewsCount} avaliações
              </p>
              <a
                href={SALON_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1 transition-colors"
              >
                <span>Ver ficha no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                <Quote className="w-6 h-6 text-[#A37D50]/20 mb-2" />

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-stone-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1">
                    {rev.name}
                    {rev.verified && (
                      <span title="Cliente Verificada">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      </span>
                    )}
                  </h4>
                  <p className="text-[10px] text-stone-500">
                    {rev.neighborhood} · <span className="text-stone-700 font-medium">{rev.service}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout bar */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-600 mb-4">
            Junte-se a centenas de clientes realizadas em Belém. Agende seu horário com antecedência!
          </p>
          <a
            href={SALON_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-950 bg-white border border-stone-300 hover:border-stone-400 px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
            <span>Ver fotos e localização exata no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
