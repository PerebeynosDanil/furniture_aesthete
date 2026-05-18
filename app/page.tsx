'use client';
import { useApp } from './providers';
import { X, Ruler, PencilRuler, Wrench, House, Building2, Package, Palette, ShieldCheck, Phone, } from 'lucide-react';



export default function Home() {
  const { cur, setContactOpen, setSelectedDoc ,contactOpen,selectedDoc} = useApp();

  const SERVICE_ICONS = [<Ruler size={24} />, <PencilRuler size={24} />, <Wrench size={24} />];
  const BRAND_IMG = ["/img/germany_kitchen.jpg", "/img/germany_kitchen_2.jpg", "/img/ikea.jpg"];
  const ESTEET_ICONS = [<House size={18} />, <Building2 size={18} />, <Wrench size={18} />, <Package size={18} />];
  const CTA_ICONS = [<Ruler size={18} />, <Palette size={18} />, <ShieldCheck size={18} />];

  const TIKTOK_VIDEO_ID = '7593793699730033942';
  const TIKTOK_USERNAME = '@esteta_de_muebles';
  const TIKTOK_PROFILE_URL = 'https://www.tiktok.com/@esteta_de_muebles';

  return (
    <div className="bg-main min-h-screen flex flex-col">

      <main className="flex-grow flex flex-col items-center w-full">
        {/* ── BANNER ── */}
        <div className="banner relative w-full overflow-hidden shadow-2xl">
          <img src="/img/banner.jpg" className="w-full object-cover h-[26em]" />
          <div className="banner-overlay">
            <div className="presentation-author flex flex-col md:flex-row justify-center items-center h-full w-full px-2 gap-4 md:gap-10 py-2 md:py-0">
              <img src="/img/author-photo.jpg" className="object-cover w-32 h-32 md:w-auto md:h-auto rounded-full md:rounded-none" />
              <div className="text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-5xl mb-3 md:mb-4">{cur.name}</h1>
                <p className="text-base md:text-xl mb-5 md:mb-8 leading-relaxed">
                  {cur.specialty[0]} — <span className="font-bold">{cur.specialty[1]}</span>
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <button onClick={() => setContactOpen(true)} className="cursor-pointer px-5 py-3 md:px-8 md:py-4 bg-[var(--bg-action)] text-[var(--text-action)] font-bold rounded-xl hover:bg-slate-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
                    {cur.measurement}
                  </button>
                  <a href="/portfolio" className="flex px-5 py-3 md:px-8 md:py-4 bg-[var(--bg-action)] text-[var(--text-action)] font-bold rounded-xl hover:bg-slate-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
                    {cur.viewWorks}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ABOUT ── */}
        <div className="w-full max-w-7xl mx-auto p-6 md:p-12 bg-[var(--bg-second)] rounded-2xl mt-4 md:mt-6 mb-4 md:mb-6 mx-3 md:mx-auto">
          <h1 className="text-2xl md:text-4xl font-medium text-center mb-6 md:mb-10">{cur.aboutTitle}</h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="flex-1 space-y-4 text-[15px] md:text-[16px] leading-relaxed">
              {cur.aboutText.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
            <div className="flex-1 w-full bg-[#3a3d4a] rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10">
                <p className="text-white font-medium text-base md:text-[18px]">{cur.factsTitle}</p>
              </div>
              <div className="grid grid-cols-2">
                {cur.facts.map((fact: any, i: number) => (
                  <div key={fact.num} className={`p-4 md:p-5 ${i % 2 === 0 ? 'border-r border-white/10' : ''} ${i < 2 ? 'border-b border-white/10' : ''}`}>
                    <span className="block text-[14px] md:text-[16px] tracking-widest text-white mb-2 md:mb-3">{fact.num}</span>
                    <div className="h-px bg-white/15 mb-2 md:mb-3" />
                    <p className="text-[14px] md:text-[16px] font-medium text-white mb-1 md:mb-2">{fact.title}</p>
                    <p className="text-[12px] md:text-[14px] text-white/60 leading-relaxed">{fact.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── SERVICES BANNER ── */}
        <div className="banner relative w-full overflow-hidden">
          <img src="/img/banner-second.jpg" className="h-[28em] w-full object-cover" />
          <div className="banner-overlay ">
            <div className="w-full h-full max-w-5xl mx-auto px-4 md:px-6 py-2 md:py-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-medium mb-1">{cur.servicesTitle}</h2>
              <p className="text-sm mb-6 md:mb-8">{cur.servicesSubtitle}</p>
              <div className="flex mb-6">
                {cur.services.map((service: any, i: number) => (
                  <div key={i} className={[
                    'flex-1 flex items-center justify-center py-3 md:py-4 bg-[var(--text-main)]',
                    i === 0 ? '[clip-path:polygon(0_0,calc(100%-16px)_0,100%_50%,calc(100%-16px)_100%,0_100%)]'
                      : i === cur.services.length - 1 ? '[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,16px_50%)] -ml-px'
                        : '[clip-path:polygon(0_0,calc(100%-16px)_0,100%_50%,calc(100%-16px)_100%,0_100%,16px_50%)] -ml-px',
                  ].join(' ')}>
                    <span className="text-[var(--bg-second)]">{SERVICE_ICONS[i]}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {cur.services.map((service: any, i: number) => (
                  <div key={i}>
                    <p className="text-[14px] md:text-[16px] font-medium mb-1">{service.title}</p>
                    <p className="text-[12px] md:text-[14px] leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BRANDS ── */}
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <h2 className="text-center text-2xl md:text-3xl font-medium mb-2">{cur.brandsTitle}</h2>
          <p className="text-center text-sm mb-8 md:mb-10">{cur.brandsSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {cur.brands.map((brand: any, i: number) => (
              <div key={i}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 cursor-zoom-in group" onClick={() => setSelectedDoc(BRAND_IMG[i])}>
                  <img src={BRAND_IMG[i]} alt={brand.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <p className="text-[14px] md:text-[16px] font-medium mb-1">{brand.name}</p>
                <p className="text-[12px] md:text-[14px] leading-relaxed" dangerouslySetInnerHTML={{ __html: brand.desc }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── CERT ── */}
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 bg-[var(--bg-second)] rounded-2xl mb-4 md:mb-6">
          <h2 className="text-center text-2xl md:text-3xl font-medium mb-8 md:mb-10">{cur.certTitle}</h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="w-full md:w-[420px] shrink-0 rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setSelectedDoc('/img/diploma.jpg')}>
              <img src="/img/diploma.jpg" alt="Puustelli diploma" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 aspect-[4/2]" />
            </div>
            <div className="flex flex-col gap-4 text-[14px] md:text-[16px] leading-relaxed">
              <h3 className="text-lg md:text-xl font-medium">{cur.certSubtitle}</h3>
              {cur.certText.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>

        {/* ── BVS ── */}
        <div className="w-full px-4 md:px-6 py-8 md:py-12 bg-[var(--bg-second)]">
          <div style={{ background: 'var(--bg-main)' }} className="flex flex-col mx-auto max-w-5xl text-center p-6 md:p-12 rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8">{cur.bvsTitle}</h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start text-left">
              <div className="flex-1 space-y-4 text-[14px] md:text-[16px] leading-relaxed ">
                {cur.bvsText.map((p: string, i: number) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
              </div>
              <div className="flex-1 w-full flex flex-col gap-4 ">
                {cur.bvsCards.map((card: any, i: number) => (
                  <div key={i} className="border border-gray-700 rounded-2xl px-5 md:px-6 py-4 md:py-5 bg-[var(--bg-second)]">
                    <p className="text-[14px] md:text-[16px] font-medium mb-1">{card.title}</p>
                    <p className="text-[12px] md:text-[14px] leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Furniture Aesthete ── */}
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-medium mb-2">{cur.logo}</h2>
              {cur.esteetCards.map((card: any, i: number) => (
                <div key={i} className="bg-[var(--bg-second)] border border-gray-700 rounded-2xl px-5 md:px-6 py-4 md:py-5 ">
                  <p className="flex items-center gap-2 text-[14px] md:text-[16px] font-medium mb-1">
                    {ESTEET_ICONS[i]}{card.title}
                  </p>
                  <p className="text-[12px] md:text-[14px] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="w-full md:flex-1 rounded-2xl overflow-hidden cursor-pointer group min-h-[240px] md:min-h-0" onClick={() => setSelectedDoc('/img/esteet_card.jpg')}>
              <img src="/img/esteet_card.jpg" alt={cur.logo} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* ── TIKTOK ── */}
        <div className="w-full py-8 md:py-12 bg-[var(--bg-main)]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 bg-[var(--bg-second)] rounded-3xl">
            <h2 className="text-center text-2xl md:text-3xl font-medium mb-8 md:mb-10">{cur.tiktokTitle}</h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full md:w-[325px] shrink-0 rounded-2xl overflow-hidden" style={{ minHeight: '738px' }}>
                <iframe src={`https://www.tiktok.com/embed/v2/${TIKTOK_VIDEO_ID}`} className="w-full h-full" style={{ border: 'none', minHeight: '738px' }} allowFullScreen allow="encrypted-media" />
              </div>
              <div className=" flex-1 flex flex-col gap-4 md:gap-5">
                <p className="text-lg md:text-xl font-medium">{TIKTOK_USERNAME}</p>
                <div className="space-y-3 text-[14px] leading-relaxed">
                  {cur.tiktokText.map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
                <a href={TIKTOK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className=" inline-flex items-center gap-2 w-fit px-6 py-3 bg-[var(--bg-action)] text-[var(--text-action)] font-medium rounded-xl hover:opacity-80 transition-opacity text-sm md:text-base">
                  <i className="fa-brands fa-tiktok" />{cur.tiktokBtn}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="w-full px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-5xl mx-auto border border-gray-700 rounded-3xl p-6 md:p-10 flex flex-col gap-6 md:gap-8">
            <h2 className="text-center text-2xl md:text-3xl font-medium">{cur.ctaTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {cur.ctaCards.map((card: any, i: number) => (
                <div key={i} className="border border-gray-700 rounded-2xl px-4 py-4" style={{ background: 'var(--bg-second)' }}>
                  <p className="flex items-center gap-2 text-[14px] md:text-[16px] font-medium mb-1">{CTA_ICONS[i]}{card.title}</p>
                  <p className="text-[12px] md:text-[14px] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={() => setContactOpen(true)} className="px-6 py-3 bg-[var(--bg-second)] cursor-pointer font-medium rounded-xl hover:opacity-80 transition-opacity border border-gray-700 text-sm md:text-base">
                {cur.ctaBtn}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}