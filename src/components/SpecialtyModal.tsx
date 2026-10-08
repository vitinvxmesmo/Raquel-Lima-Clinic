import React, { useEffect } from "react";
import { SpecialtyItem, getWhatsAppUrl } from "../data/clinicData";
import { X, ArrowUpRight, Check } from "lucide-react";

interface SpecialtyModalProps {
  specialty: SpecialtyItem | null;
  onClose: () => void;
}

export const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
  specialty,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (specialty) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [specialty, onClose]);

  if (!specialty) return null;

  const whatsappMessage = `Olá! Gostaria de saber mais sobre o atendimento de ${specialty.title} na Raquel Lima Clinic.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specialty-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white p-8 sm:p-12 border border-black/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Número e Categoria Editorial */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#AF9F91] font-semibold mb-3">
          <span>{specialty.number}</span>
          <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#AF9F91]"></span>
          <span>Especialidade Clínica</span>
        </div>

        {/* Título */}
        <h3
          id="specialty-modal-title"
          className="font-brand-display text-3xl sm:text-4xl text-black font-normal mb-6"
        >
          {specialty.title}
        </h3>

        {/* Descrição Detalhada */}
        <p className="font-brand-sans text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
          {specialty.fullDescription}
        </p>

        {/* Pilares / Considerações */}
        <div className="pt-6 border-t border-black/10 mb-8">
          <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-black mb-4">
            Abordagem e Princípios
          </h4>
          <ul className="space-y-3">
            {specialty.indications.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 font-light"
              >
                <Check className="w-4 h-4 text-[#AF9F91] shrink-0 mt-0.5 stroke-[1.75]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Aviso Ético Responsável */}
        <div className="bg-[#FAF9F6] p-4 text-[11px] text-neutral-500 font-light mb-8 border-l-2 border-[#AF9F91]">
          Cada protocolo é planejado de forma estritamente individualizada após consulta presencial com a Dra. Raquel Lima. Resultados e técnicas variam conforme a anatomia e necessidades de cada paciente.
        </div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/5">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-[0.16em] text-neutral-500 hover:text-black transition-colors"
          >
            Voltar
          </button>

          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-white bg-black hover:bg-[#AF9F91] transition-colors"
          >
            <span>Tirar dúvidas no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
