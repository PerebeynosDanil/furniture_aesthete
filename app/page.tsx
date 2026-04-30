'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, UtensilsCrossed, Phone, Camera, MessageCircle, CheckCircle2 } from 'lucide-react';
import { dictionaries, Locale } from './locales/dictionaries';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Locale>('ukr');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);
  const labels = { ukr: 'ua', rus: 'ru', esp: 'es', est: 'est' };

  if (!mounted) return null;

  const cur = dictionaries[lang];

  return (
    <div className="bg-main min-h-screen flex flex-col transition-colors duration-300">
      <header className="fixed top-0 w-full z-50 header-glass border-b transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <UtensilsCrossed className="text-orange-500" />
            <span className="logo-text italic tracking-tighter">
              {cur.logo}<span className="text-orange-500">Pro</span>
            </span>
          </div>

          <div className="flex items-center gap-4">

            <div className="min-w-10 justify-center flex group relative py-2">

              <span className="cursor-pointer font-bold uppercase transition-colors group-hover:text-green-500">
                {labels[lang]}
              </span>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="action-lang flex flex-col gap-2 p-3 rounded-xl min-w-[60px] text-center">
                  {(['ukr', 'rus', 'esp', 'est'] as const).map((l) => (
                    <span
                      key={l}
                      onClick={() => setLang(l)}
                      className={`cursor-pointer uppercase text-sm transition-colors hover:text-green-500 ${lang === l
                          ? 'text-green-500 font-bold' // Цвет активного языка
                          : 'opacity-60 font-medium'
                        }`}
                    >
                      {labels[l]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="action-theme p-2 rounded-full theme-btn-hover"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-20 px-6 flex flex-col items-center max-w-2xl mx-auto w-full text-center">
        <div className="w-32 h-32 rounded-full border-4 border-orange-500 mb-6 overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1595841055318-67509f635678?q=80&w=200&h=200&auto=format&fit=crop"
            alt="Master"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-black mb-2">{cur.name}</h1>
        <p className="text-orange-500 font-bold text-lg mb-6 uppercase tracking-widest">{cur.specialty}</p>

        <p className="opacity-80 leading-relaxed mb-8 text-lg">
          {cur.about}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cur.skills.map((skill) => (
            <span key={skill} className="flex items-center gap-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
              <CheckCircle2 size={14} /> {skill}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <a href="tel:+380000000000" className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-bold transition-transform hover:scale-[1.02] active:scale-95 shadow-lg">
            <Phone size={20} /> Telegram / Viber
          </a>
          <a href="https://instagram.com" className="flex items-center justify-center gap-3 bg-orange-500 text-white py-4 rounded-2xl font-bold transition-transform hover:scale-[1.02] active:scale-95 shadow-lg">
            <Camera size={20} /> Instagram
          </a>
        </div>
      </main>

      <footer className="py-8 text-center opacity-40 text-sm">
        {cur.footer}
      </footer>
    </div>
  );
}