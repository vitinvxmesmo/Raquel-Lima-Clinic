import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, Play, X } from "lucide-react";

const VIDEO_SRC = "/images/testimonial/miriam_testimonial.mp4";
const POSTER_SRC = "/images/foto 1.webp";

export const TestimonialVideoSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  const openVideo = () => {
    setHasError(false);
    setIsOpen(true);
  };

  const closeVideo = () => {
    videoRef.current?.pause();
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    backRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeVideo();
    };
    document.addEventListener("keydown", onKeyDown);
    const player = videoRef.current;
    player?.play().catch(() => undefined);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return <section className="testimonial-section" aria-labelledby="testimonial-title">
    <div className="testimonial-heading">
      <p className="testimonial-eyebrow">Experiências reais</p>
      <h2 id="testimonial-title" className="font-brand-display">O que nossos pacientes dizem?</h2>
      <span className="testimonial-rule" />
      <p>Cada experiência é única. Conheça o relato de quem confiou em nosso cuidado.</p>
    </div>
    <div className="testimonial-preview-wrap">
      <button ref={triggerRef} type="button" className="testimonial-preview" onClick={openVideo} aria-label="Ver depoimento em vídeo">
        <img src={POSTER_SRC} alt="Prévia do depoimento de uma paciente da Raquel Lima Clinic" loading="lazy" />
        <span className="testimonial-preview-overlay" />
        <span className="testimonial-play"><Play fill="currentColor" size={20} /><span>Ver vídeo</span></span>
      </button>
    </div>
    {isOpen && <div className="testimonial-modal" role="dialog" aria-modal="true" aria-labelledby="testimonial-modal-title">
      <button ref={backRef} type="button" className="testimonial-back" onClick={closeVideo} aria-label="Voltar e fechar vídeo"><ArrowLeft size={18} /> Voltar</button>
      <h3 id="testimonial-modal-title" className="sr-only">Depoimento em vídeo</h3>
      <button type="button" className="testimonial-modal-close" onClick={closeVideo} aria-label="Fechar vídeo"><X /></button>
      {hasError ? <p className="testimonial-error">Não foi possível carregar o vídeo. Tente novamente mais tarde.</p> : <video ref={videoRef} className="testimonial-player" src={VIDEO_SRC} poster={POSTER_SRC} controls playsInline preload="none" onError={() => setHasError(true)} />}
    </div>}
  </section>;
};
