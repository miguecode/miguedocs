import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://miguedocs.vercel.app'),
  title: {
    default: 'miguedocs',
    template: '%s | miguedocs',
  },
  description:
    'Repositorio personal de apuntes sobre desarrollo web: JavaScript, TypeScript, Angular, React, bases de datos y más.',
  openGraph: {
    type: 'website',
    siteName: 'miguedocs',
    title: 'miguedocs',
    description:
      'Repositorio personal de apuntes sobre desarrollo web: JavaScript, TypeScript, Angular, React, bases de datos y más.',
    url: 'https://miguedocs.vercel.app',
  },
  twitter: {
    card: 'summary',
    title: 'miguedocs',
    description:
      'Repositorio personal de apuntes sobre desarrollo web: JavaScript, TypeScript, Angular, PHP, bases de datos y más.',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
