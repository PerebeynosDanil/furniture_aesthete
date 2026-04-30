'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // enableSystem={true} подтягивает тему винды/телефона автоматически
    // disableTransitionOnChange убирает лаги анимации при самом переключении
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem 
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}