'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { dictionaries, Locale } from './locales/dictionaries';

const AppContext = createContext<any>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Locale>('eng');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Тема определена, когда компонент смонтирован в браузере
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
      {/* Мягкое появление контента после того, как клиент определил тему.
        Это полностью убирает белый блинк/мерцание при перезагрузке.
      */}
      <div className={mounted ? "opacity-100 transition-opacity duration-150" : "opacity-0"}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);