import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Портфолио работ",
  description:
    "Галерея выполненных проектов по установке кухонь. Nobilia, IKEA, Express Küchen и другие европейские бренды. Эстония и вся Европа.",
  openGraph: {
    title: "Портфолио | Furniture Aesthete",
    description: "Реализованные проекты установки кухонь по всей Европе.",
    images: [{ url: "https://furnitureaesthete.vercel.app/portfolio" }],
  },
};
 
export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}