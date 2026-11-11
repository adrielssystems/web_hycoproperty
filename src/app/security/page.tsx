import React from 'react';
import type { Metadata } from 'next';
import { LegalPageTemplate } from '@/components/LegalPageTemplate';
import { SECURITY_POLICY } from '@/lib/legalContent';

export const metadata: Metadata = {
  title: 'Security Standards | HYCO Property Management',
  description:
    'Information security architecture, TLS 1.3 encryption, OWASP defenses, and Indiana breach notification standards at HYCO Property Management.',
};

export default function SecurityPage() {
  return (
    <LegalPageTemplate
      document={SECURITY_POLICY}
      badgeLabel={{
        en: 'INFRASTRUCTURE & CYBERSECURITY',
        es: 'INFRAESTRUCTURA Y CIBERSEGURIDAD',
      }}
      iconName="lock"
    />
  );
}
