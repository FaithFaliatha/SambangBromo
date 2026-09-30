'use client';
import Link from 'next/link';
import { useState } from 'react';

/* ─── Package Data ─── */
const packages = [
  {
    id: 'bromo-sunrise',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYGOZWkjFd_XM6D-CFEjkfT2EU_sY_F8ECuCk2kykKyXdYJayVupX4mn2TlIjgmtuCw5PHSVmCSSG5quSX7BOwhestum0UXCnZlZnPYc6nOr9x0nAddlIR9kA6X2uR3P34Fh3al7DcWvKWB9Wf-EGlGfi17I2-setuQZAQyGG8sghyLWRNVZ4GWDr-089_SgXLUcc8wTQoucR9PiqfuYVzDt1z9l1M9HXj5zge6goCUUa2YmPzTplP4A',
    badge: 'MOST POPULAR', badgeColor: '#e7c433', badgeBg: 'rgba(231,196,51,0.15)',
    duration: '1 DAY / 1 NIGHT',
    title: 'Bromo Midnight Sunrise Quest',
    price: 'IDR 850k',
    intensity: 2, intensityLabel: 'MODERATE', intensityColor: '#ffc495',
    highlights: [
      { icon: 'directions_car', text: 'Private 4x4 Hardtop Jeep' },
      { icon: 'volcano',        text: 'Penanjakan Viewpoint' },
      { icon: 'local_cafe',     text: 'Hot Coffee at Sea of Sand' },
    ],
    primary: true,
  },
  {
    id: 'bromo-ijen',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClzUBJM0IMIXjsYJT0gMlTRu3yoeY4iqnUTw9INJhhQyNZV3xRVJzPTYKqRmjDrLYaQ5hHN2EjXexh3e8KjnKjApLSpbj8W9vAtiVQu0u0hYZmG13dL1aiKJVAB3X2g-iuPrSg6UIN3vCC2SPz9XJSRNHUApa_bb2YJz3Ny8vBVWAq5bVuR2RLSkJkh_hYCKF-vHSDGtRKrfSHQDhz4Vh9G0lHgatohHyVRdmmVhA_GmKmsp4LJY6Tzw',
    badge: 'COMBO', badgeColor: '#e2e2e5', badgeBg: 'rgba(55,57,59,0.8)',
    duration: '3 DAYS / 2 NIGHTS',
    title: 'Bromo & Ijen Blue Fire',
    price: 'IDR 2.8M',
    intensity: 4, intensityLabel: 'CHALLENGING', intensityColor: '#ffb4ab',
    highlights: [
      { icon: 'landscape', text: 'Both major craters' },
      { icon: 'hotel',     text: 'Premium Lodge stay' },
      { icon: 'science',   text: 'Gas masks provided' },
    ],
    primary: false,
  },
  {
    id: 'tumpak',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6SaZTTTkU1moagqbQnSTB6Hnb8jTdMr1Xw453FOduA00vI5dqwWnXE3pVG7wmD0-eqEu3Ets784I7SqnOplyayv-aS_FV5awKk3-GHIt-99xpEeB3ZQK2r3GnK4aV5SwPRDwL6lCqRyAkLIA6e6TAiVKaauh3ralMvNqHe5owT5hrAG5rVDJDhvZ54yH2FhAgYerc_aLDAYuwIN6Ibsksu5a-TyGC625SpjCt3qiUSkAMo5UvZwh5cw',
    badge: 'HIDDEN GEM', badgeColor: '#a9d293', badgeBg: 'rgba(169,210,147,0.15)',
    duration: '2 DAYS / 1 NIGHT',
    title: 'Tumpak Sewu Jungle Trek',
    price: 'IDR 1.5M',
    intensity: 3, intensityLabel: 'ADVENTUROUS', intensityColor: '#b3dc9c',
    highlights: [
      { icon: 'water_drop',    text: 'Gorge descent' },
      { icon: 'forest',        text: 'Dense jungle trek' },
      { icon: 'local_dining',  text: 'Gourmet jungle camp meal' },
    ],
    primary: true,
  },
  {
    id: 'golden-triangle',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvvFZ4Zr3O4mWROVBdxA6dTXOGlkUD5Bvk3HbTuC6Ub1VuW9IbQ_YxiUjXryZV305EVSN8_gJdJWo54ELWXGJFaqOaLVGetSBFIjdtbkEUUlQ3gLM1BnQha_Y1Y73Hmpl73Cr9OFI7BblBp-Bgulv86dusB7MhMzmLvvULD-Wi8sP3lhO_4cdSd6gskxeUOPWUIZvW2TAQSVoO7nxwENKD7Zypzp57UG5b00rkhqHEt2lLgX8UVHHVZg',
    badge: 'SIGNATURE', badgeColor: '#ffc495', badgeBg: 'rgba(255,196,149,0.15)',
    duration: '5 DAYS / 4 NIGHTS',
    title: 'East Java Golden Triangle',
    price: 'IDR 5.5M',
    intensity: 4, intensityLabel: 'EXTREME', intensityColor: '#ffb4ab',
    highlights: [
      { icon: 'landscape', text: 'All 3 destinations' },
      { icon: 'star',      text: 'Private concierge' },
      { icon: 'hotel',     text: 'Luxury boutique stays' },
    ],
    primary: true,
  },
  {
    id: 'city-tour',
    img: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    badge: 'CULTURAL TOUR', badgeColor: '#ffc495', badgeBg: 'rgba(255,196,149,0.15)',
    duration: '1 DAY (FULL DAY)',
    title: 'Malang & Batu City Tour',
    price: 'IDR 650k',
    intensity: 1, intensityLabel: 'LEISURE', intensityColor: '#b3dc9c',
    highlights: [
      { icon: 'location_city', text: 'Malang Colonial & Heritage Spots' },
      { icon: 'park',          text: 'Batu Apple Orchard & Flora' },
      { icon: 'restaurant',    text: 'Authentic Culinary Experience' },
    ],
    primary: true,
  },
];

