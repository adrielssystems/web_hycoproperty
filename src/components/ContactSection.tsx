'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from './SocialIcons';
import { useLanguage } from '@/context/LanguageContext';

export function ContactSection() {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('5645 W 79th St');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          interest,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Submission failed');
      } else {
        setSubmittedRef(data.reference || 'HYCO-INQ');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
    } catch {
      setErrorMsg(
        language === 'en'
          ? 'Connection error. Please call us directly at +1 (317) 675-0041.'
          : 'Error de conexión. Por favor llámenos al +1 (317) 675-0041.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/[0.08] bg-gradient-to-b from-[#070D18] via-[#0B1526] to-[#070D18]"
    >
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F3D270]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#F3D270]">
              {language === 'en'
                ? 'CONTACT US · SCHEDULE A CONSULTATION'
                : 'CONTÁCTENOS · AGENDE UNA CONSULTA'}
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.06]">
            {language === 'en'
              ? 'Have Questions About Our Property Management Services?'
              : '¿Tiene Preguntas Sobre Nuestros Servicios de Administración?'}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {language === 'en'
              ? 'Contact us today to discover how we can tailor our services to meet your unique commercial, industrial, or residential property needs across Indianapolis.'
              : 'Contáctenos hoy mismo para descubrir cómo podemos adaptar nuestros servicios a las necesidades únicas de su propiedad comercial, industrial o residencial en Indianápolis.'}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-editorial text-2xl text-white border-b border-white/10 pb-3">
                {language === 'en'
                  ? 'Direct Executive Desk'
                  : 'Atención Ejecutiva Directa'}
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href="tel:+13176750041"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#070D18]/80 border border-white/[0.07] hover:border-[#D4AF37]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[#D4AF37]/30 flex items-center justify-center text-[#F3D270] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {language === 'en' ? 'MAIN OFFICE PHONE' : 'TELÉFONO OFICINA PRINCIPAL'}
                    </p>
                    <p className="text-base font-semibold text-white group-hover:text-[#F3D270]">
                      +1 (317) 675-0041
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/13176750041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#070D18]/80 border border-white/[0.07] hover:border-[#D4AF37]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[#D4AF37]/30 flex items-center justify-center text-[#F3D270] shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {language === 'en' ? 'WHATSAPP DIRECT DESK' : 'ATENCIÓN DIRECTA POR WHATSAPP'}
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#F3D270]">
                      +1 (317) 675-0041 · +1 (463) 254-8703
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@hycoprop.com"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#070D18]/80 border border-white/[0.07] hover:border-[#D4AF37]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[#D4AF37]/30 flex items-center justify-center text-[#F3D270] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {language === 'en' ? 'OFFICIAL EMAIL' : 'CORREO ELECTRÓNICO OFICIAL'}
                    </p>
                    <p className="text-base font-semibold text-white group-hover:text-[#F3D270]">
                      info@hycoprop.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#070D18]/80 border border-white/[0.07]">
                  <div className="w-10 h-10 rounded-lg bg-[#0F1E36] border border-[#D4AF37]/30 flex items-center justify-center text-[#F3D270] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {language === 'en' ? 'CORPORATE HEADQUARTERS' : 'SEDE CORPORATIVA'}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      7898 Zionsville Rd, Indianapolis
                    </p>
                    <p className="text-xs text-slate-400">
                      {language === 'en' ? 'IN 46268, United States' : 'IN 46268, Estados Unidos'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-slate-400">
                  {language === 'en' ? 'Follow Us:' : 'Síguenos:'}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/Hycoprop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-[#070D18] border border-white/10 hover:border-[#D4AF37] text-xs text-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/hycoprop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-[#070D18] border border-white/10 hover:border-[#D4AF37] text-xs text-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card rounded-2xl overflow-hidden border border-[#D4AF37]/30 h-64 relative">
              <iframe
                title="HYCO Property Management Headquarters Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-86.265%2C39.880%2C-86.215%2C39.915&layer=mapnik&marker=39.8975%2C-86.2401"
                className="w-full h-full border-0 opacity-85 contrast-125 invert-[0.9] hue-rotate-180"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-lg bg-[#070D18]/90 border border-[#D4AF37]/40 backdrop-blur-md flex items-center justify-between text-xs">
                <span className="text-white font-medium">
                  7898 Zionsville Rd, Indianapolis, IN 46268
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7898+Zionsville+Rd,+Indianapolis,+IN+46268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F3D270] hover:underline font-mono text-[11px]"
                >
                  {language === 'en' ? 'OPEN GOOGLE MAPS ↗' : 'ABRIR EN MAPAS ↗'}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/30">
              <h3 className="font-editorial text-3xl text-white mb-2">
                {language === 'en'
                  ? 'Schedule a Personalized Consultation'
                  : 'Agende una Consulta Personalizada'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                {language === 'en'
                  ? 'Complete the form below and our Indianapolis property management team will respond promptly.'
                  : 'Complete el siguiente formulario y nuestro equipo en Indianápolis se comunicará con usted a la brevedad.'}
              </p>

              {submittedRef ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-400/40 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-editorial text-3xl text-white">
                    {language === 'en'
                      ? 'Consultation Request Received'
                      : 'Solicitud de Consulta Recibida'}
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    {language === 'en'
                      ? `Thank you for contacting HYCO Property Management. Your reference code is ${submittedRef}. Our team will reach out shortly.`
                      : `Gracias por contactar a HYCO Property Management. Su código de referencia es ${submittedRef}. Nuestro equipo le contactará muy pronto.`}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedRef(null)}
                    className="px-6 py-2.5 rounded-lg bg-[#0F1E36] border border-white/15 text-xs uppercase tracking-wider text-[#F3D270] cursor-pointer"
                  >
                    {language === 'en' ? 'Send Another Message' : 'Enviar Otro Mensaje'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-2">
                        {language === 'en' ? 'Full Name *' : 'Nombre Completo *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={language === 'en' ? 'John Doe' : 'Nombre y Apellido'}
                        className="w-full glass-input px-4 py-3 rounded-lg text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-2">
                        {language === 'en' ? 'Email Address *' : 'Correo Electrónico *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full glass-input px-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-2">
                        {language === 'en' ? 'Phone Number' : 'Teléfono'}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (317) 000-0000"
                        className="w-full glass-input px-4 py-3 rounded-lg text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-2">
                        {language === 'en' ? 'Area of Interest' : 'Área de Interés'}
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full glass-input px-4 py-3 rounded-lg text-sm bg-[#070D18]"
                      >
                        <option value="5645 W 79th St — Commercial Space (2,600 SF)">
                          {language === 'en'
                            ? '5645 W 79th St — Commercial (2,600 SF)'
                            : '5645 W 79th St — Local Comercial (2,600 Pies²)'}
                        </option>
                        <option value="Prime 38th Street Office Space (1,350 SF)">
                          {language === 'en'
                            ? 'Prime 38th Street Office Space (1,350 SF)'
                            : 'Prime 38th Street — Oficina Comercial (1,350 Pies²)'}
                        </option>
                        <option value="4210 / 4200 / 4190 W Morris St — Industrial Campus">
                          {language === 'en'
                            ? '4210–4190 W Morris St — Industrial Hub'
                            : '4210–4190 W Morris St — Complejo Industrial'}
                        </option>
                        <option value="Full-Service Property Management Proposal">
                          {language === 'en'
                            ? 'Full-Service Property Management'
                            : 'Administración Integral de Propiedades'}
                        </option>
                        <option value="Construction & Remodeling Management">
                          {language === 'en'
                            ? 'Construction & Remodeling Management'
                            : 'Gestión de Construcción y Remodelación'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-2">
                      {language === 'en'
                        ? 'Enter Your Queries / Message *'
                        : 'Ingrese su Consulta o Mensaje *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === 'en'
                          ? 'Tell us about your business space requirements or the property you would like us to manage...'
                          : 'Cuéntenos sobre el espacio comercial que busca o la propiedad que desea que administremos...'
                      }
                      className="w-full glass-input px-4 py-3 rounded-lg text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 gold-gradient text-[#070D18] font-semibold text-xs uppercase tracking-[0.2em] rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitting
                        ? language === 'en'
                          ? 'SENDING REQUEST...'
                          : 'ENVIANDO SOLICITUD...'
                        : language === 'en'
                        ? 'SEND CONSULTATION REQUEST'
                        : 'ENVIAR SOLICITUD DE CONSULTA'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
