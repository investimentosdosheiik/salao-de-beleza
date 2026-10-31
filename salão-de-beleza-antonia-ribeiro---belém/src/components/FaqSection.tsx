import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface FaqSectionProps {
  whatsAppNumber: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ whatsAppNumber }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C6239] mb-2">
            <HelpCircle className="w-4 h-4 text-[#A37D50]" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-stone-600 font-normal">
            Tudo o que você precisa saber antes de vir ao nosso espaço no Marco, Belém.
          </p>
        </div>

        <div className="space-y-3.5">
          {SALON_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-display text-base sm:text-lg font-bold text-stone-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-stone-200 text-stone-900' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-stone-200/90 text-center space-y-3">
          <p className="text-sm font-semibold text-stone-800">
            Ainda tem alguma dúvida específica sobre seu cabelo?
          </p>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Nossa equipe responde prontamente no WhatsApp para esclarecer qualquer procedimento.
          </p>
          <a
            href={`https://wa.me/${whatsAppNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
              'Olá, Antonia! Tenho uma dúvida sobre os serviços do salão e gostaria de orientações.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1B8049] hover:bg-[#15693C] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-2xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Atendimento no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