function IntensityBar({ level, color }) {
  return (
    <div className="flex gap-1 mb-1 justify-end">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} style={{ width: 8, height: 16, borderRadius: '100px', background: i < level ? color : '#333537' }} />
      ))}
    </div>
  );
}

function PackageCard({ pkg }) {
  const waUrl = `https://wa.me/6282334843372?text=${encodeURIComponent(`Halo SambangBromo, saya tertarik untuk memesan paket: ${pkg.title} (${pkg.price}/pax). Bisakah diberikan informasi lebih lanjut?`)}`;

  return (
    <div className="relative rounded-2xl overflow-hidden card-hover" style={{ background: '#1e2022', border: '1px solid rgba(84,67,55,0.22)' }}>
      {/* Hero image */}
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url('${pkg.img}')` }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #1e2022 0%, rgba(30,32,34,0.4) 60%, transparent 100%)' }} />
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: pkg.badgeBg, color: pkg.badgeColor, border: `1px solid ${pkg.badgeColor}40`, padding: '3px 8px', borderRadius: '4px' }}>
            {pkg.badge}
          </span>
        </div>
        {/* Wishlist */}
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(30,32,34,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(84,67,55,0.35)' }}>
          <span className="material-symbols-outlined" style={{ color: '#e2e2e5', fontSize: '18px' }}>favorite_border</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4 -mt-6 relative z-10">
        {/* Duration + Title */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ color: '#ffc495', fontSize: '15px' }}>schedule</span>
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', letterSpacing: '0.08em' }}>{pkg.duration}</span>
          </div>
          <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#e2e2e5', margin: 0, lineHeight: '28px' }}>{pkg.title}</h3>
        </div>

        {/* Price + Intensity */}
        <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(51,53,55,0.5)', border: '1px solid rgba(84,67,55,0.2)' }}>
          <div className="flex flex-col">
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '9px', color: '#dac2b1', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Starting from</span>
            <div className="flex items-baseline gap-1">
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '22px', fontWeight: 700, color: '#e7c433' }}>{pkg.price}</span>
              <span style={{ fontSize: '13px', color: '#dac2b1' }}>/pax</span>
            </div>
          </div>
          <div className="text-right">
            <IntensityBar level={pkg.intensity} color={pkg.intensityColor} />
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '9px', color: '#dac2b1', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{pkg.intensityLabel}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="flex flex-col gap-2">
          {pkg.highlights.map(({ icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#b3dc9c' }}>{icon}</span>
              <span style={{ fontSize: '14px', color: '#dac2b1' }}>{text}</span>
            </li>
          ))}
        </ul>

        {/* CTA -> WhatsApp Direct Booking */}
        <a href={waUrl} target="_blank" rel="noopener noreferrer"
          className="mt-2 w-full py-3 rounded-xl flex justify-center items-center gap-2 font-semibold transition-all hover:opacity-90 active:scale-95"
          style={{
            background: pkg.primary ? '#ffc495' : 'transparent',
            color: pkg.primary ? '#4d2700' : '#ffc495',
            border: pkg.primary ? 'none' : '1px solid rgba(255,196,149,0.45)',
            fontFamily: 'Sora, sans-serif', fontSize: '15px',
            boxShadow: pkg.primary ? '0 0 16px rgba(255,196,149,0.18)' : 'none',
            textDecoration: 'none',
          }}>
          <span>Book via WhatsApp</span>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
        </a>
      </div>
    </div>
  );
}

export default function TourPackagesPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <main className="w-full pb-16 md:pb-0">

      {/* ── HERO BANNER ── */}
      <section className="relative w-full overflow-hidden" style={{ height: '200px' }}>
        <img src={packages[0].img} alt="Bromo landscape" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.55 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.5) 60%, rgba(18,20,22,0.3) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-16 pb-6" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: '#e7c433', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>Our Catalog</span>
          <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px,5vw,48px)', fontWeight: 700, color: '#e2e2e5', margin: 0, letterSpacing: '-0.02em' }}>Tour Packages</h1>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="w-full px-4 md:px-16 py-6" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="relative w-full">
          <button onClick={() => setFilterOpen(!filterOpen)}
            className="w-full flex items-center justify-between py-3 px-5 rounded-full transition-colors"
            style={{ background: 'rgba(30,32,34,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(84,67,55,0.35)', color: '#e2e2e5' }}>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#dac2b1' }}>search</span>
              <span style={{ fontSize: '15px', color: '#dac2b1' }}>Find your expedition...</span>
            </div>
            <div className="flex items-center gap-2">
              <div style={{ width: 1, height: 16, background: 'rgba(84,67,55,0.5)' }} />
              <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#ffc495' }}>tune</span>
            </div>
          </button>

          {/* Collapsible filter panel */}
          {filterOpen && (
            <div className="absolute top-14 left-0 w-full rounded-xl p-4 shadow-2xl z-20 flex flex-col gap-4"
              style={{ background: '#282a2c', border: '1px solid rgba(84,67,55,0.35)' }}>
              <div>
                <p style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Duration</p>
                <div className="flex flex-wrap gap-2">
                  {['1 Day', '2–3 Days', '4+ Days'].map((d, i) => (
                    <button key={d} className="px-4 py-2 rounded-full text-sm transition-colors"
                      style={{ background: i === 0 ? 'rgba(255,196,149,0.15)' : '#121416', color: i === 0 ? '#ffc495' : '#dac2b1', border: `1px solid ${i === 0 ? 'rgba(255,196,149,0.4)' : 'rgba(84,67,55,0.4)'}`, fontFamily: 'Inter, sans-serif' }}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Intensity</p>
                <input type="range" min="1" max="5" defaultValue="3" className="w-full" style={{ accentColor: '#ffc495' }} />
                <div className="flex justify-between text-xs mt-1" style={{ color: '#dac2b1' }}>
                  <span>Leisure</span><span>Extreme</span>
                </div>
              </div>
            </div>
          )}

          {/* Active filter chips */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
            {['SUNRISE FOCUS', 'JEEP RIDE'].map((chip) => (
              <div key={chip} className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full"
                style={{ background: '#333537', border: '1px solid rgba(84,67,55,0.45)' }}>
                <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#e2e2e5', letterSpacing: '0.08em' }}>{chip}</span>
                <button className="material-symbols-outlined" style={{ fontSize: '14px', color: '#dac2b1', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>close</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES GRID ── */}
      <section className="w-full px-4 md:px-16 pb-12" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
        </div>
      </section>

    </main>
  );
}
