import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/common/FadeIn';

import './globals.css';
import 'normalize.css';

export const metadata = {
  title: 'TAKANO OUTDOOR FES',
  description: 'ページの説明文',
  openGraph: {
  title: 'TAKANO OUTDOOR FES',
  description: 'ページの説明文',
  url: 'https://example.com',
  siteName: 'TAKANO OUTDOOR FES',
  images: [
    {
      url: 'https://example.com/ogp.jpg',
      width: 1200,
      height: 630,
    },
  ],
  locale: 'ja_JP',
  type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TAKANO OUTDOOR FES',
    description: 'ページの説明文',
    images: ['https://example.com/ogp.jpg'],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/highvoltage-rough" rel="stylesheet" />
      </head>
      <body>
      <FadeIn />
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
