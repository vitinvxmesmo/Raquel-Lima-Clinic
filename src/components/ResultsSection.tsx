import React from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../data/clinicData";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export const ResultsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-3">
            Evidência Clínica & Casos
          </span>
          <h2 className="font-brand-display text-3xl sm:text-4xl text-black font-normal leading-tight">
            Excelência construída caso a caso, com discrição e respeito absoluto.
          </h2>
          <p className="font-brand-sans text-sm text-neutral-600 font-light mt-4 leading-relaxed">
            Apresentamos nossa conduta clínica priorizando a privacidade dos nossos pacientes e em total alinhamento às diretrizes éticas e regulatórias do Conselho de Classe.
          </p>
        </div>

        {/* Bloco de Rigor Ético & Estrutura Preparada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F6] p-8 sm:p-12 border border-black/5">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#AF9F91] font-medium">
              <ShieldCheck className="w-4 h-4 stroke-[1.75]" />
              <span>Diretrizes Éticas & Responsabilidade Médica-Odontológica</span>
            </div>

            <h3 className="font-brand-display text-2xl sm:text-3xl text-black font-normal">
              Resultados autênticos, sem artifícios ou promessas irreais.
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Em respeito à ética profissional e às normas vigentes, não divulgamos casos com promessas de resultados pré-determinados. Cada organismo reage de maneira única. Fotografias de acompanhamento clínico e documentação técnica são apresentadas exclusivamente em consulta presencial personalizada.
            </p>

            <div className="pt-2 text-[11px] text-neutral-400 font-mono uppercase tracking-wider">
              {CLINIC_CONFIG.croInfo} · {CLINIC_CONFIG.cityState}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma avaliação individualizada para conhecer os protocolos da Dra. Raquel Lima.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-white bg-black hover:bg-[#AF9F91] transition-colors"
            >
              <span>Avaliação Presencial</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-[11px] text-neutral-400 mt-2">
              Privacidade garantida
            </span>
          </div>

        </div>

        {/* Pilares de Avaliação de Caso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-black/10">
          <div>
            <span className="text-xs font-brand-sans font-medium text-[#AF9F91] block mb-2">01. Diagnóstico</span>
            <h4 className="font-brand-display text-xl text-black mb-2">Mapeamento Inicial</h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Exames clínicos minuciosos, avaliação tridimensional da dinâmica facial e análise oclusal completa.
            </p>
          </div>

          <div>
            <span className="text-xs font-brand-sans font-medium text-[#AF9F91] block mb-2">02. Planejamento</span>
            <h4 className="font-brand-display text-xl text-black mb-2">Estratégia Sob Medida</h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Definição de protocolos combinados e cronograma de sessões respeitando os limites biológicos.
            </p>
          </div>

          <div>
            <span className="text-xs font-brand-sans font-medium text-[#AF9F91] block mb-2">03. Acompanhamento</span>
            <h4 className="font-brand-display text-xl text-black mb-2">Cuidado Contínuo</h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Retornos periódicos para monitoramento da estabilidade dos resultados e manutenção da saúde tecidual.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
