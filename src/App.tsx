import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ClinicSection } from "./components/ClinicSection";
import { Specialties } from "./components/Specialties";
import { TestimonialVideoSection } from "./components/TestimonialVideoSection";
import { PrimaryCTA } from "./components/PrimaryCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { CLINIC_CONFIG, getWhatsAppUrl } from "./data/clinicData";
import { initAnalytics, trackWhatsAppConversion } from "./utils/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";
export default function App() {
  useEffect(() => { initAnalytics(); const loader = document.getElementById("initial-loader"); const removeLoader = () => { loader?.classList.add("is-hidden"); window.setTimeout(() => loader?.remove(), 650); }; window.requestAnimationFrame(() => window.setTimeout(removeLoader, 1100)); }, []);
  const handleScheduleClick = () => { trackWhatsAppConversion("header_schedule_click", "Agendamento Header"); window.open(getWhatsAppUrl(CLINIC_CONFIG.consultationMessage), "_blank", "noopener,noreferrer"); };
  if (window.location.pathname === "/politica-de-privacidade") return <PrivacyPolicy />;
  return <div className="min-h-screen bg-white text-black font-brand-sans selection:bg-[#AF9F91]/20 selection:text-black"><SpeedInsights /><Header onScheduleClick={handleScheduleClick} /><main><Hero /><ClinicSection /><Specialties /><div id="depoimentos"><TestimonialVideoSection /></div><div id="agendamento"><PrimaryCTA /></div><ContactSection /></main><Footer /><FloatingWhatsApp /></div>;
}
