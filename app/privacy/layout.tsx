import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности сайта Furniture Aesthete",
  robots: { index: false, follow: false },
};
 
export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
 