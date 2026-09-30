'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/',               label: 'Home',          icon: 'home' },
  { href: '/destinations',   label: 'Destinations',  icon: 'explore' },
  { href: '/tour-packages',  label: 'Tour Packages', icon: 'luggage' },
  { href: '/about-us',       label: 'About Us',      icon: 'info' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed top-0 w-full z-50"
      style={{ background: 'rgba(18,20,22,0.85)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(84,67,55,0.2)' }}>
      <div className="h-16 md:h-20 w-full px-4 md:px-16 flex items-center justify-between mx-auto" style={{ maxWidth: '1280px' }}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,196,149,0.15)' }}>
            <span className="material-symbols-outlined" style={{ color: '#ffc495', fontSize: '20px' }}>volcano</span>
          </div>
          <span className="font-semibold uppercase tracking-tight text-sm md:text-base"
            style={{ fontFamily: 'Sora, sans-serif', color: '#e2e2e5', letterSpacing: '0.05em' }}>
            SambangBromo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              className="transition-all duration-200 hover:opacity-100"
              style={{
                fontFamily: 'Geist, monospace',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isActive(href) ? '#ffc495' : '#dac2b1',
                opacity: isActive(href) ? 1 : 0.8,
              }}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-5">
          <span className="material-symbols-outlined hidden md:block cursor-pointer transition-colors hover:text-primary"
            style={{ color: '#dac2b1' }}>search</span>
          <div className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
            style={{ background: '#ffc495' }}>
            <span className="material-symbols-outlined" style={{ color: '#4d2700', fontSize: '18px' }}>person</span>
          </div>
          {/* Mobile hamburger */}
          <button className="md:hidden w-9 h-9 flex items-center justify-center" onClick={() => setOpen(!open)}>
            <span className="material-symbols-outlined" style={{ color: '#e2e2e5' }}>
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden ${open ? 'open' : ''}`}
        style={{ background: '#1e2022', borderTop: '1px solid rgba(84,67,55,0.25)' }}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label, icon }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors"
              style={{
                background: isActive(href) ? 'rgba(255,196,149,0.1)' : 'transparent',
                color: isActive(href) ? '#ffc495' : '#dac2b1',
                fontFamily: 'Geist, monospace',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
