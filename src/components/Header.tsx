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
    { label: "Dra. Raquel", href: "/dra-raquel", target: "#sobre" },
    { label: "Especialidades", href: "/especialidades", target: "#especialidades" },
    { label: "Valores", href: "/valores", target: "#clinica" },
    { label: "FAQ", href: "/faq", target: "#faq" },
    { label: "Contato", href: "/contato", target: "#contato" },
  ];

  const handleNavClick = (href: string, target: string) => {
    setIsMobileMenuOpen(false);
    window.history.pushState({}, "", href);
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
            ? "bg-white/95 backdrop-blur-md border-b border-black/5 py-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]"
            : "bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
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
            <img src="/images/logo_horizontal.webp" alt="Raquel Lima Clinic" className="w-[170px] md:w-[210px] h-auto" />
          </a>

          {/* Menu Desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.target);
                }}
                className="text-xs uppercase tracking-[0.16em] font-medium text-black/70 hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#AF9F91] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleCta}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs uppercase tracking-[0.18em] font-medium text-white bg-black hover:bg-[#AF9F91] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black cursor-pointer"
            >
              <span>Agendar avaliação</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-[#AF9F91] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#AF9F91]"
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
        className={`fixed inset-0 z-30 bg-white transition-opacity duration-300 md:hidden ${
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
