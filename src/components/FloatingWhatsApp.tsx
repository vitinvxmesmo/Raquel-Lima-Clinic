import React, { useState, useEffect } from "react";
import { getWhatsAppUrl } from "../data/clinicData";
import { trackWhatsAppConversion } from "../utils/analytics";

const WHATSAPP_ICON = "https://cdn-icons-png.flaticon.com/128/4494/4494494.png";
const WHATSAPP_MESSAGE = "Olá! Conheci a Raquel Lima Clinic pelo site e gostaria de agendar uma avaliação.";

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
    <a href={getWhatsAppUrl(WHATSAPP_MESSAGE)} onClick={() => trackWhatsAppConversion("floating_whatsapp_click", "Botão Flutuante WhatsApp")} target="_blank" rel="noopener noreferrer" aria-label="Agendar avaliação pelo WhatsApp" className="group block rounded-full shadow-[0_8px_24px_rgb(0,0,0,0.18)] transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2">
      <img src={WHATSAPP_ICON} alt="" aria-hidden="true" width="56" height="56" className="block h-[52px] w-[52px] md:h-14 md:w-14" />
    </a>
  </div>;
};
