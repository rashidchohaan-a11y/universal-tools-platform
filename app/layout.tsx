import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'UtilityHub | Free calculators, converters, and business tools',
  description:
    'A global utility platform with calculators, converters, business tools, templates, guides, and user dashboards.',
  keywords: [
    'calculator',
    'business tools',
    'roi calculator',
    'salary calculator',
    'invoice generator',
    'profit margin calculator',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
