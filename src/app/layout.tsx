import '@/theme/index.css';
import ThemeRegistry from '@/utils/themeRegistry';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
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
        <body className={roboto.className}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
