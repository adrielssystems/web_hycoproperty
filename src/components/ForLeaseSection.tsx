'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Maximize2,
  ArrowUpRight,
  Search,
  CheckCircle2,
  Building2,
  Bath,
  Briefcase,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PropertyListing } from '@/lib/portfolioData';

interface ForLeaseSectionProps {
  listings: PropertyListing[];
  onSelectProperty: (property: PropertyListing) => void;
  onOpenBooking: (propertyTitle?: string) => void;
}

export function ForLeaseSection({
  listings,
  onSelectProperty,
  onOpenBooking,
}: ForLeaseSectionProps) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [onlyAvailable, setOnlyAvailable] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'ALL', label: { en: 'All Spaces', es: 'Todos los Espacios' } },
    { id: 'Commercial', label: { en: 'Commercial', es: 'Comercial' } },
    { id: 'Industrial', label: { en: 'Industrial & Shop', es: 'Industrial y Taller' } },
    { id: 'Multi-Tenant', label: { en: 'Multi-Tenant Campus', es: 'Complejo Multi-Nave' } },
    { id: 'Office', label: { en: 'Executive Office', es: 'Oficina Ejecutiva' } },
  ];

  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }
      if (onlyAvailable && item.status !== 'AVAILABLE') {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title[language].toLowerCase().includes(q);
        const matchAddr = item.address.toLowerCase().includes(q);
        const matchDesc = item.description[language].toLowerCase().includes(q);
        return matchTitle || matchAddr || matchDesc;
      }
      return true;
    });
  }, [listings, selectedCategory, onlyAvailable, searchQuery, language]);

  return (
    <section
      id="for-lease"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/[0.08] bg-gradient-to-b from-[#070D18] via-[#0B1526] to-[#070D18]"
    >
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F3D270]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#F3D270]">
                {language === 'en'
                  ? 'AVAILABLE UNITS FOR LEASE · INDIANAPOLIS'
                  : 'UNIDADES DISPONIBLES EN RENTA · INDIANÁPOLIS'}
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-wide leading-[1.06]">
              {language === 'en'
                ? 'Your Next Commercial Space Starts Here.'
                : 'Su Próximo Espacio Comercial Comienza Aquí.'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {language === 'en'
                ? 'At HYCO Property Management, we connect businesses with strategic commercial, industrial, and office properties across Indianapolis designed for growth, efficiency, and long-term success.'
                : 'En HYCO Property Management conectamos empresas con propiedades comerciales, industriales y de oficinas estratégicas en Indianápolis, diseñadas para el crecimiento, la eficiencia y el éxito.'}
            </p>
          </div>

          {/* Search & Availability Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'en'
                    ? 'Search address, Morris St, 79th St, 38th...'
                    : 'Buscar dirección, Morris St, 79th St...'
                }
                className="w-full glass-input pl-10 pr-4 py-2.5 rounded-lg text-xs text-white placeholder:text-slate-400"
              />
            </div>

            <button
              type="button"
              onClick={() => setOnlyAvailable(!onlyAvailable)}
              className={`px-4 py-2.5 rounded-lg text-xs font-medium tracking-wider uppercase border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                onlyAvailable
                  ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                  : 'bg-[#0B1526] border-white/10 text-slate-300 hover:border-[#D4AF37]/40'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  onlyAvailable ? 'bg-emerald-400' : 'bg-slate-500'
                }`}
              />
              <span>
                {language === 'en' ? 'Immediate Availability' : 'Disponibilidad Inmediata'}
              </span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap cursor-pointer ${
                  active
                    ? 'gold-gradient text-[#070D18] font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-[#0F1E36]/70 border border-white/10 text-slate-300 hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                {cat.label[language]}
              </button>
            );
          })}
        </div>

        {/* Architectural Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((prop, index) => {
            const isAvailable = prop.status === 'AVAILABLE';
            const priceText = typeof prop.priceDisplay === 'object' ? prop.priceDisplay[language] : prop.priceDisplay;
            const areaText = typeof prop.areaDisplay === 'object' ? prop.areaDisplay[language] : prop.areaDisplay;

            return (
              <motion.article
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header with Architectural Level Overlay */}
                  <div
                    onClick={() => onSelectProperty(prop)}
                    className="relative h-64 w-full overflow-hidden cursor-pointer"
                  >
                    <img
                      src={prop.coverImage}
                      alt={prop.title[language]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/20 to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#070D18]/85 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-mono uppercase tracking-[0.16em] text-[#F3D270]">
                        {prop.levelLabel[language]}
                      </span>

                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md border ${
                          isAvailable
                            ? 'bg-emerald-950/85 border-emerald-400/50 text-emerald-300'
                            : 'bg-amber-950/85 border-amber-400/50 text-amber-300'
                        }`}
                      >
                        {isAvailable
                          ? language === 'en'
                            ? 'FOR LEASE'
                            : 'DISPONIBLE'
                          : language === 'en'
                          ? 'LEASED / PORTFOLIO'
                          : 'ARRENDADO'}
                      </span>
                    </div>

                    {/* Bottom Price & Area Bar */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#F3D270]">
                          {prop.leaseType[language]}
                        </p>
                        <p className="font-editorial text-3xl text-white font-semibold leading-none mt-0.5">
                          {priceText}
                        </p>
                      </div>

                      <div className="px-3 py-1.5 rounded-lg bg-[#070D18]/85 border border-white/15 backdrop-blur-md text-right">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">
                          {language === 'en' ? 'AREA' : 'ÁREA'}
                        </p>
                        <p className="text-xs font-mono font-semibold text-white">
                          {areaText}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs text-[#D4AF37]">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">
                          {prop.address}, {prop.cityStateZip}
                        </span>
                      </div>

                      <h3
                        onClick={() => onSelectProperty(prop)}
                        className="font-editorial text-2xl text-white group-hover:text-[#F3D270] transition-colors cursor-pointer leading-snug"
                      >
                        {prop.title[language]}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {prop.description[language]}
                      </p>
                    </div>

                    {/* Key Specs Pill Row */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.07] text-[11px] text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{areaText}</span>
                      </div>
                      {prop.offices && (
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>
                            {prop.offices}{' '}
                            {language === 'en' ? 'Offices/Zones' : 'Oficinas/Áreas'}
                          </span>
                        </div>
                      )}
                      {prop.baths && (
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>
                            {prop.baths} {language === 'en' ? 'Bath' : 'Baño'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 pt-1">
                      {prop.highlights[language].slice(0, 3).map((hl, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-300/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-white/[0.06] flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProperty(prop)}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#0F1E36] hover:bg-[#D4AF37] text-slate-100 hover:text-[#070D18] border border-white/10 hover:border-[#D4AF37] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>
                      {language === 'en' ? 'Details & Photos' : 'Detalles y Fotos'}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(prop.title[language])}
                    className="py-2.5 px-4 rounded-lg gold-gradient text-[#070D18] text-xs font-semibold uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Inquire' : 'Consultar'}</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl gold-gradient text-[#070D18] flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl text-white">
                {language === 'en'
                  ? 'Looking for a Specific Commercial or Industrial Configuration?'
                  : '¿Busca una Configuración Comercial o Industrial Específica?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {language === 'en'
                  ? 'We manage commercial centers, I-70 industrial bays, and office suites across Indianapolis (7898 Zionsville Rd, W. Morris St, W. 79th St, and 38th St).'
                  : 'Administramos centros comerciales, naves industriales en el corredor I-70 y suites ejecutivas en Indianápolis (7898 Zionsville Rd, W. Morris St, W. 79th St y 38th St).'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking('Custom Commercial / Industrial Space Requirement')}
            className="gold-gradient text-[#070D18] font-semibold text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-sm shrink-0 hover:brightness-110 transition-all cursor-pointer"
          >
            {language === 'en' ? 'LET’S TALK BUSINESS' : 'HABLEMOS DE SU ESPACIO'}
          </button>
        </div>
      </div>
    </section>
  );
}
