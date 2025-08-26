'use client';

import { faqStructuredData } from '@/components/carrelage-bergerac/Faq';

export default function StructuredDataScript() {
  return (
    <script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqStructuredData),
      }}
    />
  );
}
