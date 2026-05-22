import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Условия использования",
  description: "Условия использования сайта Furniture Aesthete",
  robots: { index: false, follow: false },
};
 
export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}