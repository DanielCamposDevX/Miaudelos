import '@/theme/index.css';
import ThemeRegistry from '@/utils/themeRegistry';
import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import Providers from './contexts/providers';

const lexend = Lexend_Deca({
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Miaudelos',
  description: 'Seu site de modelagem de gatos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <ThemeRegistry options={{ key: 'mui-theme' }}>
        <body className={lexend.className}>
          <Providers>{children}</Providers>
        </body>
      </ThemeRegistry>
    </html>
  );
}
