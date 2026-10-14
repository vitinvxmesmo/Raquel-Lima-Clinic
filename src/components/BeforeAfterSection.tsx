import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";

const CASES = ["boca", "bochecha", "dentes", "nariz", "pele", "rosto"].map((name) => ({ name, src: `/images/antes e depois/${name}.webp` }));

export const BeforeAfterSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const move = (direction: number) => setActive((current) => (current + direction + CASES.length) % CASES.length);

  useEffect(() => {
    if (lightbox === null) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") setLightbox((current) => current === null ? null : (current - 1 + CASES.length) % CASES.length);
      if (event.key === "ArrowRight") setLightbox((current) => current === null ? null : (current + 1) % CASES.length);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return <section id="antes-e-depois" className="before-after-section" aria-labelledby="before-after-title">
    <div className="before-after-intro">
      <div className="before-after-copy"><p className="before-after-eyebrow">Cuidado que se revela nos detalhes</p><h2 id="before-after-title" className="font-brand-display">Antes e depois</h2><span className="before-after-rule" /><p>Uma seleção de imagens que registra, com naturalidade e responsabilidade, diferentes jornadas de cuidado na clínica.</p><small>Imagens divulgadas mediante autorização. Cada caso é individual e deve ser avaliado em consulta.</small></div>
      <img className="before-after-banner" src="/images/banner antes e depois.webp" alt="Detalhe editorial da apresentação de antes e depois" loading="lazy" />
    </div>
    <div className="before-after-carousel" onPointerDown={(event) => setDragStart(event.clientX)} onPointerUp={(event) => { if (dragStart !== null && Math.abs(event.clientX - dragStart) > 40) move(event.clientX > dragStart ? -1 : 1); setDragStart(null); }}>
      <button type="button" className="before-after-arrow before-after-arrow-left" onClick={() => move(-1)} aria-label="Imagem anterior"><ArrowLeft /></button>
      <div className="before-after-track" aria-live="polite">{CASES.map((item, index) => { const offset = (index - active + CASES.length) % CASES.length; const normalized = offset > CASES.length / 2 ? offset - CASES.length : offset; const isActive = normalized === 0; return <button key={item.src} type="button" className={`before-after-card ${isActive ? "is-active" : ""}`} style={{ transform: `translateX(${normalized * 108}%) scale(${isActive ? 1 : .88})`, zIndex: isActive ? 2 : 1 }} onClick={() => isActive ? setLightbox(index) : setActive(index)} aria-label={isActive ? `Ampliar imagem: ${item.name}` : `Ver imagem de ${item.name}`}><img src={item.src} alt={`Registro de antes e depois: ${item.name}`} loading={isActive ? "eager" : "lazy"} draggable={false} />{isActive && <span className="before-after-expand"><Expand size={16} /> Ampliar</span>}</button>; })}</div>
      <button type="button" className="before-after-arrow before-after-arrow-right" onClick={() => move(1)} aria-label="Próxima imagem"><ArrowRight /></button>
    </div>
    <div className="before-after-dots" role="tablist" aria-label="Selecionar imagem">{CASES.map((item, index) => <button key={item.src} type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Selecionar ${item.name}`} aria-selected={index === active} role="tab" />)}</div>
    {lightbox !== null && <div className="before-after-lightbox" role="dialog" aria-modal="true" aria-label={`Imagem ampliada: ${CASES[lightbox].name}`} onClick={() => setLightbox(null)}><button ref={closeButton} type="button" className="before-after-close" onClick={() => setLightbox(null)} aria-label="Fechar imagem"><X /></button><button type="button" className="before-after-lightbox-arrow left" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox - 1 + CASES.length) % CASES.length); }} aria-label="Imagem anterior"><ArrowLeft /></button><img src={CASES[lightbox].src} alt={`Registro de antes e depois: ${CASES[lightbox].name}`} onClick={(event) => event.stopPropagation()} /><button type="button" className="before-after-lightbox-arrow right" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox + 1) % CASES.length); }} aria-label="Próxima imagem"><ArrowRight /></button></div>}
  </section>;
};
