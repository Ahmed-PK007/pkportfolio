"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/content";

function CaseSection({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="case-section">
      <div className="case-section-label">
        <span>{label}</span>
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </section>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="detail-list">
      {items.map((item, index) => (
        <li key={`${index}-${item.slice(0, 24)}`}>{item}</li>
      ))}
    </ul>
  );
}

type CaseOverlayProps = {
  study: CaseStudy;
  close: () => void;
};

function CaseOverlayComponent({ study, close }: CaseOverlayProps) {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const changeImage = useCallback(
    (direction: number) => {
      setActiveImage((current) =>
        current === null ? 0 : (current + direction + study.gallery.length) % study.gallery.length,
      );
    },
    [study.gallery.length],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        activeImage === null ? close() : setActiveImage(null);
      }
      if (activeImage !== null && event.key === "ArrowRight") {
        setActiveImage((current) => (current! + 1) % study.gallery.length);
      }
      if (activeImage !== null && event.key === "ArrowLeft") {
        setActiveImage((current) => (current! - 1 + study.gallery.length) % study.gallery.length);
      }
      if (event.key === "Tab" && activeImage === null) {
        const focusable = Array.from(
          overlayRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
          ) ?? [],
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeImage, close, study.gallery.length]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    closeButtonRef.current?.focus();
    overlayRef.current?.scrollTo(0, 0);
  }, []);

  const overlayMotion = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

  const sheetMotion = prefersReducedMotion
    ? { initial: false, animate: { y: 0, opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { y: 28, opacity: 0.7 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
        transition: { duration: 0.25 },
      };

  return (
    <motion.div
      ref={overlayRef}
      className="overlay"
      {...overlayMotion}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <motion.article className="overlay-sheet" {...sheetMotion}>
        <div className="overlay-top">
          <button ref={closeButtonRef} className="icon-button" onClick={close} aria-label="Close case study">
            <X size={20} />
          </button>
          <span>
            Case study / {study.eyebrow}
          </span>
          <button className="text-button" onClick={close}>
            Close
          </button>
        </div>
        <header className="case-hero">
          <div>
            <span className="eyebrow">Documented work</span>
            <h2 id="case-study-title">{study.title}</h2>
            <p>{study.eyebrow}</p>
          </div>
          <div className="case-hero-image">
            <Image
              src={study.cover}
              alt={`${study.title} results`}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              priority
            />
          </div>
        </header>
        <div className="case-body">
          <CaseSection label="01" title="Overview">
            <p>{study.overview}</p>
          </CaseSection>
          <CaseSection label="02" title="Problem">
            <p>{study.problem ?? "A separate problem statement was not specified in the supplied export."}</p>
          </CaseSection>
          <CaseSection label="03" title="Strategy">
            <DetailList items={study.strategy} />
          </CaseSection>
          <CaseSection label="04" title="Execution">
            <DetailList items={study.execution ?? ["A separate execution section was not specified in the supplied export."]} />
          </CaseSection>
          <CaseSection label="05" title="Creatives">
            <DetailList items={study.creatives ?? ["A separate creative analysis section was not specified in the supplied export."]} />
          </CaseSection>
          <CaseSection label="06" title="Gallery">
            <div className="gallery-grid">
              {study.gallery.map((src, index) => (
                <button
                  key={`${study.slug}-gallery-${index}`}
                  onClick={() => setActiveImage(index)}
                  className="gallery-image"
                  aria-label={`View image ${index + 1} of ${study.gallery.length}`}
                >
                  <Image
                    src={src}
                    alt={`${study.title} visual ${index + 1}`}
                    fill
                    sizes="(max-width: 720px) 50vw, 25vw"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </button>
              ))}
            </div>
          </CaseSection>
          <CaseSection label="07" title="Results">
            <div className="result-grid">
              {study.results.map((result) => (
                <div key={result.label}>
                  <span>{result.label}</span>
                  <strong>{result.value}</strong>
                </div>
              ))}
            </div>
          </CaseSection>
          <CaseSection label="08" title="Key Takeaways">
            <p className="takeaway">{study.summary}</p>
          </CaseSection>
        </div>
      </motion.article>
      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-label={`Expanded image ${activeImage + 1} of ${study.gallery.length}`}
          >
            <button className="icon-button lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close image">
              <X size={22} />
            </button>
            <button
              className="lightbox-nav prev"
              onClick={(event) => {
                event.stopPropagation();
                changeImage(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <div
              className="lightbox-image"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
              onTouchEnd={(event) => {
                if (touchStart !== null && Math.abs(event.changedTouches[0].clientX - touchStart) > 40) {
                  changeImage(event.changedTouches[0].clientX < touchStart ? 1 : -1);
                }
                setTouchStart(null);
              }}
            >
              <Image
                src={study.gallery[activeImage]}
                alt={`${study.title} visual ${activeImage + 1}`}
                fill
                sizes="100vw"
                priority
              />
            </div>
            <button
              className="lightbox-nav next"
              onClick={(event) => {
                event.stopPropagation();
                changeImage(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
            <span className="image-count" aria-live="polite">
              {activeImage + 1} / {study.gallery.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export const CaseOverlay = memo(CaseOverlayComponent);
