'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export function CookieConsent() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('hyco_cookie_consent_v1');
      if (!consent) {
        // Delay slightly for smooth entrance
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // storage unavailable
    }
  }, []);

  // Listen for custom open event from Footer "Cookie Settings"
  useEffect(() => {
    const handleOpen = () => {
      setVisible(true);
      setShowSettings(true);
    };
    window.addEventListener('hyco-open-cookie-settings', handleOpen);
    return () => window.removeEventListener('hyco-open-cookie-settings', handleOpen);
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        'hyco_cookie_consent_v1',
        JSON.stringify({ essential: true, analytics: true, timestamp: Date.now() })
      );
    } catch {}
    setVisible(false);
    setShowSettings(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(
        'hyco_cookie_consent_v1',
        JSON.stringify({ essential: true, analytics: false, timestamp: Date.now() })
      );
    } catch {}
    setVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    try {
      localStorage.setItem(
        'hyco_cookie_consent_v1',
        JSON.stringify({
          essential: true,
          analytics: analyticsEnabled,
          timestamp: Date.now(),
        })
      );
    } catch {}
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        aria-label="Cookie Consent"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xl z-50 glass-panel rounded-2xl border border-[#D4AF37]/40 p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-[#070D18]/95 backdrop-blur-2xl"
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg gold-gradient text-[#070D18] flex items-center justify-center shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F3D270]">
                {language === 'en'
                  ? 'INDIANAPOLIS HQ · PRIVACY NOTICE'
                  : 'SEDE INDIANÁPOLIS · AVISO DE PRIVACIDAD'}
              </p>
              <h3 className="font-editorial text-lg text-white font-semibold leading-tight">
                {language === 'en'
                  ? 'Cookie & Data Preferences'
                  : 'Preferencias de Cookies y Datos'}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleEssentialOnly}
            aria-label="Close banner with essential cookies"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
          {language === 'en' ? (
            <>
              HYCO Property Management uses strictly necessary cookies to ensure secure
              sessions and retain your bilingual preferences. We never sell personal data.
              Read our{' '}
              <Link href="/cookies" className="text-[#F3D270] underline hover:text-white">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-[#F3D270] underline hover:text-white">
                Privacy Policy
              </Link>
              .
            </>
          ) : (
            <>
              HYCO Property Management utiliza cookies estrictamente necesarias para
              garantizar sesiones seguras y recordar su idioma. Jamás vendemos datos.
              Consulte nuestra{' '}
              <Link href="/cookies" className="text-[#F3D270] underline hover:text-white">
                Política de Cookies
              </Link>{' '}
              y{' '}
              <Link href="/privacy" className="text-[#F3D270] underline hover:text-white">
                Política de Privacidad
              </Link>
              .
            </>
          )}
        </p>

        {showSettings && (
          <div className="p-3.5 rounded-xl bg-[#0B1526] border border-white/10 space-y-3 mb-4 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">
                  {language === 'en'
                    ? 'Strictly Necessary (Essential)'
                    : 'Estrictamente Necesarias (Esenciales)'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {language === 'en'
                    ? 'Session security, language retention, CSRF defense'
                    : 'Seguridad de sesión, persistencia de idioma, protección CSRF'}
                </p>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                {language === 'en' ? 'REQUIRED' : 'REQUERIDO'}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <div>
                <p className="font-semibold text-white">
                  {language === 'en'
                    ? 'Architecture & Performance Telemetry'
                    : 'Telemetría de Rendimiento y Arquitectura'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {language === 'en'
                    ? 'Anonymous usage to improve portfolio browsing'
                    : 'Uso anónimo para optimizar la vitrina de naves'}
                </p>
              </div>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="w-4 h-4 accent-[#D4AF37] rounded cursor-pointer"
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-end gap-2 pt-1 border-t border-white/10">
          {!showSettings ? (
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="px-3.5 py-2 text-xs text-slate-300 hover:text-white font-medium cursor-pointer"
            >
              {language === 'en' ? 'Customize' : 'Personalizar'}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSavePreferences}
              className="px-4 py-2 rounded-lg bg-[#0F1E36] border border-white/20 text-xs font-semibold text-white hover:border-[#D4AF37] cursor-pointer"
            >
              {language === 'en' ? 'Save Choices' : 'Guardar Preferencias'}
            </button>
          )}

          <button
            type="button"
            onClick={handleEssentialOnly}
            className="px-3.5 py-2 rounded-lg bg-[#0B1526] border border-white/15 hover:border-[#D4AF37]/50 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
          >
            {language === 'en' ? 'Essential Only' : 'Solo Esenciales'}
          </button>

          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded-lg gold-gradient text-[#070D18] text-xs font-semibold uppercase tracking-wider hover:brightness-110 shadow-sm cursor-pointer"
          >
            {language === 'en' ? 'Accept All' : 'Aceptar Todo'}
          </button>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}

