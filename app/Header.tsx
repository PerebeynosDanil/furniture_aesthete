'use client';

import Link from 'next/link';
import { useApp } from './providers'; 
import { Sun, Moon, Menu, Phone, Drill } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const { cur, lang, setLang, isLangOpen, setIsLangOpen, setContactOpen, handleThemeToggle, isDark, menuOpen, setMenuOpen, labels } = useApp();
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="flex sticky top-0 w-full z-50 header-glass header">
      <div className="h-16 flex items-center justify-around px-2 md:px-8 w-full">
        {/* Logo */}
        <Link href="/" className="logo-text italic tracking-tighter flex items-center gap-1 font-bold text-base md:text-xl">
          <Drill size={20} />
          {cur.logo}
        </Link>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setContactOpen(true)} className="py-2 cursor-pointer font-medium rounded-xl hover:opacity-70 transition-opacity text-sm">
            {cur.callNow}
          </button>

          {/* Language */}
          <div className="min-w-10 justify-center flex group relative py-2" onMouseLeave={() => setIsLangOpen(false)}>
            <span
              onClick={(e) => { e.stopPropagation(); setIsLangOpen(!isLangOpen); }}
              className="cursor-pointer font-bold uppercase text-sm group-hover:underline"
            >
              {labels[lang]}
            </span>
            <div className={`absolute top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 ${isLangOpen ? '!opacity-100 !visible' : ''}`}>
              <div className="action-lang flex flex-col gap-2 p-3 rounded-xl min-w-[60px] text-center">
                {(['ukr', 'rus', 'eng', 'esp', 'est'] as const).map((l) => (
                  <span
                    key={l}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLang(l);
                      setIsLangOpen(false);
                    }}
                    className={`cursor-pointer uppercase text-sm hover:underline ${lang === l ? 'font-bold' : 'opacity-60 font-medium'}`}
                  >
                    {labels[l]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Change Theme */}
          <button onClick={handleThemeToggle} className="action-theme p-2 rounded-full">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setContactOpen(true)} className="p-2 rounded-xl border cursor-pointer border-current opacity-70 hover:opacity-100 transition-opacity">
            <Phone size={18} />
          </button>
          <button onClick={handleThemeToggle} className="action-theme p-2 rounded-full">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-xl cursor-pointer hover:opacity-70 transition-opacity">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {/* Mobile menu dropdown */}
{menuOpen && (
  <div 
    className="fixed inset-0 top-16 bg-black/20 backdrop-blur-[2px] md:hidden z-50 animate-fade-in"
    onClick={() => {
      setMenuOpen(false);
      setIsLangOpen(false);
    }}
  >
    <div 
      className="absolute top-0 left-0 w-full action-lang border-t border-current/10 flex flex-col gap-1 px-4 py-3 shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="min-w-10 justify-center flex group relative py-2">
        <span
          onClick={(e) => { 
            e.stopPropagation(); 
            setIsLangOpen(!isLangOpen); 
          }}
          className="w-full text-center cursor-pointer font-bold uppercase text-sm group-hover:underline"
        >
          {labels[lang]}
        </span>
        
        <div className={`w-full absolute top-full pt-2 opacity-0 invisible ${isLangOpen ? 'opacity-100 visible' : ''}`}>
          <div className="action-lang flex flex-col gap-2 rounded-xl min-w-[60px] text-center shadow-lg">
            {(['ukr', 'rus', 'eng', 'esp', 'est'] as const).map((l) => (
              <span
                key={l}
                onClick={(e) => {
                  e.stopPropagation();
                  setLang(l);
                  setIsLangOpen(false);
                  setMenuOpen(false); // Закрываем всё при выборе языка
                }}
                className={`p-4 cursor-pointer border-b last:border-b-0 uppercase text-sm hover:underline ${lang === l ? 'font-bold' : 'opacity-60 font-medium'}`}
              >
                {labels[l]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </header>
  );
}