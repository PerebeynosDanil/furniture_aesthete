import type { Metadata } from "next";
import { Providers } from './providers';
import Header from './Header';
import Footer from './Footer';
import AppFeatures from './AppFeatures';
import { ThemeProvider } from 'next-themes';
import "./globals.css";


export const metadata: Metadata = {
  title: "Furniture Aesthete — Установка кухонь",
  description: "Профессиональная сборка и установка кухонь любой сложности",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[var(--bg-main)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>

            <Header />
            {children}
            <Footer />
            <AppFeatures />

          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}