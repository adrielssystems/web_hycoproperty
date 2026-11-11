'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Scale, Lock, Cookie } from 'lucide-react';
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from './SocialIcons';
import { useLanguage } from '@/context/LanguageContext';

interface FooterProps {
  onSelectSection: (sectionId: string) => void;
}

export function Footer({ onSelectSection }: FooterProps) {
  const { language } = useLanguage();

  const scrollTo = (id: string) => {
    onSelectSection(id);
    if (typeof window === 'undefined') return;

    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('hyco-open-cookie-settings'));
    }
  };

  const coreServices = [
    {
      en: 'Tenant Screening & Placement',
      es: 'Evaluación y Colocación de Inquilinos',
    },
    {
      en: 'Lease Administration & Renewals',
      es: 'Administración de Contratos y Renovaciones',
    },
    {
      en: 'Rent Collection & Financial Reporting',
      es: 'Cobro de Renta y Reportes Financieros',
    },
    {
      en: 'Maintenance & Emergency Repairs',
      es: 'Mantenimiento y Reparaciones de Emergencia',
    },
    {
      en: 'Construction & Remodeling Management',
      es: 'Gestión de Construcción y Remodelación',
    },
    {
      en: 'Inspections & Legal Compliance',
      es: 'Inspecciones y Cumplimiento Normativo',
    },
    {
      en: 'Vendor & Contractor Coordination',
      es: 'Coordinación de Proveedores y Contratistas',
    },
    {
      en: 'Commercial & Industrial Solutions',
      es: 'Soluciones Comerciales e Industriales',
    },
  ];

  return (
    <footer className="bg-[#050912] border-t border-white/10 text-slate-400">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Col 1: Brand & Mission (4 Cols) */}
        <div className="lg:col-span-4 space-y-5">
          <Link href="/">
            <img
              src="/hyco_brand_logo.png"
              alt="HYCO Property Management"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed font-light max-w-sm">
            {language === 'en'
              ? 'Locally owned and proudly serving Indianapolis and surrounding communities since 2018. Committed to protecting and growing your property’s value.'
              : 'De propiedad local y sirviendo con orgullo a Indianápolis y comunidades circundantes desde 2018. Comprometidos con proteger y hacer crecer el valor de su propiedad.'}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://www.instagram.com/hycoprop/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-[#0B1526] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-[#F3D270] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/Hycoprop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-[#0B1526] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-[#F3D270] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation (2 Cols) */}
        <div className="lg:col-span-2 space-y-3">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
            {language === 'en' ? 'Navigation' : 'Navegación'}
          </p>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button
                type="button"
                onClick={() => scrollTo('hero')}
                className="hover:text-[#F3D270] transition-colors cursor-pointer text-left"
              >
                {language === 'en' ? 'Home & Showcase' : 'Inicio y Vitrina'}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo('for-lease')}
                className="hover:text-[#F3D270] transition-colors cursor-pointer text-left"
              >
                {language === 'en' ? 'Properties For Lease' : 'Propiedades en Renta'}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo('services')}
                className="hover:text-[#F3D270] transition-colors cursor-pointer text-left"
              >
                {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo('architecture')}
                className="hover:text-[#F3D270] transition-colors cursor-pointer text-left"
              >
                {language === 'en' ? 'W. Morris St Campus' : 'Complejo W. Morris St'}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="hover:text-[#F3D270] transition-colors cursor-pointer text-left"
              >
                {language === 'en' ? 'About Us' : 'Nosotros'}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="hover:text-[#F3D270] transition-colors cursor-pointer text-left"
              >
                {language === 'en' ? 'Contact Us' : 'Contacto'}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Core Services (3 Cols) */}
        <div className="lg:col-span-3 space-y-3">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
            {language === 'en' ? 'Core Services' : 'Servicios Principales'}
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            {coreServices.map((service, idx) => (
              <li key={idx} className="hover:text-[#F3D270] transition-colors">
                {service[language]}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Indianapolis Office & Legal Links (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
            {language === 'en' ? 'Indianapolis Office' : 'Oficina en Indianápolis'}
          </p>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>7898 Zionsville Rd, Indianapolis, IN 46268, United States</span>
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

          {/* Legal Pages Navigation List */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
              {language === 'en' ? 'Legal & Compliance' : 'Legal y Cumplimiento'}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#F3D270] transition-colors flex items-center gap-1.5"
                >
                  <Scale className="w-3 h-3 text-[#D4AF37]" />
                  <span>
                    {language === 'en' ? 'Terms of Service' : 'Términos de Servicio'}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#F3D270] transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3 h-3 text-[#D4AF37]" />
                  <span>
                    {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-[#F3D270] transition-colors flex items-center gap-1.5"
                >
                  <Lock className="w-3 h-3 text-[#D4AF37]" />
                  <span>
                    {language === 'en'
                      ? 'Security Standards'
                      : 'Seguridad de la Información'}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-[#F3D270] transition-colors flex items-center gap-1.5"
                >
                  <Cookie className="w-3 h-3 text-[#D4AF37]" />
                  <span>
                    {language === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
                  </span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookieSettings}
                  className="hover:text-[#F3D270] transition-colors text-slate-400 text-left cursor-pointer text-xs"
                >
                  {language === 'en'
                    ? 'Manage Cookie Preferences'
                    : 'Gestionar Preferencias de Cookies'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/[0.06] py-6 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 HYCO Property Management. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono uppercase tracking-wider text-slate-400">
            <span>Indianapolis, IN 46268</span>
            <span>·</span>
            <span>Marion County Jurisdiction</span>
            <span>·</span>
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
