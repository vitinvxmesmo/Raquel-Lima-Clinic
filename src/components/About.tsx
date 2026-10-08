import React from "react";
import { CLINIC_CONFIG, CLINIC_IMAGES, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";
import { ArrowUpRight } from "lucide-react";

export const About: React.FC = () => {
  const handleAboutCta = () => {
    trackWhatsAppConversion("about_cta_conversa", "Consulta Dra Raquel Sobre");
  };

  return (
    <section id="sobre" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Bloco Superior: Citação Marcante em Tipografia Grande */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-4">
            Sobre a Dra. Raquel Lima
          </span>
          <blockquote className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-black font-light leading-snug tracking-tight">
            “Cada paciente carrega uma história.
            <span className="block italic text-black/85 mt-2">
              Cada tratamento começa ouvindo.”
            </span>
          </blockquote>
        </div>

        {/* Composição Editorial Assimétrica: Fotografia + Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Fotografia Profissional Grande (Desktop: 6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden bg-[#FAF9F6] border border-black/5">
                <img
                  src={CLINIC_IMAGES.about.src}
                  alt={CLINIC_IMAGES.about.alt}
                  width={CLINIC_IMAGES.about.width}
                  height={CLINIC_IMAGES.about.height}
                  className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.02] hover:scale-[1.01] transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Informação Técnica / Registro Provisório */}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 font-brand-sans">
                <span>Dra. Raquel Lima</span>
                <span className="text-[11px] text-neutral-400">
                  {CLINIC_CONFIG.croInfo}
                </span>
              </div>
            </div>
          </div>

          {/* Coluna de Storytelling (Desktop: 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-2 lg:pt-6">
            <div>
              <h2 className="font-brand-display text-3xl sm:text-4xl text-black font-normal mb-8">
                Uma trajetória dedicada ao cuidado e à harmonia facial em Unaí.
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
                <p className="text-lg font-normal text-black font-brand-display italic">
                  Experiência não se constrói da noite para o dia.
                </p>

                <p>
                  Ao longo de sua trajetória, a Dra. Raquel Lima construiu uma relação com seus pacientes baseada em conhecimento sólido, cuidado genuíno e profunda confiança mútua na cidade de Unaí, Minas Gerais.
                </p>

                <p>
                  Sua atuação reúne diferentes áreas da odontologia estética e da harmonização facial, sempre orientada por um princípio inegociável: compreender as aspirações e a singularidade de cada pessoa antes de indicar qualquer procedimento.
                </p>

                <p className="text-neutral-500 text-xs sm:text-sm pt-2">
                  * Conteúdo biográfico detalhado com especializações, titulações e cronologia acadêmica será atualizado com as informações oficiais definitivas.
                </p>
              </div>

              {/* Valores Fundamentais */}
              <div className="mt-10 pt-8 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] font-medium text-black mb-1.5">
                    Visão Anatômica
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Análise profunda das proporções ósseas, dentárias e tegumentares para resultados coesos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] font-medium text-black mb-1.5">
                    Ética & Transparência
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Alinhamento claro de expectativas, sem indicações desnecessárias ou promessas irreais.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Contextual para Iniciar Contato */}
            <div className="mt-12 pt-6">
              <a
                href={getWhatsAppUrl("Olá Dra. Raquel! Acompanhei sua trajetória pelo site e gostaria de agendar uma consulta em Unaí.")}
                onClick={handleAboutCta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs uppercase tracking-[0.18em] font-medium text-black border border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <span>Conversar com a Dra. Raquel</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
