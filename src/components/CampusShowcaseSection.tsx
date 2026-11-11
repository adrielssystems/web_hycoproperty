'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  CheckCircle2,
  Zap,
  Wind,
  Shield,
  Truck,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface CampusShowcaseSectionProps {
  onOpenBooking: (propertyTitle?: string) => void;
}

export function CampusShowcaseSection({ onOpenBooking }: CampusShowcaseSectionProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'bldg1' | 'bldg2' | 'bldg3' | 'aerial'>('aerial');

  const views = {
    aerial: {
      code: { en: 'CAMPUS MASTER PLAN', es: 'PLANO MAESTRO DEL COMPLEJO' },
      level: { en: 'I-70 & HOLT RD CORRIDOR', es: 'CORREDOR I-70 Y HOLT RD' },
      title: {
        en: 'Multi-Tenant Industrial Campus · 4210 / 4200 / 4190 W. Morris St',
        es: 'Campus Industrial Multi-Nave · 4210 / 4200 / 4190 W. Morris St',
      },
      sqft: { en: '11,750 SQ FT TOTAL', es: '11,750 PIES² TOTALES' },
      rate: { en: '$14.00 /SQ FT · GROSS LEASE', es: '$14.00 /PIE² · RENTA BRUTA' },
      image: '/properties/morris-aerial-1.jpg',
      secondaryImage: '/properties/morris-aerial-3.jpg',
      summary: {
        en: 'Three high-visibility industrial service buildings on a single strategic site with clear I-70 exposure and fast access at the I-70 and Holt Rd exit. Features a fenced rear lot for secure fleet parking, staging, storage, and heavy circulation.',
        es: 'Tres edificios industriales y de servicios de alta visibilidad en un solo predio estratégico con exposición directa a la I-70 y rápido acceso en la salida de I-70 y Holt Rd. Incluye patio trasero cercado para estacionamiento seguro de flotas, maniobras y almacenaje.',
      },
      specs: {
        en: [
          'Lease full 3-building campus or individual building',
          'Fenced rear lot for fleet staging, parking & circulation',
          'Illuminated front signage with high-traffic I-70 corridor exposure',
          'All buildings equipped with compressed air lines & heavy power',
        ],
        es: [
          'Arriende el campus completo de 3 naves o un edificio individual',
          'Patio trasero cercado para maniobras, estacionamiento de flotas y almacenaje',
          'Señalización frontal iluminada con exposición al corredor I-70',
          'Todas las naves equipadas con líneas de aire comprimido y energía trifásica/pesada',
        ],
      },
    },
    bldg1: {
      code: { en: 'BUILDING 01 · AVAILABLE', es: 'EDIFICIO 01 · DISPONIBLE' },
      level: { en: '4210 W. MORRIS ST', es: '4210 W. MORRIS ST' },
      title: {
        en: 'Building 01 — 4210 W. Morris St (Shop + 2 Private Offices)',
        es: 'Edificio 01 — 4210 W. Morris St (Taller + 2 Oficinas Privadas)',
      },
      sqft: { en: '4,000 SQ FT', es: '4,000 PIES²' },
      rate: { en: '$14.00 /SQ FT · GROSS LEASE', es: '$14.00 /PIE² · RENTA BRUTA' },
      image: '/properties/bldg1-shop.jpg',
      secondaryImage: '/properties/bldg1-office.jpg',
      summary: {
        en: '4,000 Sq Ft industrial service building featuring a dedicated front entrance to two private executive offices with above-office storage, plus a climate-controlled high-ceiling work bay and rear tall overhead door accessing the fenced lot.',
        es: 'Nave industrial de 4,000 Pies² con entrada frontal dedicada a dos oficinas ejecutivas privadas con almacenamiento superior, además de área de taller climatizada de gran altura y portón trasero elevado con salida al patio cercado.',
      },
      specs: {
        en: [
          'Front reception & two private offices with mezzanine storage above',
          'Rear tall overhead door with direct access to fenced lot',
          'Heated and air-conditioned shop and office areas',
          'Air lines installed throughout the shop & heavy electrical capacity',
        ],
        es: [
          'Recepción frontal y dos oficinas privadas con mezzanine superior',
          'Portón trasero de gran altura con acceso directo al patio cercado',
          'Áreas de taller y oficinas con calefacción y aire acondicionado',
          'Líneas de aire comprimido en todo el taller y alta capacidad eléctrica',
        ],
      },
    },
    bldg2: {
      code: { en: 'BUILDING 02 · EQUIPPED WITH LIFT', es: 'EDIFICIO 02 · CON ELEVADOR HIDRÁULICO' },
      level: { en: '4200 W. MORRIS ST', es: '4200 W. MORRIS ST' },
      title: {
        en: 'Building 02 — 4200 W. Morris St (Shop + Hydraulic Lift)',
        es: 'Edificio 02 — 4200 W. Morris St (Taller + Elevador Hidráulico)',
      },
      sqft: { en: '4,000 SQ FT', es: '4,000 PIES²' },
      rate: { en: '$14.00 /SQ FT · GROSS LEASE', es: '$14.00 /PIE² · RENTA BRUTA' },
      image: '/properties/bldg2-lift.jpg',
      secondaryImage: '/properties/bldg2-shop.jpg',
      summary: {
        en: '4,000 Sq Ft specialized fleet & automotive service facility equipped with an on-site vehicle lift, front tall overhead door, climate-controlled shop floor, and full compressed air infrastructure.',
        es: 'Instalación especializada de 4,000 Pies² para mantenimiento de flotas y servicio automotriz, equipada con elevador hidráulico en sitio, portón frontal de gran altura, taller climatizado y red de aire comprimido.',
      },
      specs: {
        en: [
          'One automotive / industrial lift installed and available for use',
          'Front tall overhead door with access to fenced lot',
          'Heated and air-conditioned shop area with high ceilings',
          'Full compressed air lines & illuminated front signage',
        ],
        es: [
          'Un elevador automotriz / industrial instalado y listo para operar',
          'Portón frontal de gran altura con acceso a patio cercado',
          'Área de taller climatizada con techos de gran altura libre',
          'Red completa de aire comprimido y letrero frontal iluminado',
        ],
      },
    },
    bldg3: {
      code: { en: 'BUILDING 03 · 3,750 SF', es: 'EDIFICIO 03 · 3,750 PIES²' },
      level: { en: '4190 W. MORRIS ST', es: '4190 W. MORRIS ST' },
      title: {
        en: 'Building 03 — 4190 W. Morris St (Industrial Bay & Office)',
        es: 'Edificio 03 — 4190 W. Morris St (Nave Industrial y Oficina)',
      },
      sqft: { en: '3,750 SQ FT', es: '3,750 PIES²' },
      rate: { en: '$14.00 /SQ FT · GROSS LEASE', es: '$14.00 /PIE² · RENTA BRUTA' },
      image: '/properties/bldg3-front.webp',
      secondaryImage: '/properties/bldg3-interior.webp',
      summary: {
        en: '3,750 Sq Ft high-visibility industrial service building offering tall overhead door access, rear fenced lot connectivity, climate-controlled shop and office, and above-office storage.',
        es: 'Nave industrial de 3,750 Pies² de alta visibilidad con portón de gran altura, conexión al patio trasero cercado, taller y oficina climatizados y área de almacenamiento sobre oficina.',
      },
      specs: {
        en: [
          '3,750 Sq Ft layout with tall overhead door + rear fenced lot access',
          'Heated and air-conditioned shop and private office',
          'Office with above-office storage mezzanine',
          'Heavy electrical capacity & compressed air lines throughout',
        ],
        es: [
          'Distribución de 3,750 Pies² con portón alto + acceso a patio cercado',
          'Taller y oficina privada con calefacción y aire acondicionado',
          'Oficina con almacenamiento superior tipo mezzanine',
          'Capacidad eléctrica industrial y líneas de aire comprimido',
        ],
      },
    },
  };

  const current = views[activeTab];

  return (
    <section
      id="architecture"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/[0.08] bg-gradient-to-b from-[#070D18] via-[#0B1526] to-[#070D18]"
    >
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F3D270]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#F3D270]">
                {language === 'en'
                  ? 'ARCHITECTURAL & INDUSTRIAL CAMPUS EXPLORER'
                  : 'EXPLORADOR ARQUITECTÓNICO DE COMPLEJOS'}
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.06]">
              {language === 'en'
                ? 'Interactive Campus & Level Inspection'
                : 'Inspección Interactiva de Naves y Niveles'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {language === 'en'
                ? 'Explore our flagship multi-building industrial corridor on W. Morris St (I-70 & Holt Rd exit). Switch between the aerial master plan and individual building interiors.'
                : 'Explore nuestro corredor industrial insignia de múltiples edificios en W. Morris St (salida I-70 y Holt Rd). Alterne entre el plano maestro aéreo y el interior de cada nave.'}
            </p>
          </div>

          {/* Interactive Level Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#070D18] p-1.5 rounded-xl border border-white/10">
            {[
              { id: 'aerial', label: { en: '00 · Aerial Campus', es: '00 · Vista Aérea' } },
              { id: 'bldg1', label: { en: '01 · 4210 Morris', es: '01 · 4210 Morris' } },
              { id: 'bldg2', label: { en: '02 · 4200 Morris', es: '02 · 4200 Morris' } },
              { id: 'bldg3', label: { en: '03 · 4190 Morris', es: '03 · 4190 Morris' } },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'gold-gradient text-[#070D18] font-bold shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label[language]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Viewport Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45 }}
            className="glass-panel rounded-2xl overflow-hidden border border-[#D4AF37]/30 grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Visual Showcase (7 Cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] overflow-hidden bg-[#070D18]">
              <img
                src={current.image}
                alt={current.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-black/35" />

              {/* Top HUD Callout */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded bg-[#070D18]/90 border border-[#D4AF37]/50 text-xs font-mono uppercase tracking-[0.2em] text-[#F3D270]">
                  {current.code[language]}
                </span>
                <span className="px-3.5 py-1.5 rounded bg-[#070D18]/90 border border-white/15 text-xs font-mono text-white">
                  {current.level[language]}
                </span>
              </div>

              {/* Inset Secondary Picture-in-Picture Frame */}
              <div className="hidden sm:block absolute bottom-5 right-5 w-48 h-32 rounded-xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl">
                <img
                  src={current.secondaryImage}
                  alt="Secondary view"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#070D18]/85 px-2 py-1 text-[9px] font-mono uppercase tracking-wider text-[#F3D270] text-center">
                  {language === 'en' ? 'INTERIOR / DETAIL VIEW' : 'VISTA DE DETALLE'}
                </div>
              </div>

              {/* Bottom Left Level Metric */}
              <div className="absolute bottom-5 left-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#F3D270]">
                  {current.rate[language]}
                </p>
                <p className="font-editorial text-4xl text-white font-semibold">
                  {current.sqft[language]}
                </p>
              </div>
            </div>

            {/* Right Engineering & Specification Panel (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-[#0B1526]/95 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#D4AF37]">
                      {language === 'en'
                        ? 'TECHNICAL SPECIFICATION SHEET'
                        : 'FICHA TÉCNICA DE INGENIERÍA'}
                    </p>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-white mt-1">
                      {current.title[language]}
                    </h3>
                  </div>
                  <Layers className="w-6 h-6 text-[#D4AF37] shrink-0" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {current.summary[language]}
                </p>

                {/* 4 Engineering Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#070D18]/80 border border-white/[0.07] flex items-center gap-2.5">
                    <Wind className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="text-xs text-slate-200">
                      {language === 'en' ? 'Heated & A/C Shop' : 'Climatizado (Calef./AC)'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070D18]/80 border border-white/[0.07] flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="text-xs text-slate-200">
                      {language === 'en' ? 'Heavy Power & Air Lines' : 'Energía y Aire Comprimido'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070D18]/80 border border-white/[0.07] flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="text-xs text-slate-200">
                      {language === 'en' ? 'Tall Overhead Doors' : 'Portones de Gran Altura'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070D18]/80 border border-white/[0.07] flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="text-xs text-slate-200">
                      {language === 'en' ? 'Secure Fenced Rear Lot' : 'Patio Trasero Cercado'}
                    </span>
                  </div>
                </div>

                {/* Spec Checklist */}
                <ul className="space-y-2.5 pt-2">
                  {current.specs[language].map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenBooking(current.title[language])}
                  className="flex-1 py-3.5 px-6 gold-gradient text-[#070D18] font-semibold text-xs uppercase tracking-[0.18em] rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {language === 'en'
                      ? 'SCHEDULE SITE SHOWING'
                      : 'AGENDAR VISITA AL SITIO'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
