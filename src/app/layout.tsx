// src/app/layout.tsx
import './globals.css';
import { IBM_Plex_Sans, IBM_Plex_Mono, Big_Shoulders_Display } from 'next/font/google';

const plexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-plex-sans' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono' });
const bigShoulders = Big_Shoulders_Display({ subsets: ['latin'], weight: ['700', '800', '900'], variable: '--font-big-shoulders' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plexSans.variable} ${plexMono.variable} ${bigShoulders.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
