import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Authority } from "./components/Authority";
import { About } from "./components/About";
import { Specialties } from "./components/Specialties";
import { Philosophy } from "./components/Philosophy";
import { ResultsSection } from "./components/ResultsSection";
import { ClinicSection } from "./components/ClinicSection";
import { FAQSection } from "./components/FAQSection";
import { PrimaryCTA } from "./components/PrimaryCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { CLINIC_CONFIG, getWhatsAppUrl } from "./data/clinicData";
import { initAnalytics, trackWhatsAppConversion } from "./utils/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  useEffect(() => {
    const routeTargets: Record<string, string> = {
      "/inicio": "#inicio",
      "/dra-raquel": "#sobre",
      "/especialidades": "#especialidades",
      "/valores": "#clinica",
      "/faq": "#faq",
      "/contato": "#contato",
    };

    const target = routeTargets[window.location.pathname];
    if (target) {
      window.setTimeout(() => document.querySelector(target)?.scrollIntoView(), 0);
    }
  }, []);

  useEffect(() => {
    initAnalytics();
    const loader = document.getElementById("initial-loader");
    const removeLoader = () => {
      loader?.classList.add("is-hidden");
      window.setTimeout(() => loader?.remove(), 650);
    };
    window.requestAnimationFrame(() => window.setTimeout(removeLoader, 1100));
  }, []);

  const handleScheduleClick = () => {
    trackWhatsAppConversion("header_schedule_click", "Agendamento Header");
    window.open(getWhatsAppUrl(CLINIC_CONFIG.consultationMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white text-black font-brand-sans selection:bg-[#AF9F91]/20 selection:text-black">
      <SpeedInsights />
      {/* Topo / Header Fixo */}
      <Header onScheduleClick={handleScheduleClick} />

      {/* Conteúdo Principal Semântico */}
      <main>
        {/* 1. Hero Section Editorial */}
        <Hero />

        {/* 2. Seção de Autoridade & Rigor Clínico */}
        <Authority />

        {/* 3. Trajetória da Dra. Raquel Lima */}
        <About />

        {/* 4. Especialidades & Procedimentos */}
        <Specialties />

        {/* 5. Filosofia de Atendimento (Respiro Visual Preto Monumental) */}
        <Philosophy />

        {/* 6. Evidência Clínica & Responsabilidade Ética */}
        <ResultsSection />

        {/* 7. O Espaço da Clínica em Unaí */}
        <ClinicSection />

        {/* 8. Perguntas Frequentes (FAQ Estruturado para SEO e Experiência) */}
        <FAQSection />

        {/* 9. Chamada Principal de Conversão */}
        <PrimaryCTA />

        {/* 10. Localização & Canais de Contato em Unaí - MG */}
        <ContactSection />
      </main>

      {/* Rodapé Minimalista com Créditos Obrigatórios */}
      <Footer />

      {/* Botão de WhatsApp Flutuante com Direção de Luxo */}
      <FloatingWhatsApp />
    </div>
  );
}
