import React, { useState } from "react";
import { SPECIALTIES, SpecialtyItem, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";
import { ArrowUpRight, Minus, Plus } from "lucide-react";

const VISIBLE_IDS = ["harmonizacao-full-face", "toxina-botulinica", "bioestimuladores"];
const SPECIALTY_IMAGES: Record<string, { src: string; alt: string; complement: string }> = {
  "harmonizacao-full-face": { src: "/images/full-face.jpeg", alt: "Registro de procedimento de harmonização facial Full Face", complement: "Planejamento integrado das proporções faciais, sempre conduzido a partir de avaliação individual." },
  "toxina-botulinica": { src: "/images/botox.jpeg", alt: "Registro de aplicação de toxina botulínica", complement: "Indicação estética ou funcional definida após análise cuidadosa das necessidades de cada paciente." },
  bioestimuladores: { src: "/images/bioestimulador-colageno.jpeg", alt: "Registro de procedimento com bioestimuladores de colágeno", complement: "Cuidado voltado às características da pele e ao acompanhamento profissional individualizado." },
};

export const Specialties: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const specialties = SPECIALTIES.filter((item) => VISIBLE_IDS.includes(item.id)).map((item, index) => ({ ...item, number: String(index + 1).padStart(2, "0") }));
  const toggle = (id: string) => setOpenId((current) => current === id ? null : id);
  const handleCta = (title: string) => trackWhatsAppConversion("specialty_cta_whatsapp", title);

  return <section id="especialidades" className="py-24 md:py-32 bg-[#FAF9F6] border-t border-black/5 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-black/10">
        <div className="max-w-2xl"><span className="text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-3">Áreas de Atuação em Unaí - MG</span><h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-tight">Especialidades odontológicas e estéticas conduzidas com rigor.</h2></div>
        <p className="text-xs sm:text-sm text-neutral-600 font-brand-sans font-light max-w-md leading-relaxed">Cada indicação é embasada em evidências clínicas e na busca constante por harmonia anatômica, naturalidade e segurança biológica na Raquel Lima Clinic em Unaí.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
      <div className="lg:col-span-7 divide-y divide-black/10">
        {specialties.map((item) => { const isOpen = openId === item.id; const image = SPECIALTY_IMAGES[item.id]; return <article key={item.id} className="py-8 first:pt-0">
          <div className="flex items-start justify-between gap-5"><div className="flex items-baseline gap-4 sm:gap-6 flex-1 min-w-0"><span className="font-brand-display text-2xl sm:text-3xl text-[#AF9F91] font-light">{item.number}</span><div><h3 className="font-brand-display text-2xl sm:text-3xl text-black">{item.title}</h3><p className="text-xs sm:text-sm text-neutral-600 font-light mt-2.5 max-w-xl leading-relaxed">{item.shortDescription}</p></div></div><div className="flex items-center gap-2 pt-1 shrink-0"><button type="button" onClick={() => toggle(item.id)} aria-expanded={isOpen} aria-controls={`specialty-details-${item.id}`} className="p-2.5 text-black hover:text-[#AF9F91] border border-black/10 hover:border-black/30 transition-colors" aria-label={`${isOpen ? "Recolher" : "Expandir"} detalhes de ${item.title}`}>{isOpen ? <Minus className="w-4 h-4 stroke-[1.5]" /> : <Plus className="w-4 h-4 stroke-[1.5]" />}</button><a href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${item.title} na Raquel Lima Clinic em Unaí.`)} onClick={() => handleCta(item.title)} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black text-white hover:bg-[#AF9F91] transition-colors" aria-label={`Consultar ${item.title} pelo WhatsApp`}><ArrowUpRight className="w-4 h-4" /></a></div></div>
          <div id={`specialty-details-${item.id}`} role="region" aria-label={`Detalhes de ${item.title}`} className={`grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[520px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}><img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover border border-black/10" /><div className="flex flex-col justify-center border border-black/10 bg-white p-6 sm:p-8"><span className="text-[10px] uppercase tracking-[0.22em] text-[#AF9F91] font-semibold mb-3">Sobre o cuidado</span><p className="font-brand-display text-2xl text-black leading-tight">{image.complement}</p><p className="text-xs text-neutral-600 font-light leading-relaxed mt-5">{item.fullDescription}</p></div></div>
        </article>; })}
      </div>
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <div className="relative aspect-[4/5] bg-white border border-black/5 overflow-hidden">
          <img src="/images/foto 4.webp" alt="Dra. Raquel Lima em atendimento na clínica" className="w-full h-full object-cover object-center" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#AF9F91] font-semibold">Planejamento Clínico</span>
            <p className="font-brand-display text-2xl font-light mt-1">Avaliação individualizada e detalhamento anatômico.</p>
            <p className="text-xs text-neutral-300 font-light mt-2 font-brand-sans">Nenhum procedimento é realizado sem análise prévia de proporções e harmonia do sorriso em Unaí.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>;
};
