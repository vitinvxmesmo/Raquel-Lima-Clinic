/**
 * Módulo de Integração e Rastreamento Analítico
 * 
 * ARQUITETURA PREPARADA PARA:
 * - Google Analytics 4 (GA4)
 * - Google Search Console
 * - Microsoft Clarity
 * 
 * NOTA DE PRIVACIDADE:
 * Nenhum script de terceiros é executado sem que uma variável de ambiente ou ID oficial
 * seja explicitamente configurado, respeitando a LGPD e evitando conexões desnecessárias.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const ANALYTICS_CONFIG = {
  // Substitua pelo Measurement ID oficial do Google Analytics 4 (ex: "G-XXXXXXXXXX")
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || "",
  
  // Substitua pelo ID do projeto Microsoft Clarity se contratado
  clarityProjectId: import.meta.env.VITE_CLARITY_ID || "",
};

/**
 * Dispara evento personalizado para conversões de agendamento no WhatsApp
 */
export function trackWhatsAppConversion(action: string, label?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function" && ANALYTICS_CONFIG.gaMeasurementId) {
    window.gtag("event", "whatsapp_click", {
      event_category: "Engagement",
      event_label: label || "Agendamento Geral",
      action_source: action,
      location: "Unaí - MG",
    });
  }
}

/**
 * Inicializador seguro do GA4 (somente quando ID válido for configurado)
 */
export function initAnalytics() {
  if (typeof window === "undefined" || !ANALYTICS_CONFIG.gaMeasurementId) {
    return;
  }

  // Injeção assíncrona do script oficial do GA4
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.gaMeasurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_CONFIG.gaMeasurementId, {
    anonymize_ip: true,
  });
}
