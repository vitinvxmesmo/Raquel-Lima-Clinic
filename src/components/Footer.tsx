import React from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../data/clinicData";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Bloco Superior: Marca e Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo e Descrição da Clínica (Desktop: 5 cols) */}
          <div className="md:col-span-5">
            <img src="/images/logo_vertical.webp" alt="Raquel Lima Clinic" className="w-[150px] sm:w-[175px] h-auto mb-5" />

            <p className="font-brand-sans text-xs text-neutral-400 font-light leading-relaxed max-w-sm mt-4">
              Odontologia, estética facial e cuidado individualizado sob o olhar e a experiência da Dra. Raquel Lima em Unaí — MG.
            </p>

            <div className="mt-6 text-[11px] text-neutral-500 font-light">
              {CLINIC_CONFIG.croInfo}
            </div>
          </div>

          {/* Navegação Resumida (Desktop: 4 cols) */}
          <div className="md:col-span-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 text-xs text-neutral-300 font-brand-sans">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Dra. Raquel Lima
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Especialidades Clínicas
                </a>
              </li>
              <li>
                <a href="#clinica" className="hover:text-white transition-colors">
                  A Clínica
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Localização & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato Direto & Ações (Desktop: 3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#AF9F91] font-semibold block mb-4">
                Canais Oficiais
              </span>
              <div className="space-y-2 text-xs text-neutral-300">
                <a
                  href={getWhatsAppUrl(CLINIC_CONFIG.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  WhatsApp da Clínica
                </a>
                <a
                  href={CLINIC_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  Instagram {CLINIC_CONFIG.instagramHandle}
                </a>
                <p className="text-neutral-500 text-[11px] pt-1">
                  {CLINIC_CONFIG.cityState}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                aria-label="Voltar ao topo da página"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bloco Inferior: Copyright & Crédito Obrigatório Voxtor Brasil */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-brand-sans">
          <p>
            © 2026 {CLINIC_CONFIG.fullName}. Todos os direitos reservados.
          </p>

          <p className="text-neutral-500">
            Desenvolvimento:{" "}
            <a
              href={CLINIC_CONFIG.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white underline underline-offset-4 transition-colors"
            >
              {CLINIC_CONFIG.developerName}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
