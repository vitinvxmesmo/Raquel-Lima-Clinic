import React from "react";
import { CLINIC_CONFIG } from "../data/clinicData";

export const Authority: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-y border-black/5 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho silencioso da seção editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/5">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#AF9F91] font-semibold block mb-3">
              Posicionamento & Rigor
            </span>
            <h2 className="font-brand-display text-2xl sm:text-3xl lg:text-4xl text-black font-normal leading-tight">
              A convergência entre ciência odontológica e sensibilidade estética.
            </h2>
          </div>
          <div className="text-xs font-brand-sans text-neutral-500 uppercase tracking-widest">
            {CLINIC_CONFIG.cityState}
          </div>
        </div>

        {/* Grade editorial com divisórias finas (Zero cards, pura tipografia com espaçamento intencional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 pt-10">
          
          {/* Pilar 1: Experiência & Trajetória */}
          <div className="py-6 md:py-0 md:px-8 first:pl-0">
            <div className="text-[#AF9F91] font-brand-display text-3xl lg:text-4xl font-light mb-2">
              [+ XX Anos]
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-black mb-3">
              Dedicação à Prática Clínica
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Uma carreira pautada pelo aprimoramento contínuo, estudo detalhado da anatomia facial e respeito absoluto à saúde de cada paciente.
            </p>
            <span className="text-[10px] text-neutral-400 mt-3 block italic">
              * Número exato a ser configurado com o tempo de formação oficial
            </span>
          </div>

          {/* Pilar 2: Atuação Integrada */}
          <div className="py-6 md:py-0 md:px-8">
            <div className="text-[#AF9F91] font-brand-display text-3xl lg:text-4xl font-light mb-2">
              Odonto & Estética
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-black mb-3">
              Visão Sistêmica da Face
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              O domínio da cavidade oral e da dinâmica muscular possibilita intervenções mais seguras, proporcionais e com perfeita sustentação funcional.
            </p>
          </div>

          {/* Pilar 3: Cuidado Personalizado */}
          <div className="py-6 md:py-0 md:px-8 last:pr-0">
            <div className="text-[#AF9F91] font-brand-display text-3xl lg:text-4xl font-light mb-2">
              1 a 1
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-black mb-3">
              Tempo Dedicado Sem Pressa
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Consultas com agenda espaçada, garantindo escuta atenta, diagnóstico individualizado e acompanhamento pós-procedimento próximo e acolhedor.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
