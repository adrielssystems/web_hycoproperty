'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  User,
  Menu,
  X,
  ArrowUpRight,
  Calendar,
  Building2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenBooking: (propertyTitle?: string) => void;
}

export function Navbar({
  activeSection,
  onSelectSection,
  onOpenBooking,
}: NavbarProps) {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'hero',
      label: { en: 'Showcase', es: 'Vitrina' },
    },
    {
      id: 'for-lease',
      label: { en: 'For Lease', es: 'En Renta' },
    },
    {
      id: 'services',
      label: { en: 'Services', es: 'Servicios' },
    },
    {
      id: 'architecture',
      label: { en: 'Campus & Specs', es: 'Complejos y Ficha' },
    },
    {
      id: 'about',
      label: { en: 'About Us', es: 'Nosotros' },
    },
    {
      id: 'contact',
      label: { en: 'Contact', es: 'Contacto' },
    },
  ];

  const handleNavClick = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    onSelectSection(id);
    setMobileMenuOpen(false);

    if (typeof window === 'undefined') return;

    // If currently on a subpage (e.g. /terms, /privacy), redirect to home with hash
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      try {
        window.history.replaceState(null, '', '#hero');
      } catch {}
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      try {
        window.history.replaceState(null, '', `#${id}`);
      } catch {}
    } else {
      const target = document.querySelector(`[id="${id}"]`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#070D18]/92 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
          : 'bg-gradient-to-b from-[#070D18]/95 via-[#070D18]/70 to-transparent'
      }`}
    >
      {/* Top Architectural Utility Bar (Aurelia Reference Style) */}
      <div className="border-b border-white/[0.07] bg-[#070D18]/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-9 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-slate-300/80">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
            <a
              href="tel:+13176750041"
              className="flex items-center gap-1.5 hover:text-[#F3D270] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>+1 (317) 675-0041</span>
            </a>
            <span className="text-white/15 hidden sm:inline">|</span>
            <a
              href="mailto:info@hycoprop.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#F3D270] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>info@hycoprop.com</span>
            </a>
            <span className="text-white/15 hidden lg:inline">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>7898 Zionsville Rd, Indianapolis, IN 46268</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            {/* Bilingual Pill Toggle [ EN | ES ] */}
            <div className="flex items-center bg-[#0B1526] border border-white/10 rounded-full p-0.5">
              <Globe className="w-3 h-3 text-[#D4AF37] ml-2 mr-1 hidden sm:inline" />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider transition-all ${
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
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider transition-all ${
                  language === 'es'
                    ? 'bg-[#D4AF37] text-[#070D18] shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            <span className="text-white/15 hidden md:inline">|</span>

            <a
              href={process.env.NEXT_PUBLIC_CRM_URL || 'https://www.hycopropertymanagement.com/profile/'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-[#F3D270] transition-colors font-medium text-[10px] sm:text-xs"
            >
              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">{language === 'en' ? 'PORTAL LOGIN' : 'ACCESO PORTAL'}</span>
              <span className="sm:hidden">{language === 'en' ? 'PORTAL' : 'PORTAL'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Official High-Resolution Logo (2.5:1 Natural Ratio) */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick('hero', e)}
          className="flex items-center gap-3 text-left group focus:outline-none shrink-0 cursor-pointer"
        >
          <img
            src="/hyco_brand_logo.png"
            alt="HYCO Property Management"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Center Architectural Menu Links with Gold Active Underline */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`relative py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300/75 hover:text-[#F3D270]'
                }`}
              >
                {item.label[language]}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-gradient-to-r from-[#F3D270] via-[#D4AF37] to-[#B89222] shadow-[0_0_12px_rgba(212,175,55,0.8)]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button ("BOOK A VIEWING") & Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="gold-gradient text-[#070D18] font-semibold text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] px-3 sm:px-6 py-2.5 sm:py-3 rounded-sm shadow-[0_10px_30px_rgba(212,175,55,0.28)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'BOOK A VIEWING' : 'AGENDAR VISITA'}
            </span>
            <span className="sm:hidden">
              {language === 'en' ? 'BOOK' : 'AGENDAR'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2.5 rounded-sm border border-white/15 bg-[#0B1526]/80 text-slate-200 hover:border-[#D4AF37] hover:text-[#F3D270] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Architectural Slide-Down Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="bg-[#070D18]/98 backdrop-blur-2xl border-b border-[#D4AF37]/30 px-6 py-8 shadow-2xl"
          >
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
                  {language === 'en' ? 'Architectural Navigation' : 'Navegación Principal'}
                </p>
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, idx) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(item.id, e)}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white/5 text-left group transition-colors cursor-pointer"
                    >
                      <span className="text-sm uppercase tracking-[0.16em] text-slate-100 group-hover:text-[#F3D270]">
                        {item.label[language]}
                      </span>
                      <span className="text-xs font-mono text-[#D4AF37]/70">
                        0{idx + 1}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
                  {language === 'en' ? 'Featured Indianapolis Portfolio' : 'Portafolio Destacado en Indianápolis'}
                </p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <button
                    type="button"
                    onClick={() => handleNavClick('for-lease')}
                    className="w-full text-left p-3 rounded-lg bg-[#0B1526] border border-white/10 hover:border-[#D4AF37]/50 transition-all flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-white">
                        {language === 'en'
                          ? '5645 W 79th St · Commercial'
                          : '5645 W 79th St · Comercial'}
                      </p>
                      <p className="text-slate-400">
                        {language === 'en'
                          ? '2,600 Sq Ft · $19.50 SF/Year'
                          : '2,600 Pies² · $19.50 Pie²/Año'}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('for-lease')}
                    className="w-full text-left p-3 rounded-lg bg-[#0B1526] border border-white/10 hover:border-[#D4AF37]/50 transition-all flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-white">
                        {language === 'en'
                          ? '4210–4190 W Morris St · I-70 Hub'
                          : '4210–4190 W Morris St · Corredor I-70'}
                      </p>
                      <p className="text-slate-400">
                        {language === 'en'
                          ? '3 Shop Buildings · 4,000 SF Each · $14/SF'
                          : '3 Naves / Talleres · 4,000 Pies² c/u · $14/Pie²'}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('for-lease')}
                    className="w-full text-left p-3 rounded-lg bg-[#0B1526] border border-white/10 hover:border-[#D4AF37]/50 transition-all flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-white">
                        {language === 'en'
                          ? 'Prime 38th Street · Office Suite'
                          : 'Prime 38th Street · Suite de Oficinas'}
                      </p>
                      <p className="text-slate-400">
                        {language === 'en'
                          ? '1,350 Sq Ft · Open & Private Office'
                          : '1,350 Pies² · Oficina Abierta y Privada'}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
                  {language === 'en' ? 'Headquarters & Direct Desk' : 'Sede Central y Atención Directa'}
                </p>
                <div className="p-4 rounded-xl bg-[#0B1526] border border-white/10 space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">HYCO Property Management</p>
                      <p className="text-slate-400">7898 Zionsville Rd, Indianapolis, IN 46268</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <a href="tel:+13176750041" className="hover:text-[#F3D270]">
                      +1 (317) 675-0041
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <a href="mailto:info@hycoprop.com" className="hover:text-[#F3D270]">
                      info@hycoprop.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

