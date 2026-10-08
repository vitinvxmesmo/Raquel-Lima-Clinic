import React, { useState } from "react";
import { FAQ_ITEMS, CLINIC_CONFIG, getWhatsAppUrl } from "../data/clinicData";
import { Plus, Minus, ArrowUpRight, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FAF9F6] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coluna Esquerda: Título e Informações de Apoio (Desktop: 5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold mb-3">
              <HelpCircle className="w-4 h-4 stroke-[1.75]" />
              <span>Dúvidas & Transparência</span>
            </div>

            <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-tight">
              Perguntas Frequentes sobre a clínica.
            </h2>

            <div className="w-12 h-[1px] bg-[#AF9F91] my-6" />

            <p className="font-brand-sans text-sm text-neutral-600 font-light leading-relaxed">
              Reunimos aqui os principais esclarecimentos sobre nosso modelo de atendimento, localização em Unaí — MG e agendamento de consultas com a Dra. Raquel Lima.
            </p>

            <div className="mt-8 pt-6 border-t border-black/10">
              <p className="text-xs text-neutral-500 font-light mb-4">
                Precisa de informações sobre um procedimento específico?
              </p>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre os atendimentos da Dra. Raquel Lima.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-black hover:text-[#AF9F91] transition-colors"
              >
                <span>Falar com nossa equipe</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Acordeão Editorial Minimalista (Desktop: 7 cols) */}
          <div className="lg:col-span-7 divide-y divide-black/10">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-6 first:pt-0">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="w-full text-left flex items-start justify-between gap-6 group py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#AF9F91]"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-brand-display text-lg text-[#AF9F91] font-light">
                        0{index + 1}
                      </span>
                      <h3 className="font-brand-display text-xl sm:text-2xl text-black group-hover:text-[#AF9F91] transition-colors duration-200">
                        {item.question}
                      </h3>
                    </div>
                    <span className="p-1.5 text-neutral-400 group-hover:text-black transition-colors shrink-0 mt-1">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[1.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[1.5]" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 pt-4 pb-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-8 sm:pl-12 font-brand-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
