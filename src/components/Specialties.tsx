import React from "react";
import { SPECIALTIES, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";
import { ArrowUpRight } from "lucide-react";

const SPECIALTY_IMAGES: Record<string, { src: string; alt: string }> = {
  "harmonizacao-full-face": { src: "/images/full-face.jpeg", alt: "Registro de procedimento de harmonização facial Full Face" },
  "toxina-botulinica": { src: "/images/botox.jpeg", alt: "Registro de aplicação de toxina botulínica" },
  bioestimuladores: { src: "/images/bioestimulador-colageno.jpeg", alt: "Registro de procedimento com bioestimuladores de colágeno" },
};

const getSpecialtyWhatsAppUrl = (title: string) => getWhatsAppUrl(`Olá! Conheci a Raquel Lima Clinic pelo site e gostaria de saber mais sobre ${title}. Podemos conversar sobre uma avaliação?`);

export const Specialties: React.FC = () => {
  const specialties = SPECIALTIES.filter((item) => SPECIALTY_IMAGES[item.id]).map((item, index) => ({ ...item, number: String(index + 1).padStart(2, "0") }));
  return <section id="especialidades" className="py-24 md:py-32 bg-[#FAF9F6] border-t border-black/5 scroll-mt-24"><div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="pb-12 border-b border-black/10"><span className="text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-3">Áreas de Atuação em Unaí - MG</span><h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-black font-normal leading-tight max-w-2xl">Especialidades estéticas conduzidas com rigor.</h2></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pt-12">{specialties.map((item) => { const image = SPECIALTY_IMAGES[item.id]; return <article key={item.id} className="flex flex-col"><div className="flex items-baseline gap-4 mb-4"><span className="font-brand-display text-2xl text-[#AF9F91] font-light">{item.number}</span><h3 className="font-brand-display text-2xl text-black">{item.title}</h3></div><img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-cover border border-black/10" /><a href={getSpecialtyWhatsAppUrl(item.title)} onClick={() => trackWhatsAppConversion("specialty_cta_whatsapp", item.title)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium text-white bg-black hover:bg-[#AF9F91] transition-colors">Agendar avaliação <ArrowUpRight className="w-4 h-4" /></a></article>; })}</div>
  </div></section>;
};
