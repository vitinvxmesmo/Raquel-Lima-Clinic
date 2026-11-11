import React, { useState, useEffect } from "react";
import { CLINIC_CONFIG, getWhatsAppUrl } from "../data/clinicData";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onScheduleClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScheduleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne rolagem ao abrir menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Início", href: "/inicio", target: "#inicio" },
    { label: "Família", href: "#familia", target: "#familia" },
    { label: "Especialidades", href: "/especialidades", target: "#especialidades" },
    { label: "Depoimentos", href: "#depoimentos", target: "#depoimentos" },
    { label: "Agendamento", href: "#agendamento", target: "#agendamento" },
    { label: "Contato", href: "/contato", target: "#contato" },
  ];

  const handleNavClick = (href: string, target: string) => {
    setIsMobileMenuOpen(false);
    window.history.replaceState({}, "", href);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCta = () => {
    if (onScheduleClick) {
      onScheduleClick();
    } else {
      window.open(getWhatsAppUrl(CLINIC_CONFIG.consultationMessage), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.25)]"
            : "bg-black py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-12 flex items-center gap-6 xl:gap-10">
          {/* Logo Oficial */}
          <a
            href="/inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/inicio", "#inicio");
            }}
            className="group flex flex-col items-start leading-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#AF9F91]"
            aria-label="Raquel Lima Clinic - Início"
          >
            <img src="/images/logo_horizontal.webp" alt="Raquel Lima Clinic" className="w-[145px] xl:w-[175px] h-auto brightness-0 invert" />
          </a>

          {/* Menu Desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-7 min-w-0"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.target);
                }}
                className="whitespace-nowrap text-[10px] xl:text-xs uppercase tracking-[0.1em] xl:tracking-[0.14em] font-medium text-white/80 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#AF9F91] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={handleCta}
              type="button"
              className="inline-flex whitespace-nowrap items-center justify-center gap-2 px-5 xl:px-6 py-2.5 text-[10px] xl:text-xs uppercase tracking-[0.14em] xl:tracking-[0.18em] font-medium text-white bg-black hover:bg-[#AF9F91] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black cursor-pointer"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden ml-auto p-2 text-white hover:text-[#AF9F91] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#AF9F91]"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Menu Overlay Mobile */}
      <div
        className={`fixed inset-0 z-30 bg-white transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-28 pb-12 px-8">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.target);
                }}
                className="text-2xl font-brand-display text-black hover:text-[#AF9F91] transition-colors flex items-center justify-between border-b border-black/5 pb-3"
              >
                <span>{link.label}</span>
                <span className="text-xs font-brand-sans uppercase tracking-widest text-[#AF9F91]">
                  Ir
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-6 pt-6 border-t border-black/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleCta();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-white bg-black active:bg-[#AF9F91] transition-colors"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center text-xs text-neutral-500 font-brand-sans tracking-wide">
              <p>{CLINIC_CONFIG.cityState}</p>
              <p className="mt-1 text-[11px] text-neutral-400">Atendimento com hora marcada</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
