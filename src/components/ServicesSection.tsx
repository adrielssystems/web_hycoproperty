'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  FileSignature,
  BarChart3,
  Wrench,
  HardHat,
  ShieldCheck,
  Handshake,
  Building2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { OFFICIAL_SERVICES } from '@/lib/portfolioData';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UserCheck,
  FileSignature,
  BarChart3,
  Wrench,
  HardHat,
  ShieldCheck,
  Handshake,
  Building2,
};

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const { language } = useLanguage();

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/[0.08] bg-[#070D18] overflow-hidden"
    >
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto space-y-14">
        {/* Header from Official Legacy Services & Home Page */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F3D270]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#F3D270]">
                {language === 'en'
                  ? 'OUR SERVICES · FULL-SERVICE SOLUTIONS'
                  : 'NUESTROS SERVICIOS · GESTIÓN INTEGRAL'}
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.06]">
              {language === 'en'
                ? 'HYCO Property Management Services'
                : 'Servicios de Administración HYCO'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {language === 'en'
                ? 'At HYCO Property Management, we offer full-service solutions designed to protect your property, simplify ownership, and maximize returns. Whether you own residential or commercial properties, our experienced team handles every detail with care and professionalism.'
                : 'En HYCO Property Management ofrecemos soluciones integrales diseñadas para proteger su propiedad, simplificar la titularidad y maximizar el retorno de inversión. Ya sea que posea propiedades residenciales, comerciales o industriales, nuestro equipo cuida cada detalle con profesionalismo.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking('Full-Service Property Management Consultation')}
            className="self-start lg:self-auto px-6 py-3.5 border border-[#D4AF37]/50 bg-[#0B1526] hover:bg-[#D4AF37] text-[#F3D270] hover:text-[#070D18] text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <span>
              {language === 'en'
                ? 'REQUEST MANAGEMENT PROPOSAL'
                : 'SOLICITAR PROPUESTA DE GESTIÓN'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Official Services Architectural Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICIAL_SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.iconName] || Building2;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => onOpenBooking(srv.title[language])}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                {/* Top Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#0F1E36] border border-[#D4AF37]/30 flex items-center justify-center text-[#F3D270] group-hover:bg-[#D4AF37] group-hover:text-[#070D18] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-editorial text-3xl text-white/20 group-hover:text-[#D4AF37]/60 transition-colors">
                      {srv.number}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                      {srv.tag[language]}
                    </p>
                    <h3 className="font-editorial text-2xl text-white group-hover:text-[#F3D270] transition-colors leading-snug">
                      {srv.title[language]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed font-light">
                      {srv.description[language]}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-400 group-hover:text-[#F3D270] transition-colors">
                  <span>
                    {language === 'en' ? 'Schedule Consultation' : 'Agendar Consulta'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

