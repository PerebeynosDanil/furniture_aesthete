'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Phone, Drill, Ruler, PencilRuler, Wrench, X, Building2, Package, House, Palette, ShieldCheck } from 'lucide-react';
import { dictionaries, Locale } from './locales/dictionaries';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Locale>('eng');
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  const labels = { ukr: 'ua', rus: 'ru', eng: 'eng', esp: 'es', est: 'est' };

  if (!mounted) return null;

  const cur = dictionaries[lang];

  const SERVICE_ICONS = [
    <Ruler size={26} />,
    <PencilRuler size={26} />,
    <Wrench size={26} />,
  ];

  const BRAND_IMG = [
    "/img/germany_kitchen.jpg",
    "/img/germany_kitchen_2.jpg",
    "/img/ikea.jpg",
  ];

  const ESTEET_ICONS = [
    <House size={18} />,
    <Building2 size={18} />,
    <Wrench size={18} />,
    <Package size={18} />,
  ];

  const CTA_ICONS = [
    <Ruler size={18} />,
    <Palette size={18} />,
    <ShieldCheck size={18} />,
  ];

  const CONTACTS = [
    {
      label: 'Телефон',
      href: 'tel:+37254887803',
      icon: <Phone size={20} />,
      value: '+372 5488 7803',
      bg: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/bushinkan88',
      icon: <i className="fa-brands fa-telegram text-xl" />,
      value: 'Telegram',
      bg: 'bg-[#229ED9] text-white',
    },
    {
      label: 'Viber',
      href: 'viber://chat?number=%2B380976987712',
      icon: <i className="fa-brands fa-viber text-xl" />,
      value: 'Viber',
      bg: 'bg-[#7360F2] text-white',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/+380976987712',
      icon: <i className="fa-brands fa-whatsapp text-xl" />,
      value: 'WhatsApp',
      bg: 'bg-[#25D366] text-white',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61585162651542',
      icon: <i className="fa-brands fa-facebook-f text-xl" />,
      value: 'Facebook',
      bg: 'bg-[#1877F2] text-white',
    },
  ];

  const TIKTOK_VIDEO_ID = '7593793699730033942';
  const TIKTOK_USERNAME = '@esteta_de_muebles';
  const TIKTOK_PROFILE_URL = 'https://www.tiktok.com/@esteta_de_muebles';

  return (
    <div className="bg-main min-h-screen flex flex-col transition-colors duration-300">
      <header className="flex sticky top-0 w-full z-50 header-glass transition-colors duration-300 header">
        <div className="h-16 flex items-center justify-around w-full">

          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="logo-text italic tracking-tighter flex items-center">
              <Drill />
              {cur.logo}
            </span>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-4">

            {/* Call Button */}
            <div>
              <button
                onClick={() => setContactOpen(true)}
                className="px-8 py-3   cursor-pointer font-medium rounded-xl hover:opacity-80 transition-opacity"
              >
                {cur.callNow}
              </button>
            </div>

            {/* Change Language */}
            <div className="min-w-10 justify-center flex group relative py-2">
              <span className="cursor-pointer font-bold uppercase transition-colors group-hover:underline">
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

            {/* Change Theme */}
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
                  <button
                    onClick={() => setContactOpen(true)}
                    className="cursor-pointer px-8 py-4 bg-slate-800 bg-black text-white font-bold rounded-xl hover:bg-slate-700 dark:hover:bg-gray transition-all shadow-lg active:scale-95"
                  >
                    {cur.measurement}
                  </button>

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

        <div className="w-full max-w-5xl mx-auto px-6 py-12">

          <h2 className="text-center text-3xl font-medium mb-2">
            {cur.brandsTitle}
          </h2>
          <p className="text-center text-sm mb-10">
            {cur.brandsSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cur.brands.map((brand, i) => (
              <div key={i}>

                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 cursor-zoom-in group"
                  onClick={() => setSelectedDoc(BRAND_IMG[i])}
                >
                  <img
                    src={BRAND_IMG[i]}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <p className="text-[16px] font-medium  mb-1">
                  {brand.name}
                </p>
                <p
                  className="text-[14px]  leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: brand.desc }}
                />

              </div>
            ))}
          </div>

        </div>

        <div className="w-full max-w-5xl m-12 rounded-2xl mx-auto px-6 py-12 bg-[var(--bg-second)]">

          <h2 className="text-center text-3xl font-medium mb-10">
            {cur.certTitle}
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-center">

            {/* Фото слева */}
            <div
              className="w-full md:w-[420px] shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedDoc('/img/diploma.jpg')}
            >
              <img
                src="/img/diploma.jpg"
                alt="Puustelli diploma"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 aspect-[4/2]"
              />
            </div>

            {/* Текст справа */}
            <div className="flex flex-col gap-4 text-[14.5px] leading-relaxed">
              <h3 className="text-xl font-medium">
                {cur.certSubtitle}
              </h3>
              {cur.certText.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

          </div>

        </div>

        <div className="w-full px-6 py-12 bg-[var(--bg-second)]">
          <div className="bg-[var(--bg-main)] flex flex-col mx-auto max-w-5xl text-center p-12 rounded-3xl">
            <h2 className="text-3xl font-medium mb-8">
              {cur.bvsTitle}
            </h2>

            <div className="flex flex-col md:flex-row gap-10 items-center">

              {/* Текст слева */}
              <div className="flex-1 space-y-4 text-[14.5px] leading-relaxed ">
                {cur.bvsText.map((paragraph, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>

              {/* Карточки справа */}
              <div className="flex-1 flex flex-col gap-4">
                {cur.bvsCards.map((card, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-5"
                  >
                    <p className="text-[16px] font-medium  mb-1">
                      {card.title}
                    </p>
                    <p className="text-[14px]  leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-10 items-stretch">

            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-3xl font-medium mb-2">
                {cur.logo}
              </h2>

              {cur.esteetCards.map((card, i) => (
                <div
                  key={i}
                  className="border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-5"
                >
                  <p className="flex items-center gap-2 text-[16px] font-medium  mb-1">
                    {ESTEET_ICONS[i]}
                    {card.title}
                  </p>
                  <p className="text-[14px]  leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="w-full flex-1 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedDoc('/img/esteet_card.jpg')}
            >
              <img
                src="/img/esteet_card.jpg"
                alt={cur.logo}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

          </div>
        </div>

        <div className="w-full py-12 bg-[var(--bg-main)]">
          <div className='max-w-5xl mx-auto px-6 py-12 bg-[var(--bg-second)] rounded-3xl'>
            <h2 className="text-center text-3xl font-medium mb-10">
              {cur.tiktokTitle}
            </h2>

            <div className="flex flex-col md:flex-row gap-10">

              <div className="w-full flex-1 shrink-0 rounded-2xl overflow-hidden" style={{ minHeight: '738px' }}>
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${TIKTOK_VIDEO_ID}`}
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  allowFullScreen
                  allow="encrypted-media"
                />
              </div>

              <div className="flex-1 flex flex-col gap-5">

                <p className="text-xl font-medium ">
                  {TIKTOK_USERNAME}
                </p>

                <div className="space-y-3 text-[14px] leading-relaxed">
                  {cur.tiktokText.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <a
                  href={TIKTOK_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-fit px-6 py-3 bg-[var(--bg-action)] text-[var(--text-action)] font-medium rounded-xl hover:opacity-80 transition-opacity"
                >
                  <i className="fa-brands fa-tiktok" />
                  {cur.tiktokBtn}
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* CTA блок */}
        <div className="w-full px-6 py-12">
          <div className="max-w-5xl mx-auto border border-white-700 rounded-3xl p-10 flex flex-col gap-8">

            <h2 className="text-center text-3xl font-medium">
              {cur.ctaTitle}
            </h2>

            {/* Три карточки */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cur.ctaCards.map((card, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-2xl px-5 py-4 bg-[var(--bg-main)]"
                >
                  <p className="flex items-center gap-2 text-[16px] font-medium mb-1">
                    {CTA_ICONS[i]}
                    {card.title}
                  </p>
                  <p className="text-[14px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Кнопка */}
            <div className='text-center'>
              <button
                onClick={() => setContactOpen(true)}
                className="px-8 py-3 bg-[var(--bg-second)] cursor-pointer font-medium rounded-xl hover:opacity-80 transition-opacity"
              >
                {cur.ctaBtn}
              </button>
            </div>

          </div>
        </div>
      </main>

      <footer className="footer py-8 text-center  text-sm">
        <div className='relative h-auto w-auto inline-block'>
          <ul className='social_network'>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61585162651542" target="_blank"><i className="fab fa-facebook-f icon"></i></a>
            </li>
            <li>
              <a href="viber://chat?number=%2B380976987712" target="_blank"><i className="fa-brands fa-viber icon"></i></a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@esteta_de_muebles" target="_blank"><i className="fa-brands fa-tiktok icon"></i></a>
            </li>
            <li>
              <a href="https://t.me/bushinkan88" target="_blank"><i className="fa-brands fa-telegram icon"></i></a>
            </li>
            <li>
              <a href="https://wa.me/+380976987712" target="_blank"><i className="fa-brands fa-whatsapp icon"></i></a>
            </li>
          </ul>
        </div>
      </footer>

      {/* Photo Modal Window */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fadeIn duration-300"
          onClick={() => setSelectedDoc(null)}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-0 right-0 m-4 text-white transition-colors z-[110]"
              onClick={() => setSelectedDoc(null)}
            >
              <X size={40} className="cursor-pointer" />
            </button>

            <img
              src={selectedDoc}
              alt="Document Fullsize"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoomIn duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Contacts Modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 w-full max-w-sm flex flex-col gap-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center mb-2">
              {cur.ctaModalTitle}
            </h3>

            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl font-medium text-[16px] hover:opacity-85 transition-opacity ${c.bg}`}
              >
                <span className="w-6 flex justify-center">{c.icon}</span>
                {c.label}
              </a>
            ))}

            <button
              onClick={() => setContactOpen(false)}
              className="mt-2 text-sm text-gray-400 hover:text-gray-600 cursor-pointer dark:hover:text-gray-200 transition-colors text-center"
            >
              {cur.ctaModalClose}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}