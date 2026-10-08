import React from "react";
import { CLINIC_CONFIG } from "../data/clinicData";

export const Philosophy: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-black text-white relative overflow-hidden">
      {/* Elemento de fundo geométrico sutil */}
      <img src="/images/icon.webp" alt="" aria-hidden="true" className="absolute -left-24 bottom-[-4rem] w-64 md:w-96 opacity-[0.12] -rotate-12 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#AF9F91_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Kicker elegante */}
        <span className="text-[11px] uppercase tracking-[0.32em] text-[#AF9F91] font-medium block mb-8">
          Filosofia de Atendimento · {CLINIC_CONFIG.brandName} {CLINIC_CONFIG.brandSubtitle}
        </span>

        {/* Citação Monumental */}
        <h2 className="font-brand-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] tracking-tight text-balance max-w-4xl mx-auto">
          Não se trata apenas de um procedimento.
          <span className="block italic text-[#AF9F91] mt-3">
            Trata-se de entender você.
          </span>
        </h2>

        {/* Divisória central refinada */}
        <div className="w-12 h-[1px] bg-[#AF9F91]/60 mx-auto my-10" />

        {/* Complemento de Posicionamento */}
        <p className="font-brand-sans text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
          Cada atendimento começa com escuta atenta, avaliação minuciosa e planejamento estritamente individualizado. Respeitamos a sua identidade.
        </p>

        {/* Detalhe de assinatura da clínica */}
        <div className="mt-12 text-xs uppercase tracking-[0.25em] text-neutral-500 font-brand-sans">
          {CLINIC_CONFIG.cityState}
        </div>

      </div>
    </section>
  );
};
