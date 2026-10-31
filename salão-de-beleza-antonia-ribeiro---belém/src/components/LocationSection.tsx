import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Clock, Phone, Car, Compass, ExternalLink } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface LocationSectionProps {
  whatsAppNumber: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ whatsAppNumber }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_DATA.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6239] mb-2">
            <MapPin className="w-4 h-4 text-[#A37D50]" />
            Localização Privilegiada no Marco
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Como chegar ao Studio Antonia Ribeiro
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 font-normal">
            Estamos em uma rua tranquila e arborizada do bairro do Marco, com fácil estacionamento e proximidade a vias rápidas de Belém.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Info & Access Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-stone-200/80 space-y-6">
              {/* Address card */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6239] block mb-1">
                  Endereço Oficial
                </span>
                <p className="font-serif-display text-xl sm:text-2xl font-bold text-stone-900">
                  Tv. Dr. Enéas Pinheiro, 2672
                </p>
                <p className="text-sm text-stone-600 mt-1">
                  Bairro do Marco, Belém - PA · CEP 66095-015
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  (Região entre Av. Almirante Barroso e Av. Duque de Caxias, próximo à UEPA)
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md bg-white border border-stone-300 hover:border-stone-400 text-stone-700 transition-colors shadow-2xs cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Endereço Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>

                  <a
                    href={SALON_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md bg-[#4285F4] hover:bg-[#3367D6] text-white transition-colors shadow-2xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Google Maps</span>
                  </a>

                  <a
                    href={SALON_DATA.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md bg-[#33CCFF] hover:bg-[#22b7e8] text-stone-900 transition-colors shadow-2xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Waze</span>
                  </a>
                </div>
              </div>

              {/* Horários */}
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Horário de Funcionamento
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Terça a Sábado:</span>
                    <span className="font-semibold text-stone-900">08:30 às 19:00</span>
                  </div>
                  <div className="flex items-center justify-between text-stone-500">
                    <span>Segunda & Domingo:</span>
                    <span className="italic">Eventos & Noivas (com hora marcada)</span>
                  </div>
                </div>
              </div>

              {/* Convenience points */}
              <div className="pt-4 border-t border-stone-200 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-stone-600">
                  <Car className="w-4 h-4 text-[#A37D50] shrink-0 mt-0.5" />
                  <span>
                    <strong>Fácil de estacionar:</strong> Rua tranquila com vagas em frente e nas imediações sem cobrança de rotativo.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-600">
                  <Compass className="w-4 h-4 text-[#A37D50] shrink-0 mt-0.5" />
                  <span>
                    <strong>Pontos de referência:</strong> Perto da UEPA Campus Enéas Pinheiro e fácil acesso pela Duque de Caxias.
                  </span>
                </div>
              </div>
            </div>

            {/* Need ride or instructions */}
            <div className="p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#D4AF37]">
                  Dúvida sobre como chegar?
                </p>
                <p className="text-[11px] text-stone-300">
                  Mande mensagem no WhatsApp e enviamos a localização em tempo real!
                </p>
              </div>
              <a
                href={`https://wa.me/${whatsAppNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
                  'Olá, Antonia! Gostaria de receber a localização do salão para chegar mais fácil.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#1B8049] hover:bg-[#15693C] text-white text-xs font-semibold px-3 py-2 rounded-md transition-colors"
              >
                Pedir no Zap
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-stone-200/90 shadow-md">
              <iframe
                title="Mapa de Localização - Salão de beleza em Belém - Antonia Ribeiro"
                src="https://maps.google.com/maps?q=-1.4347239,-48.4516071&hl=pt-BR&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Direct Open Link Banner overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-stone-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-lg shadow-lg flex items-center justify-between sm:justify-start gap-4">
                <div>
                  <p className="text-xs font-bold">Salão de beleza Antonia Ribeiro</p>
                  <p className="text-[10px] text-stone-300">Tv. Dr. Enéas Pinheiro, 2672 · Belém - PA</p>
                </div>
                <a
                  href={SALON_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4AF37] hover:bg-[#c29d2b] text-stone-950 font-bold text-xs px-3 py-1.5 rounded transition-colors"
                >
                  Abrir no App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
