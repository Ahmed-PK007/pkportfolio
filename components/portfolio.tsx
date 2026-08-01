"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, LineChart, Search, Sparkles, Target, TrendingUp } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Metric } from "@/components/metric";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { caseStudies, logos, type CaseStudy } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const CaseOverlay = dynamic(() => import("@/components/case-overlay").then((mod) => mod.CaseOverlay), {
  ssr: false,
});

const featuredMetrics = [
  { value: 4, prefix: "+", suffix: "", label: "Years of Experience" },
  { value: 20, prefix: "+", suffix: "", label: "Brands & Projects" },
  { value: 250, prefix: "+", suffix: "K USD", label: "Managed Ad Spend" },
];

const expertise = [
  { title: "Performance Marketing", icon: Target },
  { title: "Business Growth", icon: TrendingUp },
  { title: "Market Research", icon: Search },
  { title: "Creative Direction", icon: Sparkles },
  { title: "Revenue Optimization", icon: LineChart },
  { title: "Data & Analytics", icon: BarChart3 },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const scrollPositionRef = useRef(0);
  const progress = useMotionValue(0);
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30 });
  const spotlight = useRef<HTMLDivElement>(null);

  const restoreScrollAndFocus = useCallback(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPositionRef.current, behavior: "auto" });
      openerRef.current?.focus({ preventScroll: true });
    });
  }, []);

  const closeCaseStudy = useCallback(() => {
    const slug = selected?.slug;
    setSelected(null);

    if (slug && window.location.hash.slice(1) === slug) {
      window.history.back();
      return;
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    restoreScrollAndFocus();
  }, [restoreScrollAndFocus, selected?.slug]);

  const openCaseStudy = useCallback((study: CaseStudy, event: React.MouseEvent<HTMLButtonElement>) => {
    scrollPositionRef.current = window.scrollY;
    openerRef.current = event.currentTarget;
    setSelected(study);
    window.history.pushState({ caseStudy: study.slug }, "", `#${study.slug}`);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      progress.set(window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
    };
    const followPointer = (event: PointerEvent) => {
      spotlight.current?.style.setProperty("transform", `translate(${event.clientX - 240}px, ${event.clientY - 240}px)`);
    };
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    if (supportsFinePointer) window.addEventListener("pointermove", followPointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      if (supportsFinePointer) window.removeEventListener("pointermove", followPointer);
    };
  }, [progress]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const study = caseStudies.find((item) => item.slug === hash);
    if (study) {
      scrollPositionRef.current = window.scrollY;
      setSelected(study);
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      if (selected) {
        setSelected(null);
        restoreScrollAndFocus();
      }
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [restoreScrollAndFocus, selected]);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <div ref={spotlight} className="spotlight" aria-hidden="true" />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="brand">
          <span aria-hidden="true" /> PM<span className="brand-muted">/01</span>
        </a>
        <div>
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section id="top" className="hero">
        <div className="hero-copy">
          <Reveal>
            <div className="availability">
              <span aria-hidden="true" /> Performance Marketing Specialist
            </div>
            <h1>
              <em>Performance marketing</em> built on research, data, and business thinking.
            </h1>
            <p>I help businesses make smarter marketing decisions through research, performance strategy, and measurable execution. My experience spans Egypt, Saudi Arabia, the UAE, and Jordan across multiple industries and growth stages.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore case studies <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-quiet" href="#results">
                View professional snapshot
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="portrait-wrap">
          <div className="portrait-halo" aria-hidden="true" />
          <Image
            src="/images/profile/portrait.jpeg"
            alt="Performance Marketing Strategist"
            fill
            sizes="(max-width: 900px) 90vw, 42vw"
            priority
          />
        </Reveal>
      </section>
      <section className="trust-section" aria-label="Trusted by leading brands">
        <div className="trust-heading">
          <span className="eyebrow">Social proof</span>
          <p>Trusted by leading brands</p>
        </div>
        <div className="marquee marquee-row-one" aria-hidden="true">
          <div className="marquee-track marquee-track-right">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-cell" key={`top-${index}`}>
                <Image src={logo} alt="" fill sizes="264px" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee marquee-row-two" aria-hidden="true">
          <div className="marquee-track marquee-track-left">
            {[...logos.slice().reverse(), ...logos.slice().reverse()].map((logo, index) => (
              <div className="logo-cell" key={`bottom-${index}`}>
                <Image src={logo} alt="" fill sizes="264px" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div id="content">
        <section className="section about">
          <SectionHeading index="01" eyebrow="About" title="A business-first approach to performance marketing." />
          <Reveal className="about-lede">
            <p>
              Great marketing decisions are rarely made inside an ad account. They begin with understanding the business, researching the market, and identifying opportunities. Advertising becomes the execution layer—not the starting point. That's the approach I bring to every project.
            </p>
          </Reveal>
          <div className="about-grid">
            <Reveal>
              <div className="about-card">
                <span className="eyebrow">Business & Market Research</span>
                <p>
                  Understand the business model, customer behavior, competitors, and market opportunities before making marketing decisions.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="about-card">
                <span className="eyebrow">Strategy & Creative Direction</span>
                <p>
                  Translate research into acquisition strategies, messaging, creative direction, and channel planning designed around business objectives.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="about-card">
                <span className="eyebrow">Performance Optimization</span>
                <p>
                  Measure what matters, analyze performance data, identify growth opportunities, and continuously optimize campaigns for sustainable results.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        <section id="results" className="section results">
          <SectionHeading
            index="02"
            eyebrow="Professional snapshot"
            title="Experience at a glance."
            copy="A quick overview of the experience, markets, and measurable work represented throughout this portfolio."
          />
          <div className="metrics-grid profile-metrics">
            {featuredMetrics.map((metric) => (
              <Metric key={metric.label} {...metric} />
            ))}
          </div>
        </section>
        <section id="work" className="section work">
          <SectionHeading
            index="03"
            eyebrow="Case studies"
            title="A closer look at the work."
            copy="Open any case study to review its complete documented detail without leaving this page."
          />
          <div className="case-list">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug}>
                <button
                  className="case-card"
                  onClick={(event) => openCaseStudy(study, event)}
                  aria-label={`Open ${study.title} case study`}
                  aria-haspopup="dialog"
                >
                  <div className="case-card-image">
                    <Image
                      src={study.cover}
                      alt={`${study.title} results`}
                      fill
                      sizes="(max-width: 760px) 100vw, 45vw"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="case-card-copy">
                    <span>
                      0{index + 1} / {study.eyebrow}
                    </span>
                    <h3>{study.title}</h3>
                    <p>{study.overview}</p>
                    <span className="case-card-link">
                      Read case study <ArrowRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="expertise" className="section stack">
          <SectionHeading index="04" eyebrow="Expertise" title="What I Bring to the Table" />
          <div className="expertise-grid">
            {expertise.map(({ title, icon: Icon }) => (
              <Reveal key={title}>
                <div className="expertise-card">
                  <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
                  <span>{title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="contact" className="section contact">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2>Let’s talk about what growth could look like.</h2>
            <p>Start a conversation directly on WhatsApp.</p>
            <a
              className="button button-whatsapp"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on WhatsApp (opens in a new tab)"
            >
              <WhatsAppIcon /> Message on WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </Reveal>
        </section>
      </div>
      <footer>
        <span>Performance Marketing Strategist</span>
        <div className="footer-contact">
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp (opens in a new tab)">
            <WhatsAppIcon size={14} /> WhatsApp
          </a>
        </div>
      </footer>
      <AnimatePresence>{selected && <CaseOverlay study={selected} close={closeCaseStudy} />}</AnimatePresence>
    </main>
  );
}
