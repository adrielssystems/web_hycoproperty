import React from 'react';
import type { Metadata } from 'next';
import { LegalPageTemplate } from '@/components/LegalPageTemplate';
import { COOKIE_POLICY } from '@/lib/legalContent';

export const metadata: Metadata = {
  title: 'Cookie Policy | HYCO Property Management',
  description:
    'Cookie policy, essential session storage, and preference management guidelines compliant with United States FTC principles at HYCO Property Management.',
};

export default function CookiesPage() {
  return (
    <LegalPageTemplate
      document={COOKIE_POLICY}
      badgeLabel={{
        en: 'TECHNICAL TRACKING & STORAGE',
        es: 'RASTREO TÉCNICO Y ALMACENAMIENTO',
      }}
      iconName="cookie"
    />
  );
}
