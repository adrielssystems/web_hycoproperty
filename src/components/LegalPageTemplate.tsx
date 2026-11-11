'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, MapPin, Scale, CheckCircle2, ShieldCheck, Lock, Cookie } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LegalDocument } from '@/lib/legalContent';

interface LegalPageTemplateProps {
  document: LegalDocument;
  badgeLabel: { en: string; es: string };
  iconName?: 'scale' | 'shield' | 'lock' | 'cookie';
}

export function LegalPageTemplate({
  document,
  badgeLabel,
  iconName = 'scale',
}: LegalPageTemplateProps) {
  const { language, setLanguage } = useLanguage();

  const Icon =
    iconName === 'cookie'
      ? Cookie
      : iconName === 'shield'
      ? ShieldCheck
      : iconName === 'lock'
      ? Lock
      : Scale;

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 selection:bg-[#D4AF37] selection:text-[#070D18]">
      {/* Top Fixed Header with Back Link & Bilingual Switcher */}
      <header className="sticky top-0 z-40 bg-[#070D18]/95 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 text-slate-300 hover:text-[#F3D270] transition-colors group"
          >
            <div className="p-2 rounded-lg bg-[#0B1526] border border-white/15 group-hover:border-[#D4AF37]">
              <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="hidden sm:block">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                {language === 'en' ? 'RETURN TO MAIN SITE' : 'VOLVER AL SITIO PRINCIPAL'}
              </span>
              <p className="font-editorial text-sm font-semibold text-white">
                HYCO Property Management
              </p>
            </div>
          </Link>

          <Link href="/">
            <img
              src="/hyco_brand_logo.png"
              alt="HYCO Property Management"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Bilingual Switcher */}
          <div className="flex items-center bg-[#0B1526] border border-white/10 rounded-full p-0.5">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#D4AF37] text-[#070D18] shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                language === 'es'
                  ? 'bg-[#D4AF37] text-[#070D18] shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      {/* Main Document Body */}
      <main className="max-w-[1000px] mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-12">
        {/* Document Header Banner */}
        <div className="space-y-5 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35">
            <Icon className="w-3.5 h-3.5 text-[#F3D270]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#F3D270]">
              {badgeLabel[language]}
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.08]">
            {document.title[language]}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            {document.subtitle[language]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs font-mono text-slate-400">
            <div className="p-3 rounded-lg bg-[#0B1526] border border-white/[0.06]">
              <span className="text-[10px] uppercase text-[#D4AF37] block">
                {language === 'en' ? 'JURISDICTION' : 'JURISDICCIÓN'}
              </span>
              <span className="text-white mt-0.5 block">{document.jurisdiction[language]}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0B1526] border border-white/[0.06]">
              <span className="text-[10px] uppercase text-[#D4AF37] block">
                {language === 'en' ? 'EFFECTIVE DATE' : 'FECHA DE VIGENCIA'}
              </span>
              <span className="text-white mt-0.5 block">{document.effectiveDate[language]}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0B1526] border border-white/[0.06]">
              <span className="text-[10px] uppercase text-[#D4AF37] block">
                {language === 'en' ? 'LAST REVIEWED' : 'ÚLTIMA REVISIÓN'}
              </span>
              <span className="text-white mt-0.5 block">{document.lastUpdated[language]}</span>
            </div>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="space-y-12">
          {document.sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="glass-card rounded-2xl p-6 sm:p-10 space-y-5 border border-white/[0.08]"
            >
              <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal border-b border-white/10 pb-3">
                {section.title[language]}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-300/95 leading-relaxed font-light">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx}>{p[language]}</p>
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-3 pt-3 border-t border-white/[0.06]">
                  {section.bulletPoints.map((bp, bidx) => (
                    <li
                      key={bidx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{bp[language]}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {/* Corporate Headquarters Notice Box */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/35 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0F1E36] border border-[#D4AF37]/40 flex items-center justify-center text-[#F3D270] shrink-0 mt-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                {language === 'en'
                  ? 'OFFICIAL LEGAL CORRESPONDENCE'
                  : 'CORRESPONDENCIA LEGAL OFICIAL'}
              </p>
              <h3 className="font-editorial text-2xl text-white mt-0.5">
                HYCO Property Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                7898 Zionsville Rd, Indianapolis, IN 46268 · Marion County, USA
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Phone: +1 (317) 675-0041 · Email: info@hycoprop.com
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="px-6 py-3 rounded-sm gold-gradient text-[#070D18] text-xs font-semibold uppercase tracking-[0.18em] hover:brightness-110 transition-all shrink-0"
          >
            {language === 'en' ? 'RETURN TO HOMEPAGE' : 'VOLVER AL INICIO'}
          </Link>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs text-slate-500">
        <p>© 2026 HYCO Property Management. All rights reserved.</p>
        <p className="mt-1 text-[11px] font-mono uppercase tracking-wider text-slate-400">
          7898 Zionsville Rd, Indianapolis, IN 46268 · Marion County Jurisdiction
        </p>
      </footer>
    </div>
  );
}
