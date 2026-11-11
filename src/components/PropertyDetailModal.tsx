'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Phone,
  Calendar,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PropertyListing } from '@/lib/portfolioData';

interface PropertyDetailModalProps {
  property: PropertyListing | null;
  onClose: () => void;
  onBookViewing: (propertyTitle: string) => void;
}

export function PropertyDetailModal({
  property,
  onClose,
  onBookViewing,
}: PropertyDetailModalProps) {
  const { language } = useLanguage();
  const [imgIdx, setImgIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const images = property.gallery.length > 0 ? property.gallery : [property.coverImage];
  const currentImg = images[imgIdx % images.length];

  const priceText =
    typeof property.priceDisplay === 'object'
      ? property.priceDisplay[language]
      : property.priceDisplay;
  const areaText =
    typeof property.areaDisplay === 'object'
      ? property.areaDisplay[language]
      : property.areaDisplay;
  const statusLabel =
    property.status === 'AVAILABLE'
      ? language === 'en'
        ? 'AVAILABLE'
        : 'DISPONIBLE'
      : property.status === 'UNDER_OFFER'
      ? language === 'en'
        ? 'UNDER OFFER'
        : 'EN OFERTA'
      : language === 'en'
      ? 'LEASED'
      : 'ARRENDADO';

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto glass-panel rounded-2xl border border-[#D4AF37]/40 shadow-2xl"
        >
          {/* Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#070D18]/95 backdrop-blur-md border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F3D270]">
                {property.code} · {property.levelLabel[language]}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white">
                {property.title[language]}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3 py-2 rounded-lg bg-[#0B1526] border border-white/15 hover:border-[#D4AF37] text-xs text-slate-200 flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{language === 'en' ? 'Copied' : 'Copiado'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{language === 'en' ? 'Share' : 'Compartir'}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg bg-[#0B1526] border border-white/15 text-slate-300 hover:text-white hover:border-[#D4AF37] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Gallery (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-[#070D18] border border-white/10">
                <img
                  src={currentImg}
                  alt={property.title[language]}
                  className="w-full h-full object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setImgIdx((prev) => (prev - 1 + images.length) % images.length)
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#070D18]/85 border border-white/20 text-white hover:border-[#D4AF37] cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setImgIdx((prev) => (prev + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#070D18]/85 border border-white/20 text-white hover:border-[#D4AF37] cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setImgIdx(i)}
                      className={`relative h-16 w-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        i === imgIdx % images.length
                          ? 'border-[#D4AF37] scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                  {language === 'en' ? 'PROPERTY OVERVIEW' : 'DESCRIPCIÓN DE LA PROPIEDAD'}
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed font-light">
                  {property.description[language]}
                </p>
              </div>
            </div>

            {/* Right Specs & Highlights (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-[#070D18]/90 border border-[#D4AF37]/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-slate-400">
                      {property.leaseType[language]}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                      {statusLabel}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <p className="font-editorial text-4xl text-white font-semibold">
                      {priceText}
                    </p>
                    <p className="text-sm font-mono text-[#F3D270]">
                      {areaText}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {property.priceSubtext[language]}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-200 pt-2 border-t border-white/10">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>
                      {property.address}, {property.cityStateZip}
                    </span>
                  </div>
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                    {language === 'en' ? 'SPACE HIGHLIGHTS' : 'CARACTERÍSTICAS DESTACADAS'}
                  </h4>
                  <ul className="space-y-2.5">
                    {property.highlights[language].map((hl, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    const title = property.title[language];
                    onClose();
                    onBookViewing(title);
                  }}
                  className="w-full py-3.5 px-6 gold-gradient text-[#070D18] font-semibold text-xs uppercase tracking-[0.18em] rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {language === 'en'
                      ? 'REQUEST INFO / SCHEDULE SHOWING'
                      : 'SOLICITAR INFORMACIÓN / AGENDAR VISITA'}
                  </span>
                </button>

                <a
                  href="tel:+13176750041"
                  className="w-full py-3 px-6 rounded-sm bg-[#070D18] border border-white/15 hover:border-[#D4AF37] text-center text-xs uppercase tracking-[0.18em] text-white font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>+1 (317) 675-0041</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

