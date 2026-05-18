'use client';

import { useApp } from './providers'; 
import { Drill } from 'lucide-react';

export default function Footer() {
  const { cur, lang, setLang, labels } = useApp();

  const FOOTER_LINKS = [
    "portfolio",
  ];

  return (
    <footer className="w-full bg-[#1b1b1b] border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-10 pb-4">

        <div className="grid grid-cols-1 justify-self-center sm:grid-cols-3 md:grid-cols-3 gap-4 mb-10">
          
          {/* Logo/Desc */}
          <div>
            <div className="logo-text text-white italic flex items-center gap-1.5 font-bold mb-3">
              <Drill size={20} />
              {cur.logo}
            </div>
            <p className="text-[16px] text-gray-400 leading-relaxed mb-5 max-w-[260px]">
              {cur.footerDesc}
            </p>

            {/* Networks */}
            <div className="flex gap-2.5">
              {[
                { href: 'https://www.facebook.com/profile.php?id=61585162651542', icon: 'fa-facebook-f', color: '#1877F2' },
                { href: 'viber://chat?number=%2B380976987712', icon: 'fa-viber', color: '#7360F2' },
                { href: 'https://www.tiktok.com/@esteta_de_muebles', icon: 'fa-tiktok', color: '#000000' },
                { href: 'https://t.me/bushinkan88', icon: 'fa-telegram', color: '#26A5E4' },
                { href: 'https://wa.me/+380976987712', icon: 'fa-whatsapp', color: '#25D366' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--hover-color': s.color } as React.CSSProperties}
                  className="footer-social w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 text-xl text-white transition-all duration-300"
                >
                  <i className={`fa-brands ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[14px] font-medium uppercase tracking-widest text-gray-500 mb-4">
              {cur.footerNav}
            </p>
            <div className="flex flex-col gap-2.5">
              {cur.footerLinks.map((label: string, i: number) => (
                <a key={i} href={FOOTER_LINKS[i]} className="text-[14px] text-gray-300 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal + Lang Change */}
          <div>
            <p className="text-[14px] font-medium uppercase tracking-widest text-gray-500 mb-4">
              {cur.footerLegal}
            </p>
            <div className="flex flex-col gap-2.5 mb-6">
              <a href="/privacy" className="text-[14px] text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {cur.footerPrivacy}
              </a>
              <a href="/terms" className="text-[14px] text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {cur.footerTerms}
              </a>
            </div>

            <p className="text-[12px] font-medium uppercase tracking-widest text-gray-300 mb-3">
              {cur.footerLangLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {(['ukr', 'rus', 'eng', 'esp', 'est'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[12px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer uppercase font-medium ${
                    lang === l
                      ? 'border-white text-white'
                      : 'border-gray-700 text-gray-500 hover:border-gray-500'
                  }`}
                >
                  {labels[l]}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-800 py-4 flex flex-col items-center justify-center gap-2 text-[12px] text-gray-400">
          <span>© 2026 FurnitureAesthete. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}