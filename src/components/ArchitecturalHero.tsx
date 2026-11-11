'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  MapPin,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Maximize2,
  PhoneCall,
  Building,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ARCHITECTURAL_LEVELS, ArchitecturalLevel } from '@/lib/portfolioData';

interface ArchitecturalHeroProps {
  onExploreProperties: () => void;
  onSelectPropertyId: (propertyId: string) => void;
  onOpenBooking: (propertyTitle?: string) => void;
}

export function ArchitecturalHero({
  onExploreProperties,
  onSelectPropertyId,
  onOpenBooking,
}: ArchitecturalHeroProps) {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);
  const [interiorView, setInteriorView] = useState(false);

  useEffect(() => {
    if (!autoCycle) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ARCHITECTURAL_LEVELS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [autoCycle]);

  const currentLevel: ArchitecturalLevel = ARCHITECTURAL_LEVELS[activeIndex];
  const activeImage = interiorView ? currentLevel.secondaryImage : currentLevel.image;

  const handleSelectLevel = (idx: number) => {
    setAutoCycle(false);
    setInteriorView(false);
    setActiveIndex(idx);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-28 pb-8 select-none bg-[#070D18]"
    >
      {/* Full-Viewport Architectural Background with Smooth Crossfade & Camera Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLevel.id}-${interiorView ? 'int' : 'ext'}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={activeImage}
              alt={currentLevel.floorTitle[language]}
              className="w-full h-full object-cover object-center brightness-[0.58] contrast-[1.08]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Architectural Navy & Twilight Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/95 via-[#070D18]/55 to-[#070D18]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-[#070D18]/75" />
        <div className="absolute inset-0 architectural-grid opacity-40 pointer-events-none" />

        {/* Glowing Architectural Gold Light Lines */}
        <div className="hidden lg:block absolute top-28 bottom-24 left-[52%] w-[1.5px] gold-beam-vertical opacity-70 pointer-events-none" />
        <div className="hidden lg:block absolute top-[46%] left-[44%] w-56 h-[1.5px] gold-beam-horizontal opacity-75 pointer-events-none" />
        <div className="hidden lg:block absolute top-[64%] left-[52%] w-44 h-[1.5px] gold-beam-horizontal opacity-55 pointer-events-none" />
      </div>

      {/* Main Middle Viewport Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 my-auto py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        {/* Left Column: Headlines & CTAs (6 Cols) */}
        <div className="lg:col-span-6 flex items-center gap-5 sm:gap-8">
          {/* Vertical Dots */}
          <div className="hidden sm:flex flex-col items-center gap-3 py-4">
            {ARCHITECTURAL_LEVELS.map((lvl, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => handleSelectLevel(idx)}
                  aria-label={`Select level ${lvl.number}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    active
                      ? 'w-2.5 h-2.5 bg-[#F3D270] shadow-[0_0_12px_#D4AF37] ring-4 ring-[#D4AF37]/20'
                      : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/70'
                  }`}
                />
              );
            })}
          </div>

          {/* Typography Block */}
          <div className="space-y-6 max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLevel.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1526]/80 border border-[#D4AF37]/35 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#F3D270]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3D270] font-semibold">
                    {currentLevel.tag[language]}
                  </span>
                </div>

                <h1 className="font-editorial text-4xl sm:text-6xl xl:text-7xl font-normal tracking-[0.03em] leading-[1.05] text-white whitespace-pre-line drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  {currentLevel.headline[language]}
                </h1>

                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-light max-w-lg">
                  {currentLevel.subheadline[language]}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#F3D270]/90 tracking-wider uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{currentLevel.locationLabel}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onExploreProperties}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 border border-white/40 bg-white/[0.04] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#070D18] text-white text-xs uppercase tracking-[0.2em] font-semibold backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>
                  {language === 'en' ? 'EXPLORE FOR LEASE' : 'EXPLORAR EN RENTA'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelectPropertyId(currentLevel.propertyId)}
                className="w-full sm:w-auto px-5 py-3.5 bg-[#0B1526]/85 border border-[#D4AF37]/40 hover:border-[#F3D270] text-[#F3D270] text-xs uppercase tracking-[0.18em] font-medium backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>
                  {language === 'en' ? 'INSPECT THIS SPACE' : 'VER FICHA TÉCNICA'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Center-Right Showcase Window (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
          <motion.div
            key={`${currentLevel.id}-card`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md glass-panel rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          >
            <div className="relative h-56 sm:h-64 w-full overflow-hidden group">
              <img
                src={activeImage}
                alt={currentLevel.floorTitle[language]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-black/30" />

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#070D18]/85 border border-[#D4AF37]/40 text-[10px] font-mono uppercase tracking-[0.18em] text-[#F3D270]">
                  {currentLevel.floorTitle[language]}
                </span>
                <button
                  type="button"
                  onClick={() => setInteriorView(!interiorView)}
                  className="px-2.5 py-1 rounded bg-[#D4AF37] text-[#070D18] text-[10px] font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  {interiorView
                    ? language === 'en'
                      ? 'EXTERIOR VIEW'
                      : 'VISTA EXTERIOR'
                    : language === 'en'
                    ? 'INTERIOR / BAY VIEW'
                    : 'VISTA INTERIOR'}
                </button>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300">
                    {language === 'en' ? 'AVAILABLE AREA' : 'ÁREA DISPONIBLE'}
                  </p>
                  <p className="font-editorial text-2xl text-white font-semibold">
                    {currentLevel.metrics.area[language]}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#F3D270]">
                    {language === 'en' ? 'LEASE RATE' : 'TARIFA'}
                  </p>
                  <p className="text-base font-bold text-white">
                    {currentLevel.metrics.rate[language]}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-[#0B1526]/90 space-y-4">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[#070D18]/70 border border-white/[0.06]">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">
                    {language === 'en' ? 'CONFIGURATION' : 'CONFIGURACIÓN'}
                  </p>
                  <p className="text-slate-100 font-medium mt-0.5">
                    {currentLevel.metrics.config[language]}
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#070D18]/70 border border-white/[0.06]">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">
                    {language === 'en' ? 'EXPOSURE & ACCESS' : 'ACCESO Y EXPOSICIÓN'}
                  </p>
                  <p className="text-slate-100 font-medium mt-0.5">
                    {currentLevel.metrics.access[language]}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => onOpenBooking(currentLevel.locationLabel)}
                  className="text-[11px] uppercase tracking-[0.18em] text-[#F3D270] hover:underline flex items-center gap-1.5 font-semibold cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>
                    {language === 'en'
                      ? 'Schedule Private Tour'
                      : 'Agendar Recorrido Privado'}
                  </span>
                </button>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {language === 'en' ? 'ACTIVE PORTFOLIO' : 'PORTAFOLIO ACTIVO'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Far-Right Elevator HUD (2 Cols) */}
        <div className="lg:col-span-2 flex lg:flex-col items-center justify-between lg:justify-center gap-4 lg:pl-6">
          <div className="flex lg:flex-col items-center gap-3">
            <button
              type="button"
              onClick={() =>
                handleSelectLevel(
                  (activeIndex - 1 + ARCHITECTURAL_LEVELS.length) %
                    ARCHITECTURAL_LEVELS.length
                )
              }
              aria-label="Previous Level"
              className="p-2 rounded-full border border-white/15 bg-[#0B1526]/70 text-slate-300 hover:border-[#D4AF37] hover:text-[#F3D270] transition-colors cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
            </button>

            <div className="relative flex lg:flex-col items-center gap-6 py-2 lg:py-6">
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-white/10 via-[#D4AF37]/50 to-white/10" />

              {ARCHITECTURAL_LEVELS.map((lvl, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => handleSelectLevel(idx)}
                    className="relative z-10 flex items-center gap-3 group cursor-pointer"
                  >
                    <span
                      className={`text-xs font-mono tracking-widest transition-all ${
                        isActive
                          ? 'text-[#F3D270] font-bold scale-110'
                          : 'text-slate-400 group-hover:text-white'
                      }`}
                    >
                      {lvl.number}
                    </span>
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#D4AF37] ring-4 ring-[#D4AF37]/30 shadow-[0_0_16px_#F3D270]'
                          : 'bg-[#0B1526] border border-white/30 group-hover:border-[#D4AF37]'
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#070D18]" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() =>
                handleSelectLevel((activeIndex + 1) % ARCHITECTURAL_LEVELS.length)
              }
              aria-label="Next Level"
              className="p-2 rounded-full border border-white/15 bg-[#0B1526]/70 text-slate-300 hover:border-[#D4AF37] hover:text-[#F3D270] transition-colors cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 mt-4">
            <span className="writing-vertical text-[10px] uppercase tracking-[0.32em] text-slate-400">
              {language === 'en' ? 'INDIANAPOLIS · PORTFOLIO' : 'INDIANÁPOLIS · PORTAFOLIO'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Timeline & HUD Bar */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 pt-4">
        <div className="glass-panel rounded-xl px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/15">
          <div className="flex items-center gap-4 text-xs">
            <div className="hidden sm:flex items-center gap-2 text-[#F3D270] font-semibold uppercase tracking-wider">
              <Building className="w-4 h-4 text-[#D4AF37]" />
              <span>{language === 'en' ? 'HYCO HPM · SINCE 2018' : 'HYCO HPM · DESDE 2018'}</span>
            </div>
            <span className="hidden sm:inline text-white/15">|</span>
            <p className="text-slate-300 text-center sm:text-left">
              {language === 'en'
                ? 'Schedule a personalized consultation with our Indianapolis team:'
                : 'Agende una consulta personalizada con nuestro equipo en Indianápolis:'}{' '}
              <a
                href="tel:+13176750041"
                className="text-white font-semibold hover:text-[#F3D270] underline decoration-[#D4AF37]/60 underline-offset-4"
              >
                +1 (317) 675-0041
              </a>
            </p>
          </div>

          {/* Timeline Selector */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto max-w-full py-1 no-scrollbar">
            {ARCHITECTURAL_LEVELS.map((lvl, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => handleSelectLevel(idx)}
                  className={`px-3 py-1.5 rounded text-[11px] font-mono tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#D4AF37]/20 text-[#F3D270] border border-[#D4AF37]/60'
                      : 'text-slate-400 hover:text-white border border-transparent'
                  }`}
                >
                  {lvl.metrics.area[language]} · {lvl.code[language]}
                </button>
              );
            })}
          </div>

          {/* Right Signature HUD Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                {currentLevel.levelBadge[language]}
              </p>
              <p className="text-sm font-editorial font-semibold tracking-wider text-white">
                {currentLevel.code[language]} · {currentLevel.number}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                handleSelectLevel((activeIndex + 1) % ARCHITECTURAL_LEVELS.length)
              }
              title={language === 'en' ? 'Next Architectural Level' : 'Siguiente Nivel'}
              className="w-10 h-10 rounded-full gold-gradient text-[#070D18] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.45)] hover:scale-105 transition-transform cursor-pointer"
            >
              <Layers className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
