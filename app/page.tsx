'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Phone, Drill, Ruler, PencilRuler, Wrench} from 'lucide-react';
import { dictionaries, Locale } from './locales/dictionaries';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Locale>('eng');
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);
  const labels = { ukr: 'ua', rus: 'ru', eng: 'eng', esp: 'es', est: 'est' };

  if (!mounted) return null;

  const cur = dictionaries[lang];

  const SERVICE_ICONS = [
    <Ruler size={26} />,
    <PencilRuler size={26} />,
    <Wrench size={26} />,
  ];

  return (
    <div className="bg-main min-h-screen flex flex-col transition-colors duration-300">
      <header className="flex sticky top-0 w-full z-50 header-glass transition-colors duration-300 header">
        <div className="h-16 flex items-center justify-around w-full">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="logo-text italic tracking-tighter flex items-center">
              <Drill />
              {cur.logo}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Кнопка звонка */}
            <a
              href="tel:+37254887803"
              className="inline-flex items-center gap-4 p-2 bg-black text-white rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black-500/30 font-bold"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <Phone size={16} fill="currentColor" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase opacity-80">{cur.callNow}</span>
                <span className="text-[12px]">+372 5488 7803</span>
              </div>
            </a>

            <div className="min-w-10 justify-center flex group relative py-2">
              <span className="cursor-pointer font-bold uppercase transition-colors group-hover:text-black">
                {labels[lang]}
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <div className="action-lang flex flex-col gap-2 p-3 rounded-xl min-w-[60px] text-center">
                  {(['ukr', 'rus', 'eng', 'esp', 'est'] as const).map((l) => (
                    <span
                      key={l}
                      onClick={() => setLang(l)}
                      className={`cursor-pointer uppercase text-sm transition-colors hover:underline ${lang === l
                        ? 'font-bold'
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

      <main className="flex-grow flex flex-col items-center w-full">
        <div className="banner relative w-full overflow-hidden shadow-2xl">
          <img
            src="\img\banner.jpg"
            className="banner-img w-full object-cover"
          />
          <div className='banner-overlay'>
            <div className='presentation-author flex justify-center items-center h-full w-full'>
              <img
                src="\img\author-photo.jpg"
                className="object-cover"
              />
              <div className='ml-10'>
                <h1 className="text-4xl md:text-5xl mb-4">
                  {cur.name}
                </h1>

                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  {cur.specialty[0]} — <span className="font-bold">{cur.specialty[1]}</span>
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* Кнопка "Заказать замер" */}
                  <a
                    href="tel:+37254887803"
                    className="px-8 py-4 bg-slate-800 bg-black text-white font-bold rounded-xl hover:bg-slate-700 dark:hover:bg-gray transition-all shadow-lg active:scale-95"
                  >
                    {cur.measurement}
                  </a>

                  {/* Кнопка "Посмотреть работы" */}
                  <a
                    href="#"
                    className="px-8 py-4 bg-slate-800 bg-black text-white font-bold rounded-xl hover:bg-slate-700 dark:hover:bg-gray transition-all shadow-lg active:scale-95"
                  >
                    {cur.viewWorks}
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="w-full max-w-7xl mx-auto p-12 bg-[var(--bg-second)] rounded-2xl mt-6 mb-6">
          <h1 className="text-4xl font-medium text-center mb-10">
            {cur.aboutTitle}
          </h1>

          <div className="flex flex-col md:flex-row gap-10 items-center">

            {/* Текст слева */}
            <div className="flex-1 space-y-4 text-[16px] leading-relaxed">
              {cur.aboutText.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex-1 bg-[#3a3d4a] rounded-2xl overflow-hidden">

              {/* Заголовок карточки */}
              <div className="px-5 py-4 border-b border-white/10">
                <p className="text-white font-medium text-[18px]">{cur.factsTitle}</p>
              </div>

              {/* Сетка 2×2 */}
              <div className="grid grid-cols-2">
                {cur.facts.map((fact, i) => (
                  <div
                    key={fact.num}
                    className={[
                      'p-5',
                      i % 2 === 0 ? ' ' : '',
                      i < 2 ? ' ' : '',
                    ].join(' ')}
                  >
                    <span className="block text-[16px] tracking-widest text-white mb-3">
                      {fact.num}
                    </span>
                    <div className="h-px bg-white/15 mb-3" />
                    <p className="text-[16px] font-medium text-white mb-2">
                      {fact.title}
                    </p>
                    <p className="text-[16px] text-white/60 leading-relaxed">
                      {fact.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        <div className="banner relative w-full overflow-hidden">
          <img
            src="\img\banner-second.jpg"
            className="banner-img w-full object-cover"
          />
          <div className='banner-overlay'>
            <div className="w-full max-w-5xl mx-auto px-6 py-12">

              <h2 className="text-3xl font-medium mb-1">
                {cur.servicesTitle}
              </h2>
              <p className="text-sm mb-8">
                {cur.servicesSubtitle}
              </p>

              {/* Стрелки-шаги */}
              <div className="flex mb-6">
                {cur.services.map((service, i) => (
                  <div
                    key={i}
                    className={[
                      'flex-1 flex items-center justify-center py-4 bg-[var(--text-main)]',
                      i === 0
                        ? '[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%)]'
                        : i === cur.services.length - 1
                          ? '[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,20px_50%)] -ml-px'
                          : '[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%,20px_50%)] -ml-px',
                    ].join(' ')}
                  >
                    <span className='text-[var(--bg-second)]'>{SERVICE_ICONS[i]}</span>
                  </div>
                ))}
              </div>

              {/* Описания */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cur.services.map((service, i) => (
                  <div key={i}>
                    <p className="text-[15px] font-medium mb-1">
                      {service.title}
                    </p>
                    <p className="text-[13px] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>


      </main>

      <footer className="footer py-8 text-center  text-sm">
        <div className='relative h-auto w-auto inline-block'>
          <ul className='social_network'>
            <li>
              <a href="#"><i className="fab fa-facebook-f icon"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-viber icon"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-tiktok icon"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-telegram icon"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa-brands fa-whatsapp icon"></i></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}