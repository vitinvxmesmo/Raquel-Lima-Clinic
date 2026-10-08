import React from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";
import { MapPin, Phone, Clock, Instagram, ArrowUpRight, Compass } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <img src="/images/icon.webp" alt="" aria-hidden="true" className="absolute right-[-3rem] bottom-16 w-36 md:w-52 opacity-[0.06] rotate-[-18deg] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-3">
            Localização & Informações em Unaí - MG
          </span>
          <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-tight">
            Venha nos visitar em Unaí — Minas Gerais.
          </h2>
          <p className="font-brand-sans text-sm text-neutral-600 font-light mt-4 leading-relaxed">
            Estamos situados no coração de Unaí — MG, com estrutura privativa planejada para seu total conforto, segurança e bem-estar.
          </p>
        </div>

        {/* Grade de Contato & Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Informações Oficiais e Cartões de Contato (Desktop: 6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Bloco de Marca */}
            <div className="border-b border-black/10 pb-8">
              <h3 className="font-brand-display text-3xl text-black">
                {CLINIC_CONFIG.brandName}
              </h3>
              <p className="font-brand-sans text-xs uppercase tracking-[0.3em] text-[#AF9F91] font-medium mt-1">
                {CLINIC_CONFIG.brandSubtitle}
              </p>
              <p className="text-xs text-neutral-500 font-light mt-2">
                {CLINIC_CONFIG.croInfo}
              </p>
            </div>

            {/* Itens de Contato */}
            <div className="space-y-6">
              
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FAF9F6] border border-black/5 text-[#AF9F91] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 block mb-1">
                    Endereço
                  </span>
                  <p className="font-brand-sans text-sm font-medium text-black">
                    {CLINIC_CONFIG.address}
                  </p>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    {CLINIC_CONFIG.cityState}
                  </p>
                  <a
                    href={CLINIC_CONFIG.googleMapsQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-black font-medium mt-2 hover:text-[#AF9F91] transition-colors"
                  >
                    <span>Abrir no Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FAF9F6] border border-black/5 text-[#AF9F91] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 block mb-1">
                    WhatsApp & Agendamento
                  </span>
                  <p className="font-brand-sans text-sm font-medium text-black">
                    {CLINIC_CONFIG.contactPhone}
                  </p>
                  <a
                    href={getWhatsAppUrl(CLINIC_CONFIG.defaultMessage)}
                    onClick={() => trackWhatsAppConversion("contact_whatsapp_click", "Contato Direto WhatsApp")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-black font-medium mt-1 hover:text-[#AF9F91] transition-colors"
                  >
                    <span>Conversar no WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FAF9F6] border border-black/5 text-[#AF9F91] shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 block mb-1">
                    Instagram Oficial
                  </span>
                  <p className="font-brand-sans text-sm font-medium text-black">
                    {CLINIC_CONFIG.instagramHandle}
                  </p>
                  <a
                    href={CLINIC_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-black font-medium mt-1 hover:text-[#AF9F91] transition-colors"
                  >
                    <span>Acompanhar no Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FAF9F6] border border-black/5 text-[#AF9F91] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 block mb-1">
                    Horário de Atendimento
                  </span>
                  <p className="font-brand-sans text-sm font-medium text-black">
                    {CLINIC_CONFIG.openingHours}
                  </p>
                  <p className="text-xs text-neutral-500 font-light mt-0.5">
                    Atendimentos realizados exclusivamente com hora marcada.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Área de Mapa / Localização Elegante (Desktop: 6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF9F6] border border-black/10 p-8 sm:p-12 relative overflow-hidden">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#AF9F91] font-semibold mb-4">
                <Compass className="w-4 h-4 stroke-[1.75]" />
                <span>Geolocalização</span>
              </div>

              <h4 className="font-brand-display text-2xl sm:text-3xl text-black font-normal mb-4">
                Localizada em Unaí, MG
              </h4>

              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-8">
                Encontre a clínica com facilidade pelo mapa abaixo. Estamos na Rua Calixto Martins de Melo, no Centro de Unaí.
              </p>

              <div className="aspect-[16/10] bg-white border border-black/5 overflow-hidden">
                <iframe
                  src={CLINIC_CONFIG.googleMapsEmbedUrl}
                  title="Localização da Clínica Dra. Raquel Lima"
                  className="w-full h-full border-0 grayscale-[0.15] contrast-[0.95]"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <p className="text-[11px] text-neutral-400 mt-6 text-center">
                * Para pacientes de fora da cidade, oferecemos suporte na indicação de itinerário e horários otimizados de atendimento.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
