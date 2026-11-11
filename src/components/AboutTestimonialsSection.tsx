'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  MessageSquareQuote,
  PhoneCall,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Globe,
} from 'lucide-react';
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from './SocialIcons';
import { useLanguage } from '@/context/LanguageContext';
import { CLIENT_TESTIMONIALS, INSTAGRAM_POSTS } from '@/lib/portfolioData';

interface AboutTestimonialsSectionProps {
  onOpenBooking: (topic?: string) => void;
}

export function AboutTestimonialsSection({
  onOpenBooking,
}: AboutTestimonialsSectionProps) {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/[0.08] bg-[#070D18]"
    >
      <div className="max-w-[1440px] mx-auto space-y-24">
        {/* Part 1: About Us & Tailored Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Story & Mission (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F3D270]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#F3D270]">
                {language === 'en'
                  ? 'ABOUT US · LOCALLY OWNED SINCE 2018'
                  : 'NOSOTROS · PROPIEDAD LOCAL DESDE 2018'}
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.06]">
              {language === 'en'
                ? 'Tailored Management for Your Unique Property'
                : 'Administración a la Medida para su Propiedad Única'}
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light">
              {language === 'en'
                ? 'Since 2018, HYCO Property Management (HPM) has been locally owned and proudly serving Indianapolis and surrounding communities. We specialize in property management built on attention to detail, clear communication, and efficient systems—protecting your investment and maximizing its potential through personalized, reliable service.'
                : 'Desde 2018, HYCO Property Management (HPM) es una empresa de propiedad local que sirve con orgullo a Indianápolis y las comunidades circundantes. Nos especializamos en la administración de propiedades basada en la atención al detalle, la comunicación clara y sistemas eficientes, protegiendo su inversión y maximizando su potencial mediante un servicio personalizado y confiable.'}
            </p>

            <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed font-light">
              {language === 'en'
                ? 'We offer competitive pricing paired with customized, hands-on management, delivering real value through direct communication, proactive solutions, and a team that treats your property like their own.'
                : 'Ofrecemos precios competitivos combinados con una administración práctica y personalizada, entregando valor real a través de comunicación directa, soluciones proactivas y un equipo que cuida su propiedad como si fuera propia.'}
            </p>

            {/* Key Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                {
                  en: 'Commercial, Industrial & Residential Portfolio Oversight',
                  es: 'Supervisión de Portafolios Comerciales, Industriales y Residenciales',
                },
                {
                  en: 'Full-Service & Agent-Friendly Operations in Indianapolis',
                  es: 'Servicio Integral y Colaboración Abierta con Agentes (Agent-Friendly)',
                },
                {
                  en: 'Bilingual Executive Team (Native English & Español)',
                  es: 'Equipo Ejecutivo Bilingüe (Atención en Inglés y Español)',
                },
                {
                  en: 'Transparent Monthly & Year-End Financial Reporting',
                  es: 'Reportes Financieros Mensuales y Anuales con Total Transparencia',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#0B1526] border border-white/[0.07]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    {item[language]}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking('Schedule Property Owner Consultation')}
                className="gold-gradient text-[#070D18] font-semibold text-xs uppercase tracking-[0.18em] px-7 py-3.5 rounded-sm hover:brightness-110 transition-all cursor-pointer"
              >
                {language === 'en'
                  ? 'SCHEDULE A CONSULTATION'
                  : 'AGENDAR UNA CONSULTA'}
              </button>

              <a
                href="tel:+13176750041"
                className="px-6 py-3.5 rounded-sm border border-white/20 bg-[#0B1526] hover:border-[#D4AF37] text-white text-xs uppercase tracking-[0.18em] font-medium flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{language === 'en' ? 'CALL US: +1 (317) 675-0041' : 'LLÁMENOS: +1 (317) 675-0041'}</span>
              </a>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 space-y-6 relative overflow-hidden">
              <div className="relative h-60 rounded-xl overflow-hidden">
                <img
                  src="/properties/morris-aerial-2.jpg"
                  alt="HYCO Property Management Portfolio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[#070D18]/90 border border-[#D4AF37]/40 text-[10px] font-mono uppercase tracking-widest text-[#F3D270]">
                    {language === 'en'
                      ? '7898 ZIONSVILLE RD · INDIANAPOLIS HQ'
                      : '7898 ZIONSVILLE RD · SEDE INDIANÁPOLIS'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#070D18]/80 border border-white/[0.08]">
                  <Award className="w-5 h-5 text-[#D4AF37] mb-2" />
                  <p className="font-editorial text-3xl text-white font-semibold">
                    2018
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {language === 'en'
                      ? 'Locally Owned in Indianapolis'
                      : 'Sirviendo a Indianápolis desde 2018'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070D18]/80 border border-white/[0.08]">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2" />
                  <p className="font-editorial text-3xl text-white font-semibold">
                    100%
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {language === 'en'
                      ? 'Full-Service & Agent-Friendly'
                      : 'Gestión Integral y Transparente'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070D18]/80 border border-white/[0.08] col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#D4AF37]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white">
                        {language === 'en'
                          ? 'English & Español Native Support'
                          : 'Atención Nativa en Inglés y Español'}
                      </p>
                      <p className="text-xs text-slate-400">
                        {language === 'en'
                          ? 'Direct communication with owners, tenants, and brokers'
                          : 'Comunicación directa con propietarios, inquilinos y corredores'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Client Testimonials */}
        <div className="space-y-10 pt-8 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-[#D4AF37]">
              {language === 'en' ? 'CLIENTS TESTIMONIAL' : 'TESTIMONIOS DE CLIENTES'}
            </p>
            <h3 className="font-editorial text-4xl sm:text-5xl text-white font-normal">
              {language === 'en' ? 'Our Customer Feedback' : 'Lo Que Dicen Nuestros Clientes'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              {language === 'en'
                ? 'Discover what our clients have to say about their journey with us, from the quality of our services to the support they received every step of the way.'
                : 'Descubra la experiencia de nuestros propietarios e inquilinos comerciales con la calidad y respaldo de HYCO Property Management.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <MessageSquareQuote className="w-8 h-8 text-[#D4AF37]/80" />
                  <p className="text-sm text-slate-200 leading-relaxed font-light italic">
                    “{item.quote[language]}”
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <p className="font-editorial text-xl text-white font-semibold">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#F3D270]/85">{item.role[language]}</p>
                  </div>
                  <div className="flex text-[#D4AF37] text-xs">★★★★★</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 3: Instagram Feed (@hycoprop) */}
        <div className="space-y-10 pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#F3D270]">
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>@hycoprop · INDIANAPOLIS</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white">
                {language === 'en'
                  ? 'Latest Instagram Posts & Reels'
                  : 'Últimas Publicaciones en Instagram (@hycoprop)'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {language === 'en'
                  ? 'Commercial & Residential Property Management in Indianapolis · Full-Service | Agent-Friendly | Español | English'
                  : 'Administración de Propiedades Comerciales y Residenciales en Indianápolis · Servicio Integral | Colaboración con Agentes | Español | English'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/hycoprop/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#0B1526] border border-[#D4AF37]/40 hover:border-[#F3D270] text-xs uppercase tracking-wider text-[#F3D270] font-semibold flex items-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>@hycoprop</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.facebook.com/Hycoprop"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#0B1526] border border-white/15 hover:border-[#D4AF37]/40 text-xs uppercase tracking-wider text-slate-200 font-semibold flex items-center gap-2 transition-all"
              >
                <Facebook className="w-4 h-4 text-[#D4AF37]" />
                <span>Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl overflow-hidden group block"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#070D18]/85 border border-[#D4AF37]/40 text-[10px] font-mono uppercase tracking-wider text-[#F3D270]">
                    {post.tag[language]}
                  </span>
                </div>
                <div className="p-4 flex items-start justify-between gap-3">
                  <p className="text-xs text-slate-200 line-clamp-2 group-hover:text-[#F3D270] transition-colors">
                    {post.caption[language]}
                  </p>
                  <ExternalLink className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
