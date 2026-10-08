import React, { useState, useEffect } from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após 250px de rolagem para não sobrepor o Hero inicial
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackWhatsAppConversion("floating_whatsapp_click", "Botão Flutuante WhatsApp");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={getWhatsAppUrl(CLINIC_CONFIG.consultationMessage)}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-black hover:bg-[#AF9F91] text-white border border-[#AF9F91]/30 hover:border-black shadow-[0_8px_30px_rgb(0,0,0,0.18)] transition-all duration-300 p-3 md:px-5 md:py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        aria-label="Agende sua avaliação pelo WhatsApp com a Raquel Lima Clinic em Unaí"
      >
        {/* Ícone de WhatsApp vetorial elegante e minimalista em monocromático */}
        <svg
          className="w-5 h-5 fill-current text-white transition-transform duration-300 group-hover:scale-110 shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.507 14.307l-.009.075c-.238-.12-1.406-.693-1.624-.772-.218-.08-.377-.12-.536.12-.16.239-.615.772-.754.931-.139.16-.278.18-.517.06-.239-.12-1.008-.372-1.92-1.185-.709-.633-1.188-1.415-1.328-1.654-.139-.239-.015-.368.105-.487.108-.107.239-.279.359-.418.12-.14.16-.239.24-.398.08-.16.04-.299-.02-.418-.06-.12-.536-1.294-.735-1.773-.194-.467-.39-.404-.536-.412l-.457-.008c-.16 0-.418.06-.637.299-.219.239-.836.817-.836 1.992 0 1.175.856 2.31 0.976 2.47.12.16 1.684 2.571 4.08 3.606.57.246 1.015.393 1.363.504.573.182 1.094.156 1.506.095.459-.069 1.406-.575 1.605-1.13.199-.556.199-1.032.14-1.132-.06-.099-.219-.16-.458-.279zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 22l4.98-1.305A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 01-4.168-1.144l-.299-.178-3.089.81.824-3.011-.195-.31A8.17 8.17 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2s8.2 3.678 8.2 8.2-3.678 8.2-8.2 8.2z" />
        </svg>

        {/* Texto Desktop */}
        <div className="hidden md:flex flex-col ml-3 text-left">
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium leading-none">
            Agende sua avaliação
          </span>
          <span className="text-[9px] tracking-widest text-[#AF9F91] group-hover:text-white/80 uppercase mt-0.5 font-light">
            WhatsApp Oficial
          </span>
        </div>
      </a>
    </div>
  );
};
