import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atividades',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Toaster />

      <body className={`${inter.className}`}>
        <div className="min-w-dvw flex min-h-dvh flex-col">
          <Header />

          <main className="flex flex-1 flex-col gap-6 p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
