import React from "react";
import { CLINIC_CONFIG, CLINIC_IMAGES, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#sobre");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    trackWhatsAppConversion("hero_cta_agendar", "Avaliação Inicial Hero");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-white"
    >
      <img src="/images/icon.webp" alt="" aria-hidden="true" className="absolute -right-20 top-28 w-56 md:w-80 opacity-[0.07] rotate-12 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Tipográfica Editorial (Desktop: 6 cols, Mobile: full) */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0">
            {/* Tagline / Localização Discreta (Zero Pill, pura tipografia com separador refinado) */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-medium mb-6">
              <span>{CLINIC_CONFIG.cityState}</span>
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#AF9F91]/50"></span>
              <span>Odontologia & Estética</span>
            </div>

            {/* Headline Principal H1 Único com Contexto Semântico Claro */}
            <h1 className="font-brand-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-black font-normal leading-[1.08] tracking-tight text-balance">
              <span className="sr-only">Raquel Lima Clinic — Odontologia e Estética em Unaí MG. </span>
              Cuidado que transforma.
              <span className="block italic font-light text-black/90 mt-1">
                Experiência que permanece.
              </span>
            </h1>

            {/* Linha divisória minimalista */}
            <div className="w-16 h-[1px] bg-[#AF9F91] my-8 opacity-80" />

            {/* Subheadline Provisória Estruturada com SEO Local Natural */}
            <p className="font-brand-sans text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
              Odontologia, estética facial e cuidado individualizado através da experiência e do olhar da Dra. Raquel Lima em Unaí, Minas Gerais.
            </p>

            {/* Ações / CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-8">
              <a
                href={getWhatsAppUrl(CLINIC_CONFIG.consultationMessage)}
                onClick={handleCtaClick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-white bg-black hover:bg-[#AF9F91] transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black group"
              >
                <span>Agendar uma avaliação</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#sobre"
                onClick={handleScrollToAbout}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-black/80 hover:text-black border border-black/15 hover:border-black transition-colors"
              >
                <span>Conheça a Dra. Raquel</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Detalhe de confiança discreto */}
            <div className="mt-12 pt-6 border-t border-black/5 flex items-center gap-6 text-xs text-neutral-500 font-brand-sans">
              <div>
                <span className="text-black font-medium block">Atendimento Exclusivo</span>
                <span className="text-[11px] text-neutral-400">Consultas com planejamento prévio em Unaí</span>
              </div>
              <div className="w-px h-6 bg-neutral-200" />
              <div>
                <span className="text-black font-medium block">Preservação Natural</span>
                <span className="text-[11px] text-neutral-400">Harmonia anatômica sem exageros</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Fotografia Grande da Dra. Raquel (Desktop: 6 cols, 50-60%) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Moldura editorial com respiro e sombra suave de alta costura */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-[#FAF9F6] border border-black/5">
                <img
                  src={CLINIC_IMAGES.hero.src}
                  alt={CLINIC_IMAGES.hero.alt}
                  width={CLINIC_IMAGES.hero.width}
                  height={CLINIC_IMAGES.hero.height}
                  className="w-full h-full object-cover object-top filter brightness-[1.01] contrast-[1.02] transition-transform duration-700 ease-out hover:scale-[1.015]"
                  loading="eager"
                  // @ts-expect-error fetchpriority attribute is supported in modern browsers
                  fetchpriority="high"
                  decoding="async"
                />

                {/* Legenda editorial na base da imagem */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white flex items-end justify-between">
                  <div>
                    <p className="font-brand-display text-xl tracking-tight">Dra. Raquel Lima</p>
                    <p className="text-[11px] font-brand-sans tracking-widest uppercase text-white/80 mt-0.5">
                      Odontologia & Estética Avançada
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#AF9F91] bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                      Unaí · MG
                    </span>
                  </div>
                </div>
              </div>

              {/* Detalhe de elemento de grid discreto em taupe */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute -bottom-5 -right-5 w-24 h-24 border-r border-b border-[#AF9F91]/40 pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
