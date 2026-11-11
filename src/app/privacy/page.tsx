import React from 'react';
import type { Metadata } from 'next';
import { LegalPageTemplate } from '@/components/LegalPageTemplate';
import { PRIVACY_POLICY } from '@/lib/legalContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | HYCO Property Management',
  description:
    'HYCO Property Management privacy practices, customer records disposal, and communication consent in compliance with Indiana Code § 24-4.9, TCPA, and CAN-SPAM.',
};

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      document={PRIVACY_POLICY}
      badgeLabel={{
        en: 'PRIVACY & DATA PROTECTION',
        es: 'PRIVACIDAD Y PROTECCIÓN DE DATOS',
      }}
      iconName="shield"
    />
  );
}
