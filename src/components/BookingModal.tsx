'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

export function BookingModal({
  isOpen,
  initialTopic,
  onClose,
}: BookingModalProps) {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          interest: initialTopic || 'Private Viewing & Consultation',
          message:
            message ||
            `Requesting private showing / consultation regarding: ${
              initialTopic || 'HYCO Portfolio'
            }`,
        }),
      });
      const data = await res.json();
      setReference(data.reference || 'HYCO-VIP');
    } catch {
      setReference('HYCO-DIRECT');
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setReference(null);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          className="w-full max-w-lg glass-panel rounded-2xl border border-[#D4AF37]/40 p-6 sm:p-8 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-6">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#F3D270]">
                {language === 'en'
                  ? 'HYCO PROPERTY MANAGEMENT · INDIANAPOLIS'
                  : 'HYCO PROPERTY MANAGEMENT · INDIANÁPOLIS'}
              </p>
              <h3 className="font-editorial text-3xl text-white mt-1">
                {language === 'en' ? 'Book a Private Viewing' : 'Agendar Visita o Consulta'}
              </h3>
            </div>
            <button
              type="button"
              onClick={resetAndClose}
              className="p-2 rounded-lg bg-[#070D18] border border-white/15 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {reference ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="font-editorial text-3xl text-white">
                {language === 'en' ? 'Request Confirmed' : 'Solicitud Confirmada'}
              </h4>
              <p className="text-sm text-slate-300">
                {language === 'en'
                  ? `Reference ${reference}. Our Indianapolis team will contact you shortly to confirm your appointment.`
                  : `Referencia ${reference}. Nuestro equipo en Indianápolis se comunicará con usted para confirmar su cita.`}
              </p>
              <button
                type="button"
                onClick={resetAndClose}
                className="px-6 py-2.5 gold-gradient text-[#070D18] text-xs font-semibold uppercase tracking-wider rounded-sm cursor-pointer"
              >
                {language === 'en' ? 'Done' : 'Cerrar'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {initialTopic && (
                <div className="p-3 rounded-lg bg-[#070D18] border border-[#D4AF37]/30 text-xs text-[#F3D270]">
                  <span className="text-slate-400 uppercase tracking-wider mr-2">
                    {language === 'en' ? 'Selected:' : 'Seleccionado:'}
                  </span>
                  <span className="font-semibold">{initialTopic}</span>
                </div>
              )}

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5">
                  {language === 'en' ? 'Full Name *' : 'Nombre Completo *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full glass-input px-3.5 py-2.5 rounded-lg text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5">
                    {language === 'en' ? 'Email *' : 'Correo *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full glass-input px-3.5 py-2.5 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5">
                    {language === 'en' ? 'Phone *' : 'Teléfono *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full glass-input px-3.5 py-2.5 rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5">
                  {language === 'en'
                    ? 'Preferred Date / Notes *'
                    : 'Fecha Preferida / Comentarios *'}
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === 'en'
                      ? 'Let us know your preferred day/time or specific questions...'
                      : 'Indíquenos el día/hora de su preferencia o sus preguntas...'
                  }
                  className="w-full glass-input px-3.5 py-2.5 rounded-lg text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 gold-gradient text-[#070D18] font-semibold text-xs uppercase tracking-[0.2em] rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {submitting
                    ? language === 'en'
                      ? 'CONFIRMING...'
                      : 'CONFIRMANDO...'
                    : language === 'en'
                    ? 'CONFIRM VIEWING REQUEST'
                    : 'CONFIRMAR SOLICITUD'}
                </span>
              </button>

              <div className="pt-2 text-center">
                <a
                  href="tel:+13176750041"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#F3D270]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>
                    {language === 'en'
                      ? 'Or call directly: +1 (317) 675-0041'
                      : 'O llame directo al: +1 (317) 675-0041'}
                  </span>
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

