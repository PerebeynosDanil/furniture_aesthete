'use client';

import { useApp } from '../providers';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
    const { cur } = useApp();

  return (
    <div className="bg-main min-h-screen flex flex-col">

      <main className="flex-grow w-full max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">

        <Link href="/" className="inline-flex items-center gap-2 text-sm hover:underline transition-colors mb-8">
          <ArrowLeft size={16} />
          {cur.backHome}
        </Link>

        <h1 className="text-3xl md:text-4xl font-medium mb-2">{cur.privacyTitle}</h1>
        <p className="text-sm mb-10">{cur.privacyUpdated}</p>

        <div className="space-y-8 text-[15px] leading-relaxed">
          {cur.privacySections.map((section: { title: string; text: string }, i: number) => (
            <div key={i}>
              <h2 className="text-[17px] font-medium mb-2">{section.title}</h2>
              <p>{section.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}