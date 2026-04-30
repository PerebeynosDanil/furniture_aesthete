'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Globe, UtensilsCrossed } from 'lucide-react';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState('ukr');

  // Ждем монтажа компонента, чтобы избежать ошибок гидратации
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const content = {
    ukr: { title: "Якісна установка кухонь", btn: "Розрахувати вартість" },
    rus: { title: "Качественная установка кухонь", btn: "Рассчитать стоимость" },
    esp: { title: "Instalación de cocinas de calidad", btn: "Calcular presupuesto" }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <UtensilsCrossed className="text-orange-500" />
            <span>Kitchen<span className="text-orange-500">Pro</span></span>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
              <Globe size={16} className="ml-1 opacity-50" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-sm font-medium outline-none cursor-pointer p-1"
              >
                <option value="ukr">UA</option>
                <option value="rus">RU</option>
                <option value="esp">ES</option>
              </select>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION (с учетом хедера) */}
      <main className="pt-16">
        <section className="relative h-[70vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070')] bg-cover bg-center" />
          
          <div className="relative z-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {content[lang as keyof typeof content].title}
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-bold shadow-xl transition-transform hover:scale-105">
              {content[lang as keyof typeof content].btn}
            </button>
          </div>
        </section>
      </main>

    </div>
  );
}