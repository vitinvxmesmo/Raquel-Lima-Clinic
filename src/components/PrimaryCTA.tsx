import React from "react";
import { CLINIC_CONFIG, CLINIC_IMAGES, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";
import { ArrowUpRight } from "lucide-react";

export const PrimaryCTA: React.FC = () => {
  const handlePrimaryCta = () => {
    trackWhatsAppConversion("primary_cta_whatsapp", "Agendamento Final Seção CTA");
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] border-y border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bloco de Mensagem Principal (Desktop: 7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-4">
              Agendamento & Avaliação em Unaí - MG
            </span>

            <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-[1.15] tracking-tight">
              Seu cuidado começa com uma conversa.
            </h2>

            <div className="w-12 h-[1px] bg-[#AF9F91] my-6" />

            <p className="font-brand-sans text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
              Entre em contato com nossa equipe e agende sua avaliação individualizada com a Dra. Raquel Lima. Estamos prontos para receber você em Unaí com atenção plena, conforto e discrição.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(CLINIC_CONFIG.consultationMessage)}
                onClick={handlePrimaryCta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium text-white bg-black hover:bg-[#AF9F91] transition-all duration-300 shadow-sm group"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-4 text-xs uppercase tracking-[0.18em] font-medium text-black border border-black/15 hover:border-black transition-colors"
              >
                <span>Ver Localização e Horários</span>
              </a>
            </div>

            <div className="mt-8 text-xs text-neutral-500 font-brand-sans">
              <span className="font-medium text-black">Atendimento humanizado:</span> conversamos diretamente pelo WhatsApp oficial para encontrar o melhor horário para você na Raquel Lima Clinic.
            </div>
          </div>

          {/* Enquadramento Fotográfico da Dra. Raquel (Desktop: 5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] bg-white border border-black/5 overflow-hidden">
              <img
                src="/images/foto 4.webp"
                alt={CLINIC_IMAGES.hero.alt}
                width={CLINIC_IMAGES.hero.width}
                height={CLINIC_IMAGES.hero.height}
                className="w-full h-full object-cover object-top filter brightness-[0.99] contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex items-end">
                <div className="text-white">
                  <p className="font-brand-display text-lg">Dra. Raquel Lima</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#AF9F91]">
                    {CLINIC_CONFIG.cityState}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
