import React from 'react';
import type { Metadata } from 'next';
import { LegalPageTemplate } from '@/components/LegalPageTemplate';
import { TERMS_OF_SERVICE } from '@/lib/legalContent';

export const metadata: Metadata = {
  title: 'Terms of Service | HYCO Property Management',
  description:
    'Terms of service, equal housing compliance, and commercial lease inquiry disclaimer governed by the laws of the State of Indiana and Marion County (Indianapolis, IN 46268).',
};

export default function TermsPage() {
  return (
    <LegalPageTemplate
      document={TERMS_OF_SERVICE}
      badgeLabel={{
        en: 'LEGAL TERMS & INDIANA JURISDICTION',
        es: 'TÉRMINOS LEGALES Y JURISDICCIÓN DE INDIANA',
      }}
      iconName="scale"
    />
  );
}
