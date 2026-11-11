import React from "react";
import { CLINIC_IMAGES } from "../data/clinicData";

export const ClinicSection: React.FC = () => (
  <section id="familia" className="py-24 md:py-32 bg-white scroll-mt-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#FAF9F6] border border-black/5">
        <img src={CLINIC_IMAGES.clinicSpace.src} alt={CLINIC_IMAGES.clinicSpace.alt} width={CLINIC_IMAGES.clinicSpace.width} height={CLINIC_IMAGES.clinicSpace.height} className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.02] hover:scale-[1.01] transition-transform duration-700 ease-out" loading="lazy" decoding="async" />
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-black/75 backdrop-blur-md px-6 py-4 text-white max-w-sm hidden sm:block">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block">Nossa história</span>
          <p className="font-brand-display text-lg text-white font-normal mt-1">Família, afeto e propósito.</p>
          <p className="text-[11px] text-neutral-300 font-light font-brand-sans mt-0.5">Valores que inspiram um cuidado próximo, humano e verdadeiro.</p>
        </div>
      </div>
    </div>
  </section>
);
