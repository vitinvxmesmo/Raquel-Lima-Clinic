import React, { useState } from "react";
import { SPECIALTIES, SpecialtyItem, CLINIC_IMAGES, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";
import { SpecialtyModal } from "./SpecialtyModal";
import { ArrowUpRight, Plus } from "lucide-react";

export const Specialties: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);

  const handleOpenDetail = (specialty: SpecialtyItem) => {
    setSelectedSpecialty(specialty);
  };

  const handleProcedureCta = (title: string) => {
    trackWhatsAppConversion("specialty_cta_whatsapp", title);
  };

  return (
    <section id="especialidades" className="py-24 md:py-32 bg-[#FAF9F6] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho da Seção com SEO Local Natural */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-black/10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-3">
              Áreas de Atuação em Unaí - MG
            </span>
            <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-tight">
              Especialidades odontológicas e estéticas conduzidas com rigor.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 font-brand-sans font-light max-w-md leading-relaxed">
            Cada indicação é embasada em evidências clínicas e na busca constante por harmonia anatômica, naturalidade e segurança biológica na Raquel Lima Clinic em Unaí.
          </p>
        </div>

        {/* Layout Editorial: Lista Numerada à Esquerda + Composição Fotográfica de Detalhe à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          
          {/* Lista de Procedimentos Editorial (Desktop: 7 cols) */}
          <div className="lg:col-span-7 divide-y divide-black/10">
            {SPECIALTIES.map((item) => (
              <div
                key={item.id}
                className="group py-8 first:pt-0 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
                    <span className="font-brand-display text-2xl sm:text-3xl text-[#AF9F91] font-light">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-brand-display text-2xl sm:text-3xl text-black group-hover:text-[#AF9F91] transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 font-light mt-2.5 max-w-xl leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Ações: Ver detalhes ou WhatsApp */}
                  <div className="flex items-center gap-2 pt-1 shrink-0">
                    <button
                      onClick={() => handleOpenDetail(item)}
                      type="button"
                      className="p-2.5 text-black hover:text-[#AF9F91] border border-black/10 hover:border-black/30 transition-colors duration-200"
                      title="Ver detalhes"
                      aria-label={`Ver detalhes de ${item.title}`}
                    >
                      <Plus className="w-4 h-4 stroke-[1.5]" />
                    </button>
                    <a
                      href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${item.title} na Raquel Lima Clinic em Unaí.`)}
                      onClick={() => handleProcedureCta(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-black text-white hover:bg-[#AF9F91] transition-colors duration-200"
                      title="Consultar via WhatsApp"
                      aria-label={`Consultar ${item.title} pelo WhatsApp`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder transparente para procedimentos futuros */}
            <div className="py-6 text-xs text-neutral-400 italic">
              * A grade definitiva com procedimentos detalhados será fornecida pela Dra. Raquel Lima.
            </div>
          </div>

          {/* Composição Fotográfica de Detalhe e Consulta (Desktop: 5 cols) */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative aspect-[4/5] bg-white border border-black/5 overflow-hidden">
              <img
                src={CLINIC_IMAGES.consultationDetail.src}
                alt={CLINIC_IMAGES.consultationDetail.alt}
                width={CLINIC_IMAGES.consultationDetail.width}
                height={CLINIC_IMAGES.consultationDetail.height}
                className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#AF9F91] font-semibold">
                  Planejamento Clínico
                </span>
                <p className="font-brand-display text-2xl font-light mt-1">
                  Avaliação individualizada e detalhamento anatômico.
                </p>
                <p className="text-xs text-neutral-300 font-light mt-2 font-brand-sans">
                  Nenhum procedimento é realizado sem análise prévia de proporções e harmonia do sorriso em Unaí.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Modal de Detalhes do Procedimento */}
      <SpecialtyModal
        specialty={selectedSpecialty}
        onClose={() => setSelectedSpecialty(null)}
      />
    </section>
  );
};
