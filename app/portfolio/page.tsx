'use client';

import { useApp } from '../providers';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import PROJECTS from './portfolio.json';

const QUOTES = [
  { text: "Вячеслав сделал нашу кухню мечтой. Точность, аккуратность и внимание к каждой детали.", author: "Мария К., Таллин" },
  { text: "Я искала профессионала для монтажа кухни IKEA — нашла настоящего мастера.", author: "Анна Л., Хельсинки" },
  { text: "Профессиональный подход от замера до финального монтажа. Рекомендую всем!", author: "Thomas R., Berlin" },
  { text: "Мебель BVS и мастерство Вячеслава — это сочетание превзошло все ожидания.", author: "Елена М., Рига" },
];

const INITIAL_COUNT = 16;
const LOAD_MORE_COUNT = 8;

type Project = { id: number; title: string; photos: string[] };
type ModalState = { project: Project; photoIdx: number } | null;

export default function Portfolio() {
  const { cur } = useApp();

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [activePhoto, setActivePhoto] = useState<Record<number, number>>({});
  const [animatingIds, setAnimatingIds] = useState<Set<number>>(new Set());
  const [modal, setModal] = useState<ModalState>(null);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => changeQuote((quoteIdx + 1) % QUOTES.length), 5000);
    return () => clearInterval(timer);
  }, [quoteIdx]);

  // Клавиши для модалки
  useEffect(() => {
    if (!modal) return;

    document.body.style.overflow = 'hidden';

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') modalCycle(1);
      if (e.key === 'ArrowLeft') modalCycle(-1);
      if (e.key === 'Escape') setModal(null);
    };

    window.addEventListener('keydown', handler);
    
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [modal]);

  const changeQuote = (idx: number) => {
    setQuoteVisible(false);
    setTimeout(() => { setQuoteIdx(idx); setQuoteVisible(true); }, 300);
  };

  const visibleProjects: Project[] = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;

  const handleLoadMore = () => {
    const nextCount = Math.min(visibleCount + LOAD_MORE_COUNT, PROJECTS.length);
    const newIds = new Set(PROJECTS.slice(visibleCount, nextCount).map((p) => p.id));
    setAnimatingIds(newIds);
    setVisibleCount(nextCount);
    setTimeout(() => setAnimatingIds(new Set()), 700);
  };

  const getPhotoSrc = (p: Project) => p.photos[activePhoto[p.id] ?? 0] ?? p.photos[0];

  const cyclePhoto = (e: React.MouseEvent, id: number, dir: 1 | -1, len: number) => {
    e.stopPropagation();
    setActivePhoto((prev) => ({ ...prev, [id]: ((prev[id] ?? 0) + dir + len) % len }));
  };

  const modalCycle = (dir: 1 | -1) => {
    setModal((prev) => {
      if (!prev) return null;
      const len = prev.project.photos.length;
      return { ...prev, photoIdx: (prev.photoIdx + dir + len) % len };
    });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-main)' }}>

      {/* Banner */}
      <div className="relative w-full h-[36vh] md:h-[44vh] overflow-hidden flex items-center">
        <img src="/img/portfolio-banner.jpg" alt="Portfolio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--bg-overlay)] opacity-70 rounded-2xl max-w-2xl mx-auto max-h-50 top-25" />
        <div className="relative z-10 w-fit max-w-5xl mx-auto px-4 py-4 md:px-6 pb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-5 opacity-70 hover:opacity-100 transition-opacity">
            <ArrowLeft size={15} />{cur.backHome}
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl opacity-100 font-medium mb-2">{cur.portfolioTitle}</h1>
          <p className="text-sm md:text-base max-w-xl">{cur.portfolioSubtitle}</p>
        </div>
      </div>

      {/* QUOTES */}
      <div className="w-full bg-[var(--bg-second)] py-7 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button
            onClick={() => changeQuote((quoteIdx - 1 + QUOTES.length) % QUOTES.length)}
            className="shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex-1 relative h-[72px]">
            {QUOTES.map((q, i) => (
              <div
                key={i}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-1"
                style={{
                  opacity: i === quoteIdx ? (quoteVisible ? 1 : 0) : 0,
                  transform: i === quoteIdx
                    ? (quoteVisible ? 'translateY(0)' : 'translateY(5px)')
                    : 'translateY(5px)',
                  transition: 'opacity 300ms ease, transform 300ms ease',
                  pointerEvents: i === quoteIdx ? 'auto' : 'none',
                }}
              >
                <p className="text-[13px] md:text-[14px] italic leading-relaxed line-clamp-2">
                  "{q.text}"
                </p>
                <p className="text-[11px] opacity-50 font-medium mt-1">{q.author}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => changeQuote((quoteIdx + 1) % QUOTES.length)}
            className="shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 mt-4">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => changeQuote(i)}
              className="cursor-pointer rounded-full transition-all duration-300"
              style={{
                width: i === quoteIdx ? '20px' : '6px',
                height: '6px',
                background: i === quoteIdx ? 'var(--text-main)' : 'rgba(128,128,128,0.35)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Gallery */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-3 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {visibleProjects.map((project) => {
            const src = getPhotoSrc(project);
            const idx = activePhoto[project.id] ?? 0;
            const isNew = animatingIds.has(project.id);

            return (
              <div
                key={project.id}
                onClick={() => setModal({ project, photoIdx: activePhoto[project.id] ?? 0 })}
                className="group relative rounded-xl overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800"
                style={{
                  opacity: isNew ? 0 : 1,
                  transform: isNew ? 'scale(0.95) translateY(10px)' : 'scale(1) translateY(0)',
                  transition: 'opacity 500ms ease, transform 500ms ease',
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={src} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-t from-black/65 to-transparent">
                  <p className="text-white text-[12px] font-medium truncate">{project.title}</p>
                </div>

                {project.photos.length > 1 && (
                  <>
                    <div className="absolute top-2 left-0 right-0 flex justify-center gap-1 pointer-events-none">
                      {project.photos.map((_, i) => (
                        <div key={i} className="rounded-full transition-all duration-200" style={{ width: i === idx ? '12px' : '6px', height: '5px', background: i === idx ? 'white' : 'rgba(255,255,255,0.5)' }} />
                      ))}
                    </div>
                    <button onClick={(e) => cyclePhoto(e, project.id, -1, project.photos.length)} className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/75">
                      <ChevronLeft size={13} />
                    </button>
                    <button onClick={(e) => cyclePhoto(e, project.id, 1, project.photos.length)} className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/75">
                      <ChevronRight size={13} />
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button onClick={handleLoadMore} className="px-8 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-[var(--bg-second)] transition-colors cursor-pointer">
              {cur.portfolioLoadMore} ({PROJECTS.length - visibleCount})
            </button>
          </div>
        )}
      </main>

      {/* MODAL */}
      {modal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
        >
          {/* Закрыть */}
          <button className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity z-10" onClick={() => setModal(null)}>
            <X size={36} />
          </button>

          {/* Стрелка влево */}
          {modal.project.photos.length > 1 && (
            <button
              className="absolute left-3 md:left-6 text-white bg-black/40 hover:bg-black/70 rounded-full w-11 h-11 flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); modalCycle(-1); }}
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Фото */}
          <img
            src={modal.project.photos[modal.photoIdx]}
            alt={modal.project.title}
            className="max-w-full object-contain rounded-xl shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 130px)' }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Стрелка вправо */}
          {modal.project.photos.length > 1 && (
            <button
              className="absolute right-3 md:right-6 text-white bg-black/40 hover:bg-black/70 rounded-full w-11 h-11 flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); modalCycle(1); }}
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* NAME */}
          <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <p className="text-white text-sm font-medium drop-shadow">{modal.project.title}</p>
            {modal.project.photos.length > 1 && (
              <div className="flex gap-2">
                {modal.project.photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setModal((prev) => prev ? { ...prev, photoIdx: i } : null)}
                    className="cursor-pointer rounded-full transition-all duration-200"
                    style={{
                      width: i === modal.photoIdx ? '22px' : '7px',
                      height: '7px',
                      background: i === modal.photoIdx ? 'white' : 'rgba(255,255,255,0.35)',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}