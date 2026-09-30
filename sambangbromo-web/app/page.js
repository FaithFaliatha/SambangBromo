import Link from 'next/link';

export const metadata = {
  title: 'SambangBromo | Awaken the Volcanic Spirit',
  description: 'Embark on exclusive expeditions through Mount Bromo, Ijen, and Tumpak Sewu. Expertly guided, flawlessly executed.',
};

/* ─── Image URLs ─── */
const HERO_IMG    = 'https://lh3.googleusercontent.com/aida/AP1WRLsofNQImmbX8EGKW_3y76Knandb21LpTCr93M1AM0a18x0g6IXxU3WjScShnNIcoe8RyGiUrwtLcbl7DzQiif6PEmHK3XwevmKmQ_TwJY0EZpHeEUdw4-0jaAVGPFQIAXcJ-YxIS2Z14TZIeuupW0mVfY7ZF6rviyBxnudQmkDJ2Ojw8WRfnKR-S_wcMjPAh_BJwvcjWgYgY-k5zLZCCXRN22QGTT4mLl8vgGZPSdScBPFIlf_54zqlK9I';
const BROMO_IMG   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvvFZ4Zr3O4mWROVBdxA6dTXOGlkUD5Bvk3HbTuC6Ub1VuW9IbQ_YxiUjXryZV305EVSN8_gJdJWo54ELWXGJFaqOaLVGetSBFIjdtbkEUUlQ3gLM1BnQha_Y1Y73Hmpl73Cr9OFI7BblBp-Bgulv86dusB7MhMzmLvvULD-Wi8sP3lhO_4cdSd6gskxeUOPWUIZvW2TAQSVoO7nxwENKD7Zypzp57UG5b00rkhqHEt2lLgX8UVHHVZg';
const IJEN_IMG    = 'https://lh3.googleusercontent.com/aida-public/AB6AXuANXfTWM5Uk8CnSi9hir6QC9KL34Xy3Lnsdc5Fo8xnx8q5AogcymgJzu0jzxo6G8ST3oF-PKxvfh_R00Q3ekRl6O45MdL3rXMfikHHFkRzpKSDFBHgTHdGWqlB-q0O998jghd-hLZ1J7tPOcNzQDrNRvAmfKYqzlCGf9ZwypAW9eeZVq_FD54JOQ4Xsm2Tb6QLCcHwTy3FU2cC3H5M9zHYzO0XerVI9P6W-hZp3Sq2gz9SKIL86cyIf2A';
const TUMPAK_IMG  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4ixu980-iuNlYsgDHOC3fdJng0TMJ7RYHfa8BeUxsogxM83wiLdP1f3C_jvdb7O7PEs9XzIDOFzXvVdUJ6RHoGdt5QwvCgloHu_PDEDeIqOpfOYqizrRyWGyPLF5hwta8fhLpKeA7_HjCvWIVbgyYTNFlJi0wzPfKS29lDxND1OxHPVxMDU67r1qc29hwi2om2gyqSocKN9S_LXRhBSI1ksneyABPBl8nZtQ4Tk3NCR24srAItvP5Tw';
const BROMO_CARD  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuChzpEMbK74lupkSnweQZ0A0rv4bz4oEWrljv6AyQQuTQKSY58f8puq-c2MztlblwGKmFUC45c1X5nsHUnvd5MEKHE06nFdm1SGj480NTqUGazm1Yc-SCg0FCkMezLvvPsBeK4q4sg8WMeRumma-Fvjb679qNbHSvaPiJ_5iOTy19HZANbfBF11ZY-brcXVDTyrnMjm7UZwmEXOG1JMdxqr4HEfDOfxTlo5b2uYex5DjKANkT6txv3RiQ';
const IJEN_CARD   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2hPuWFBilp9_CIaWY5pNDMx9JpAQB1IbFWKL-rm1xy9tmeIox-WljyxehiKS4pFMUDm9FOnUxcM_sntQeba8eKLv3wn7wTmWWC4Ggjn-PztHvT5fj6O8odJt5u8sf1w2tA3Dfg5mY1IAoxUCI6KwsXLF2yXcII2Ye19LAh7t4u0W_VuMXXS7BKyDWU1N4y6pC2eixERPiqlWZ0HdjAs5AKXTjGSVqJb_OR5ChyPEHsTKyX2gYY8MWXA';
const FOREST_IMG  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrFR1OUJ_gsskEugmHz1osWFd44SeOGhN0zfRt059NKfW2ytkCZ5tzsoNfDM1xd8jGMI5RqDc2qMqtdWqxHezyf2DDk9Ne_JCstUfafC73OBOY_R8HaUMpCmVIqS43TbTY-XqgSRgZ2C07PyntB-X0wW4uiuEnzOID-yYp4bB3mpbjm5TCdpMuXVWTeXnyPAdGJ_8jOmH6OPPiAr6BMNPUz2OAwpO6M8PfczPypYz7aV3xMqKZ3eiweQ';
const AVATAR_IMG  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSHCwI-eRI1VtGaTeqWstZfTog8XZoyDBAnaHIWgGLMweJGBYuY9B0lV2Lu2SvFIkX5v_QxBlS1INDwQdNrsUCLtF0IqKJF43zR8jbf9St87spFln6suNZbk8GyVCBXfpglDSQV9IuywYrzqWQ8xbh9h805AJxbFdjByVrweQgh-xLRi1LG8aBUCRCPKWiIultWrYZl51_5IvtcGayqjzaFphkiHg9YHf2xCnHimB5MzC5nM9H-VumLg';

