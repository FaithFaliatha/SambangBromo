import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12" style={{ background: '#0c0e10', borderTop: '1px solid rgba(84,67,55,0.12)' }}>
      <div className="mx-auto px-4 md:px-16" style={{ maxWidth: '1280px' }}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,196,149,0.15)' }}>
                <span className="material-symbols-outlined" style={{ color: '#ffc495', fontSize: '20px' }}>volcano</span>
              </div>
              <span className="font-semibold uppercase tracking-widest text-sm"
                style={{ fontFamily: 'Sora, sans-serif', color: '#e2e2e5' }}>
                SambangBromo
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#dac2b1', opacity: 0.7 }}>
              Elevating the East Java expedition experience through expert guidance and luxury service.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-2">
              {['instagram', 'travel_explore', 'photo_camera'].map((icon) => (
                <div key={icon} className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  style={{ background: 'rgba(255,196,149,0.08)', border: '1px solid rgba(84,67,55,0.4)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#dac2b1', fontSize: '16px' }}>{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Adventure links */}
          <div className="flex flex-col gap-3">
            <h4 style={{ fontFamily: 'Geist, monospace', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', color: '#e7c433', textTransform: 'uppercase' }}>
              Adventure
            </h4>
            {[
              { href: '/destinations', label: 'Mount Bromo' },
              { href: '/destinations', label: 'Ijen Crater' },
              { href: '/destinations', label: 'Tumpak Sewu' },
              { href: '/destinations', label: 'City Tour' },
            ].map(({ href, label }) => (
              <Link key={label} href={href}
                className="text-sm transition-colors hover:text-primary"
                style={{ color: '#dac2b1', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Support links */}
          <div className="flex flex-col gap-3">
            <h4 style={{ fontFamily: 'Geist, monospace', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', color: '#e7c433', textTransform: 'uppercase' }}>
              Support
            </h4>
            {[
              { href: '/tour-packages', label: 'Tour Packages', external: false },
              { href: '/about-us',      label: 'About Us',      external: false },
              { href: 'https://wa.me/6282334843372?text=Halo%20SambangBromo,%20saya%20butuh%20bantuan%20darurat.', label: 'Emergency Protocols', external: true },
              { href: 'https://wa.me/6282334843372?text=Halo%20SambangBromo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20concierge.', label: 'Contact Concierge', external: true },
            ].map(({ href, label, external }) => external ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-primary"
                style={{ color: '#dac2b1', textDecoration: 'none' }}>
                {label}
              </a>
            ) : (
              <Link key={label} href={href}
                className="text-sm transition-colors hover:text-primary"
                style={{ color: '#dac2b1', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(84,67,55,0.12)' }}>
          <p style={{ fontFamily: 'Geist, monospace', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: '#dac2b1', opacity: 0.4, textTransform: 'uppercase' }}>
            © 2024 SambangBromo Expeditions. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Geist, monospace', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: '#dac2b1', opacity: 0.3, textTransform: 'uppercase' }}>
            East Java, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
