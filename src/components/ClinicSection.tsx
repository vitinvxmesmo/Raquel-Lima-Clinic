import React from "react";
import { CLINIC_CONFIG, CLINIC_IMAGES, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";
import { ArrowUpRight } from "lucide-react";

export const ClinicSection: React.FC = () => {
  const handleClinicVisit = () => {
    trackWhatsAppConversion("clinic_cta_visita", "Conhecer Clínica Pessoalmente");
  };

  return (
    <section id="clinica" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho da Seção com SEO Local */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-3">
            Família, valores e cuidado em Unaí - MG
          </span>
          <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-tight">
            Cuidar de pessoas é um valor que vem de casa.
          </h2>
          <p className="font-brand-sans text-sm sm:text-base text-neutral-600 font-light mt-4 leading-relaxed">
            A Raquel Lima Clinic nasceu de uma história de família, afeto e propósito. Em Unaí — MG, cada atendimento carrega valores que fazem parte da nossa essência: respeito, acolhimento, honestidade e o compromisso de cuidar de cada pessoa com a mesma atenção que dedicamos à nossa própria família.
          </p>
        </div>

        {/* Fotografia Arquitetônica Principal da Clínica (Full Bleed com Enquadramento Imersivo) */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#FAF9F6] border border-black/5 mb-16">
          <img
            src={CLINIC_IMAGES.clinicSpace.src}
            alt={CLINIC_IMAGES.clinicSpace.alt}
            width={CLINIC_IMAGES.clinicSpace.width}
            height={CLINIC_IMAGES.clinicSpace.height}
            className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.02] hover:scale-[1.01] transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
          />

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-black/75 backdrop-blur-md px-6 py-4 text-white max-w-sm hidden sm:block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block">
              Nossa história
            </span>
            <p className="font-brand-display text-lg text-white font-normal mt-1">
              Família, afeto e propósito.
            </p>
            <p className="text-[11px] text-neutral-300 font-light font-brand-sans mt-0.5">
              Valores que inspiram um cuidado próximo, humano e verdadeiro.
            </p>
          </div>
        </div>

        {/* Pilares Estruturais da Clínica (Grid Editorial Minimalista) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-black/10">
          
          <div>
            <span className="text-xs font-brand-sans uppercase tracking-[0.2em] text-[#AF9F91] font-medium block mb-2">
              01 · Conforto
            </span>
            <h3 className="font-brand-display text-xl text-black mb-2">
              Privacidade Absoluta
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Salas de consulta e procedimentos isoladas para garantir sua confidencialidade e tranquilidade do início ao fim.
            </p>
          </div>

          <div>
            <span className="text-xs font-brand-sans uppercase tracking-[0.2em] text-[#AF9F91] font-medium block mb-2">
              02 · Atendimento
            </span>
            <h3 className="font-brand-display text-xl text-black mb-2">
              Acolhimento Humano
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Equipe orientada a prestar um atendimento atencioso, pontual e dedicado a fazer você se sentir em casa.
            </p>
          </div>

          <div>
            <span className="text-xs font-brand-sans uppercase tracking-[0.2em] text-[#AF9F91] font-medium block mb-2">
              03 · Estrutura
            </span>
            <h3 className="font-brand-display text-xl text-black mb-2">
              Tecnologia de Ponta
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Equipamentos modernos e protocolos de biossegurança rigorosos para diagnósticos precisos e tratamentos seguros.
            </p>
          </div>

          <div>
            <span className="text-xs font-brand-sans uppercase tracking-[0.2em] text-[#AF9F91] font-medium block mb-2">
              04 · Localização
            </span>
            <h3 className="font-brand-display text-xl text-black mb-2">
              Unaí — MG
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Fácil acesso e conveniência para pacientes de Unaí e de toda a região noroeste de Minas Gerais.
            </p>
          </div>

        </div>

        {/* CTA de Visita */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de agendar uma visita e conhecer o espaço da Raquel Lima Clinic em Unaí.")}
            onClick={handleClinicVisit}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-black border border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            <span>Conhecer a Clínica Pessoalmente</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