/* ─── Reusable Badge ─── */
function Badge({ children, color = '#e7c433', bg = 'rgba(231,196,51,0.15)' }) {
  return (
    <span style={{
      fontFamily: 'Geist, monospace', fontSize: '10px', fontWeight: 600,
      letterSpacing: '0.1em', textTransform: 'uppercase',
      background: bg, color, border: `1px solid ${color}40`,
      padding: '3px 8px', borderRadius: '4px',
    }}>
      {children}
    </span>
  );
}

/* ─── Mobile Expedition Card ─── */
function ExpeditionCard({ img, alt, badge, badgeColor, badgeBg, duration, title, desc, href }) {
  return (
    <article className="relative w-full rounded-2xl overflow-hidden shadow-xl card-hover" style={{ height: '320px' }}>
      <img src={img} alt={alt} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.85 }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.45) 55%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Badge color={badgeColor} bg={badgeBg}>{badge}</Badge>
          <Badge color="#e2e2e5" bg="rgba(18,20,22,0.6)">{duration}</Badge>
        </div>
        <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#e2e2e5', margin: 0 }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#dac2b1', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{desc}</p>
        <Link href={href}
          className="w-full py-3 flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors mt-1"
          style={{ background: 'rgba(18,20,22,0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(162,141,125,0.3)', color: '#e2e2e5', textDecoration: 'none', fontFamily: 'Sora, sans-serif' }}>
          View Details
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="w-full pb-16 md:pb-0">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'min(85vh, 780px)', minHeight: '520px' }}>
        <img src={HERO_IMG} alt="Mount Bromo at sunrise – fiery sky over volcanic caldera"
          className="absolute inset-0 w-full h-full object-cover" />

        {/* Mobile gradient */}
        <div className="absolute inset-0 md:hidden"
          style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.65) 55%, rgba(18,20,22,0.2) 100%)' }} />
        {/* Desktop gradient */}
        <div className="absolute inset-0 hidden md:block"
          style={{ background: 'linear-gradient(to right, rgba(18,20,22,0.92) 0%, rgba(18,20,22,0.55) 55%, transparent 100%)' }} />

        {/* ── Mobile Content ── */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 flex flex-col gap-3 md:hidden animate-fade-in-up">
          <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: '#e7c433', textTransform: 'uppercase' }}>
            East Java Expeditions
          </span>
          <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: '40px', fontWeight: 700, lineHeight: '48px', letterSpacing: '-0.02em', color: '#e2e2e5', margin: 0 }}>
            Adventure<br />Awaits.
          </h1>
          <p style={{ fontSize: '16px', color: '#dac2b1', lineHeight: '24px', maxWidth: '90%', margin: 0 }}>
            Immerse yourself in the rugged beauty of volcanic landscapes with our exclusive, high-end concierge expeditions.
          </p>
          <Link href="/tour-packages"
            className="w-full py-4 flex items-center justify-center gap-2 rounded-xl font-semibold text-base transition-all active:scale-95 mt-2"
            style={{ background: '#ffc495', color: '#4d2700', textDecoration: 'none', fontFamily: 'Sora, sans-serif', boxShadow: '0 0 24px rgba(255,196,149,0.25)' }}>
            Explore All Packages
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
          </Link>
        </div>

        {/* ── Desktop Content ── */}
        <div className="absolute inset-0 hidden md:flex flex-col justify-center px-16 animate-fade-in-up" style={{ maxWidth: '680px' }}>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mb-8"
            style={{ background: 'rgba(30,32,34,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(84,67,55,0.4)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#e7c433', boxShadow: '0 0 8px rgba(231,196,51,0.7)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', color: '#e2e2e5', textTransform: 'uppercase' }}>
              East Java, Indonesia
            </span>
          </div>
          <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: '64px', fontWeight: 700, lineHeight: '72px', letterSpacing: '-0.02em', color: '#e2e2e5', margin: '0 0 24px' }}>
            Awaken the <br />
            <span className="gradient-text">Volcanic Spirit</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#dac2b1', lineHeight: '28px', maxWidth: '520px', margin: '0 0 40px' }}>
            Embark on an exclusive expedition through the primal landscapes of Bromo, Ijen, and Tumpak Sewu. Expertly guided, flawlessly executed.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/tour-packages"
              className="px-8 py-4 rounded-full font-semibold uppercase transition-all hover:scale-105"
              style={{ background: '#ffc495', color: '#4d2700', textDecoration: 'none', fontFamily: 'Geist, monospace', fontSize: '12px', letterSpacing: '0.1em', boxShadow: '0 0 24px rgba(255,196,149,0.3)' }}>
              Explore Expeditions
            </Link>
            <button className="px-8 py-4 rounded-full font-semibold uppercase flex items-center gap-2 transition-all hover:opacity-90"
              style={{ background: 'rgba(18,20,22,0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(162,141,125,0.5)', color: '#e2e2e5', fontFamily: 'Geist, monospace', fontSize: '12px', letterSpacing: '0.1em' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>play_circle</span>
              Watch Film
            </button>
          </div>
        </div>

        {/* Scroll hint (desktop) */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce-slow" style={{ opacity: 0.55 }}>
          <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', letterSpacing: '0.15em', color: '#dac2b1', textTransform: 'uppercase' }}>Descend</span>
          <span className="material-symbols-outlined" style={{ color: '#dac2b1', fontSize: '20px' }}>arrow_downward</span>
        </div>
      </section>

      {/* ── STATS BAR (Mobile only) ── */}
      <section className="w-full px-4 -mt-6 relative z-20 md:hidden">
        <div className="rounded-xl p-5 flex justify-between items-center shadow-xl"
          style={{ background: 'rgba(30,32,34,0.88)', backdropFilter: 'blur(20px)', border: '1px solid rgba(84,67,55,0.25)' }}>
          {[
            { value: '3',   label: 'Volcanoes' },
            { value: '4k+', label: 'Explorers' },
            { value: '4.9', label: 'Rating' },
          ].map(({ value, label }, i, arr) => (
            <div key={label} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '28px', fontWeight: 700, color: '#ffc495', lineHeight: 1 }}>{value}</span>
                <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', fontWeight: 600, color: '#dac2b1', letterSpacing: '0.08em', marginTop: 4 }}>{label}</span>
              </div>
              {i < arr.length - 1 && <div style={{ width: 1, height: 40, background: 'rgba(84,67,55,0.4)' }} />}
            </div>
          ))}
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="w-full py-12 md:py-24 px-4 md:px-16 mx-auto" style={{ maxWidth: '1280px' }}>
        {/* Section header */}
        <div className="flex justify-between items-end mb-8 md:mb-16 gap-4">
          <div style={{ maxWidth: '500px' }}>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, color: '#e2e2e5', margin: '0 0 8px' }}
              className="text-2xl md:text-4xl">
              <span className="md:hidden">Featured<br />Expeditions</span>
              <span className="hidden md:block">Curated Landscapes</span>
            </h2>
            <p className="hidden md:block" style={{ color: '#dac2b1', fontSize: '16px', lineHeight: '24px', margin: 0 }}>
              Three distinct natural wonders, orchestrated into one seamless journey.
            </p>
          </div>
          <Link href="/destinations" className="flex items-center gap-1 group transition-colors whitespace-nowrap"
            style={{ fontFamily: 'Geist, monospace', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#ffc495', textDecoration: 'none', textTransform: 'uppercase' }}>
            View All
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
          </Link>
        </div>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-5 md:hidden">
          <ExpeditionCard img={BROMO_CARD} alt="Sunrise at Bromo" badge="Intense" badgeColor="#e7c433" badgeBg="rgba(231,196,51,0.15)" duration="2 Days" title="Sunrise at Bromo" desc="Witness the majestic dawn over the caldera, an exclusive guided experience." href="/destinations" />
          <ExpeditionCard img={IJEN_CARD} alt="Ijen Blue Fire" badge="Extreme" badgeColor="#ffb4ab" badgeBg="rgba(147,0,10,0.4)" duration="3 Days" title="Ijen Blue Fire" desc="Descend into the crater to witness the rare phenomenon of burning sulfur." href="/destinations" />
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {/* Bromo – spans 2 cols */}
          <div className="col-span-2 group relative rounded-xl overflow-hidden shadow-xl card-hover cursor-pointer" style={{ height: '420px' }}>
            <img src={BROMO_IMG} alt="Mount Bromo volcanic crater at golden hour"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.45) 60%, transparent 100%)' }} />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <div>
                  <Badge>Signature</Badge>
                  <h3 className="mt-3 mb-1" style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 600, color: '#e2e2e5', margin: '12px 0 4px' }}>Mount Bromo Sunrise</h3>
                  <p style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', opacity: 0.7, letterSpacing: '0.08em', margin: 0 }}>ALT: 2,329M • ACTIVE STRATOVOLCANO</p>
                </div>
                <Link href="/destinations"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ background: 'rgba(18,20,22,0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(162,141,125,0.4)', color: '#e2e2e5', textDecoration: 'none' }}>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Ijen */}
          <div className="group relative rounded-xl overflow-hidden shadow-xl card-hover cursor-pointer" style={{ height: '420px' }}>
            <img src={IJEN_IMG} alt="Ijen Crater turquoise acidic lake"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.5) 55%, transparent 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 4px' }}>Ijen Crater</h3>
              <p style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', opacity: 0.7, letterSpacing: '0.08em', margin: 0 }}>BLUE FIRE • ACIDIC LAKE</p>
            </div>
          </div>

          {/* Tumpak Sewu */}
          <div className="group relative rounded-xl overflow-hidden shadow-xl card-hover cursor-pointer" style={{ height: '420px' }}>
            <img src={TUMPAK_IMG} alt="Tumpak Sewu thousand waterfalls aerial"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.5) 55%, transparent 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 4px' }}>Tumpak Sewu</h3>
              <p style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', opacity: 0.7, letterSpacing: '0.08em', margin: 0 }}>JUNGLE TREK • THOUSAND WATERFALLS</p>
            </div>
          </div>

          {/* Stats card – spans 2 cols */}
          <div className="col-span-2 relative rounded-xl p-8 flex flex-col justify-between overflow-hidden"
            style={{ height: '420px', background: '#282a2c', border: '1px solid rgba(84,67,55,0.2)' }}>
            {/* Decorative blob */}
            <svg className="absolute -right-20 -bottom-20 w-96 h-96 opacity-20 pointer-events-none" style={{ color: '#333537' }} viewBox="0 0 200 200">
              <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.1,15.3,83.5,30.6,74.2,42.9C64.9,55.2,50.8,64.5,35.3,71.2C19.8,77.9,2.8,82,-13.4,79.5C-29.6,77,-45,67.9,-58.5,56.1C-72,44.3,-83.6,29.8,-88.1,13.2C-92.6,-3.4,-90,-22.1,-80.6,-37C-71.2,-51.9,-55,-63.1,-39.7,-69.7C-24.4,-76.3,-12.2,-78.3,1.5,-81C15.2,-83.7,30.5,-83.6,44.7,-76.4Z" fill="currentColor" transform="translate(100 100)" />
            </svg>
            <div>
              <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 8px' }}>Expedition Metrics</h3>
              <p style={{ color: '#dac2b1', fontSize: '16px', lineHeight: '24px', maxWidth: '380px', margin: 0 }}>Rigorous safety standards combined with luxury logistics ensure an uncompromising adventure.</p>
            </div>
            <div className="grid grid-cols-4 gap-4 relative z-10">
              {[
                { val: '3',    unit: null, label: 'Volcanoes',     color: '#ffc495' },
                { val: '48',   unit: 'H',  label: 'Duration',      color: '#ffc495' },
                { val: '2.7',  unit: 'K',  label: 'Max Elevation', color: '#ffc495' },
                { val: '0',    unit: null, label: 'Compromises',   color: '#e7c433' },
              ].map(({ val, unit, label, color }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '32px', fontWeight: 700, color, lineHeight: 1 }}>
                    {val}{unit && <span style={{ fontSize: '20px' }}>{unit}</span>}
                  </div>
                  <div style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="w-full py-16 px-4 relative flex items-center justify-center overflow-hidden" style={{ minHeight: '42vh' }}>
        <img src={FOREST_IMG} alt="Tropical rainforest background" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.28 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(18,20,22,0.82)', backdropFilter: 'blur(4px)' }} />
        <div className="relative z-10 text-center" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <span className="material-symbols-outlined" style={{ color: '#ffc495', fontSize: '40px', display: 'block', marginBottom: '16px' }}>format_quote</span>
          <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '30px', color: '#e2e2e5', marginBottom: '24px' }}>
            "An unforgettable journey into the heart of the earth. The level of service paired with the raw nature is unmatched."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={AVATAR_IMG} alt="Elena R." className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p style={{ fontFamily: 'Geist, monospace', fontSize: '12px', fontWeight: 600, color: '#e2e2e5', margin: 0 }}>Elena R.</p>
              <p style={{ fontSize: '13px', color: '#dac2b1', margin: 0 }}>National Geographic</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="w-full px-4 md:px-16 py-12" style={{ background: '#1a1c1e', borderRadius: '32px 32px 0 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
            style={{ background: '#282a2c' }}>
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,196,149,0.12) 0%, transparent 70%)' }} />
            <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(231,196,51,0.06) 0%, transparent 70%)' }} />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left flex-1">
                <span className="material-symbols-outlined" style={{ color: '#ffc495', fontSize: '40px', display: 'block', marginBottom: '16px' }}>landscape</span>
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '28px', fontWeight: 700, color: '#e2e2e5', margin: '0 0 8px' }}>Join the Expedition</h3>
                <p style={{ color: '#dac2b1', fontSize: '16px', margin: 0 }}>Receive exclusive access to new routes and seasonal offers.</p>
              </div>
              <div className="w-full md:w-auto md:flex-1 flex flex-col gap-3" style={{ maxWidth: '380px' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-4 rounded-xl transition-all outline-none"
                  style={{ background: '#121416', border: '1px solid rgba(162,141,125,0.3)', color: '#e2e2e5', fontSize: '16px', fontFamily: 'Inter, sans-serif' }}
                />
                <button className="w-full py-4 rounded-xl font-semibold transition-all hover:opacity-90 active:scale-95"
                  style={{ background: '#ffc495', color: '#4d2700', fontFamily: 'Sora, sans-serif', fontSize: '16px', boxShadow: '0 0 24px rgba(255,196,149,0.2)' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
