import './globals.css';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'SambangBromo | Awaken the Volcanic Spirit',
    template: '%s | SambangBromo',
  },
  description:
    'Experience exclusive high-end expeditions through Mount Bromo, Ijen Crater, and Tumpak Sewu. Premium guided tours in East Java, Indonesia.',
  keywords: ['Mount Bromo', 'Ijen Crater', 'Tumpak Sewu', 'East Java', 'volcano tour', 'Indonesia expedition'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@400;500&family=Geist:wght@400;600&display=swap"
        />
      </head>
      <body>
        <Navbar />
        <div style={{ paddingTop: '64px' }} className="md:pt-20">
          {children}
        </div>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
