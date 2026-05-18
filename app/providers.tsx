'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { dictionaries, Locale } from './locales/dictionaries';


const AppContext = createContext<any>(null);

function detectLang(): Locale {
  if (typeof window === 'undefined') return 'eng';

  const saved = localStorage.getItem('lang') as Locale;
  if (saved && ['ukr', 'rus', 'eng', 'esp', 'est'].includes(saved)) return saved;

  const browserLang = navigator.language?.toLowerCase() || '';

  if (browserLang.startsWith('uk')) return 'ukr';
  if (browserLang.startsWith('ru')) return 'rus';
  if (browserLang.startsWith('es')) return 'esp';
  if (browserLang.startsWith('et')) return 'est';
  return 'eng'; 
}

export function Providers({ children }: { children: React.ReactNode }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLangState] = useState<Locale>('eng');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setLangState(detectLang());
  }, []);

  const setLang = (l: Locale) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  const labels = { ukr: 'ua', rus: 'ru', eng: 'eng', esp: 'es', est: 'est' };
  const cur = dictionaries[lang];

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppContext.Provider value={{
      lang, setLang, isDark, handleThemeToggle, isLangOpen, setIsLangOpen,
      menuOpen, setMenuOpen, contactOpen, setContactOpen, selectedDoc, setSelectedDoc,
      labels, cur
    }}>
      <div className={mounted ? "opacity-100 transition-opacity duration-150" : "opacity-0"}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);