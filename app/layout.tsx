import type { Metadata } from "next";
import { Providers } from './providers';
import Header from './Header';
import Footer from './Footer';
import AppFeatures from './components/AppFeatures';
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  // ── Основные ───────────────────────────────────────────────────────────────
  title: {
    default: "Furniture Aesthete | Установка кухонь в Эстонии и Европе",
    template: "%s | Furniture Aesthete",
  },
  description:
    "Профессиональная установка и сборка кухонь в Эстонии и по всей Европе. Вячеслав Бухенко — 20 лет опыта, бренды Nobilia, IKEA, Express Küchen. Бесплатный замер.",

  // ── Ключевые слова ──────────────────────────────────────────────────────────
  keywords: [
    // RU
    "установка кухонь Эстония",
    "сборка кухни Таллин",
    "монтаж кухни Европа",
    "установка IKEA кухни",
    "сборка мебели Таллин",
    "кухни под заказ Эстония",
    "мастер по установке кухонь",
    "Nobilia установка",
    "Express Küchen монтаж",
    "Mööbli Esteet",
    // ET
    "köögimööbli paigaldus Tallinn",
    "köögimööbli kokkupanek Eesti",
    "IKEA köögi paigaldus",
    "mööbli paigaldus Tallinn",
    "köögimööbel Euroopa",
    // EN
    "kitchen installation Estonia",
    "kitchen assembly Tallinn",
    "IKEA kitchen installation Europe",
    "professional kitchen fitter Estonia",
    "kitchen installation Nobilia",
    "furniture assembly Tallinn",
    // DE
    "Küchenaufbau Estland",
    "Küchenmontage Tallinn",
    // ES
    "instalación cocinas Estonia",
    "montaje cocinas Europa",
  ],

  // ── Авторство ───────────────────────────────────────────────────────────────
  authors: [{ name: "Viacheslav Bukhenko", url: "https://furnitureaesthete.vercel.app/" }],
  creator: "Viacheslav Bukhenko",
  publisher: "Furniture Aesthete",

  // ── Canonical ───────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://furnitureaesthete.vercel.app/",
    languages: {
      "ru": "https://furnitureaesthete.vercel.app",
      "et": "https://furnitureaesthete.vercel.app",
      "en": "https://furnitureaesthete.vercel.app",
      "es": "https://furnitureaesthete.vercel.app",
      "uk": "https://furnitureaesthete.vercel.app",
    },
  },

  // ── Robots ──────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ── Иконки ──────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml", 
      },
    ],
  },
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
        <meta name="google-site-verification" content="jDes7P7V53s-Pgz7UTwiC3FdFkGXZfjxCIA5v2ldO6w" />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[var(--bg-main)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>

            <Header />
            {children}
            <Footer />
            <AppFeatures />
            <Analytics />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}