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

        <h1 className="text-3xl md:text-4xl font-medium mb-2">Portfolio</h1>
        <p className="text-sm mb-10">Photo...</p>

      </main>
    </div>
  );
}