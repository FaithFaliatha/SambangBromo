'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/',              label: 'HOME',     icon: 'home' },
  { href: '/destinations',  label: 'EXPLORE',  icon: 'explore' },
  { href: '/tour-packages', label: 'PACKAGES', icon: 'luggage' },
  { href: '/about-us',      label: 'ABOUT',    icon: 'info' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden"
      style={{ background: 'rgba(30,32,34,0.92)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(84,67,55,0.2)' }}>
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ href, label, icon }) => (
          <Link key={href} href={href}
            className="flex flex-col items-center gap-1 transition-colors"
            style={{ color: isActive(href) ? '#ffc495' : '#dac2b1' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>{icon}</span>
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '9px', fontWeight: 600, letterSpacing: '0.08em' }}>
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
