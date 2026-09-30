import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn about SambangBromo, our volcanic frontier mission, core pillars, and expert expedition team.',
};

const HERO_BG   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUjXzFmjju583vjC6U-3w8jBjyAUF068yFS7raUaVFu7P75HoW8ucHH8IWZL3zvx1dRYrfSXLG6IiHWNKd6qGPbIjJw5p9KVgofRCu87gIXv_OQ0IRTjmz4eg0D-jkvW6YR3jxWkpWwIForRpqogQi9XV1xwjM4FOvLoiVlOXk5AQ1Kdi-uN2ehDamQE6t3YldEnde4zURCe_pliWEzGwK8I7tdzAaq78ZxiBvHmPpCgVGc-Jvu5_TVQ';
const GUIDE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6LO5Y9RHQQxA5QVqjPmAzAetRRzFU1cVLgbHF3fN2zHWyIDJPrz9Qe9z8ue0MWst5T2WPImG8JnrO7fRxT3a5YWO7Y5clk9_awwv19kUI05djtOBhDjQ3aaFaXTBy-svvLIITMI1KWavsnBlWJ1GknVbIS3qHLt8D1ly2vlS7pryiP--sMHqcwV0BhTphaVk6M3yW_kYMSAu0Olt-VCQ_ykSVtZiJwR_Y2TMwi37QI0_w2_iGt8_i1Q';
const ROCK_IMG  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM9R6Bv_cGqltS47AxeIX_5D2Cza_2xmaW-KaVxEjz5dB-lDUQu2Ud6AN3SI2j0PBeuQ_PFzYu7a9Nse07aQ8f6q0AlNbgd10-BlWio3Tuh4vVHYBssd0yxsFRJbXVeLgz6Y4D5xkJjbidwRDpN9rfrgHRwa-hn2oeV1z22HEAqTFiD1cxl74ko28WzTOfaqKPXZDKJkZrV3UbjEkLYpTJagPK3ug4dhLctKH0PQG3DmOMaQEgr5lO1A';
const TEAM = [
  { name: 'Aris Wibowo',   role: 'Lead Expedition Director',    roleColor: '#e7c433', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7hJlNPGF3fg_CpIxYDdHgpu80KbxzKGw3Nh-rB9N7_tait9golfXbE2XVWZP-Cjg-0OAe456HZaB6QR6dyRXvs7JBi4p5OpVZvLTR69_Ep4EYMjXel6zeuI71ivN1TU1UsYAa_fjgLiX6l7KZqyoQx-Oxz8fBBoei3Tk7qXSlKv13g9Djm3razQWPsIwn9WmcLnTDPYKBBeIWSy2G--HOGHbZHmO3nm3NEDliS4djh2aNmMDtMcD-2w' },
  { name: 'Kartika Sari',  role: 'Head of Basecamp Operations', roleColor: '#ffc495', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp-Sxxg9c-PRil1LaRHOHzbi2ewZ_B1MJv_srjLIu9y7CiBUYF_-uw-QeIT1XjcYvAwsocqPiPIAI5a5LflAIr6xR8602fSZx2tC7seE-P5WGELv-fG2Nxu9lKK8B45_uVgnlkxX6naVHxaEifpa3g22gfW_vCWAYvcloPeCb7fjahg7F4DioGjxeL5Uf4ZLIPAcCRuQipX8ALNDkhpptpl6-5HCnN-auuqwIYhZs29ztl3WZgJsz81A' },
  { name: 'Bima Nugroho',  role: 'Chief Safety Officer',        roleColor: '#e7c433', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQGqG4dLX_ld23swHcqtkDYhxtiJv83MNWGnc6lxtaTfAxB7xtD1qTAByRHGi65Qi5jhvx8G6rPAaI6HeHzZm9pxc6rPw4Gldme8Eav8mmEksYy19LEAPcWR6YynkkmbhYzBm-7ggC-vVkJYqIOQyajO6--7TYBxVm2ehytx9IP-PhnuhWvblYrxHtw49RJXjtI9NJ2coz4gpWvaiAPddwxrXnB8HydLdpuo0knmcoAlAvKs6kO-w6KQ' },
];
const PILLARS = [
  { icon: 'explore',  color: '#ffc495', title: 'Precision Navigation',  desc: 'Advanced topography mapping and real-time weather tracking to ensure optimal route selection and safety during ascents.' },
  { icon: 'shield',   color: '#e7c433', title: 'Rigorous Protocol',     desc: 'Every expedition is backed by comprehensive risk management strategies and emergency response readiness.' },
  { icon: 'diamond',  color: '#ffc495', title: 'Curated Exclusivity',   desc: 'We bypass the crowds. Private vantage points and basecamps for an uncompromised experience.' },
  { icon: 'eco',      color: '#e7c433', title: 'Ecological Respect',    desc: 'Leave-no-trace philosophy, partnering with local authorities to fund conservation efforts in the national park.' },
];
const STATS = [
  { value: '15+',  label: 'Years Active' },
  { value: '4.9k', label: 'Summits Reached' },
  { value: '24/7', label: 'Basecamp Support' },
  { value: '0',    label: 'Safety Incidents' },
];

export default function AboutUsPage() {
  return (
    <main className="w-full pb-16 md:pb-0">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden flex items-end" style={{ minHeight: '50vh' }}>
        <img src={HERO_BG} alt="Mount Bromo sunrise – expedition guide silhouette"
          className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.05)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.55) 50%, rgba(18,20,22,0.2) 100%)' }} />
        <div className="relative z-10 w-full px-4 md:px-16 pb-12 md:pb-20 animate-fade-in-up" style={{ maxWidth: '900px' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 w-fit"
            style={{ background: 'rgba(30,32,34,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,196,149,0.25)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#ffc495' }}>landscape</span>
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: '#ffc495', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Our Story</span>
          </div>
          {/* Mobile title */}
          <h1 className="md:hidden" style={{ fontFamily: 'Sora, sans-serif', fontSize: '40px', fontWeight: 700, lineHeight: '48px', letterSpacing: '-0.02em', color: '#e2e2e5', margin: '0 0 12px' }}>
            Forged in<br /><span style={{ color: '#ffc495' }}>Ash &amp; Ember</span>
          </h1>
          {/* Desktop title */}
          <h1 className="hidden md:block" style={{ fontFamily: 'Sora, sans-serif', fontSize: '56px', fontWeight: 700, lineHeight: '64px', letterSpacing: '-0.02em', color: '#e2e2e5', margin: '0 0 16px' }}>
            Pioneering the<br />Volcanic Frontier
          </h1>
          <p style={{ fontSize: '16px', color: '#dac2b1', lineHeight: '26px', maxWidth: '560px', margin: 0 }}>
            Sambangbromo was forged from a passion for the untamed beauty of East Java. We don't just guide; we orchestrate immersive, high-altitude experiences that redefine expedition travel.
          </p>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-12 md:py-24 px-4 md:px-16" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Left: image (desktop only) */}
          <div className="hidden md:block md:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
              <img src={GUIDE_IMG} alt="Expedition guide silhouetted at crater edge" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(18,20,22,0.7) 0%, transparent 55%)' }} />
              {/* Safety badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'rgba(18,20,22,0.85)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(162,141,125,0.15)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#ffc495' }}>
                    <span className="material-symbols-outlined" style={{ color: '#4d2700' }}>verified_user</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: '#e7c433', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>Safety Record</div>
                    <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#e2e2e5' }}>100% Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="md:col-span-6 md:col-start-7">
            {/* Mobile: glassmorphic quote card */}
            <div className="p-6 rounded-2xl mb-8 md:hidden relative overflow-hidden"
              style={{ background: 'rgba(30,32,34,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(55,57,59,0.6)' }}>
              <div className="absolute -inset-1 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top-left, rgba(255,196,149,0.07) 0%, transparent 60%)' }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: '28px', color: '#e2e2e5', fontStyle: 'italic', margin: '0 0 20px' }}>
                "To elevate the human spirit by safely navigating the thin line between Earth's primal forces and unparalleled luxury."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,196,149,0.15)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#ffc495', fontSize: '20px' }}>landscape</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 600, color: '#e2e2e5' }}>10+ Years</div>
                  <div style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: '#dac2b1', letterSpacing: '0.08em' }}>Navigating the Caldera</div>
                </div>
              </div>
            </div>

            <h2 className="hidden md:block" style={{ fontFamily: 'Sora, sans-serif', fontSize: '32px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 16px' }}>
              Beyond the Edge of the Crater
            </h2>
            <p className="hidden md:block" style={{ fontSize: '17px', color: '#dac2b1', lineHeight: '28px', margin: '0 0 32px' }}>
              Our mission is to elevate the Bromo expedition experience from a simple trek to a meticulously crafted journey. The ruggedness of the terrain should be matched by the refinement of our service.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { title: 'Unrivaled Expertise', desc: 'Our guides possess deep, generational knowledge of volcanic systems and microclimates.' },
                { title: 'Concierge-Level Support', desc: 'From customized itineraries to premium basecamp amenities, we handle every detail.' },
                { title: 'Sustainable Ascents', desc: 'Committed to preserving the fragile ecology of the Tengger massif for future generations.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1"
                    style={{ background: '#282a2c', border: '1px solid rgba(162,141,125,0.25)' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffc495' }} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 4px' }}>{title}</h4>
                    <p style={{ fontSize: '15px', color: '#dac2b1', lineHeight: '24px', margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile stats */}
            <div className="grid grid-cols-2 gap-3 mt-8 md:hidden">
              {[
                { label: 'Expeditions', value: '2,500+', color: '#e7c433' },
                { label: 'Safety Record', value: '100%', color: '#b3dc9c' },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex flex-col gap-1 p-4 rounded-xl"
                  style={{ background: '#121416', border: '1px solid #333537' }}>
                  <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 700, color: '#e2e2e5' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PILLARS ── */}
      <section className="py-12 md:py-24 px-4 md:px-16" style={{ background: '#0c0e10' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="text-center mb-10 md:mb-16">
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: '#e7c433', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>The Sambangbromo Difference</span>
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: '#e2e2e5', margin: 0 }}>Our Core Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {PILLARS.map(({ icon, color, title, desc }) => (
              <div key={title} className="group p-6 md:p-8 rounded-xl transition-all duration-300 hover:border-primary/30"
                style={{ background: '#1e2022', border: '1px solid rgba(84,67,55,0.15)' }}>
                <div className="flex gap-4 md:flex-col md:gap-0">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-0 md:mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: '#121416' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '26px', color }}>{icon}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 6px' }}>{title}</h3>
                    <p style={{ fontSize: '14px', color: '#dac2b1', lineHeight: '22px', margin: 0 }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATISTICS ── */}
      <section className="py-14 md:py-20 px-4 md:px-16 relative overflow-hidden">
        <img src={ROCK_IMG} alt="Volcanic rock texture" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.18 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(18,20,22,0.82)', backdropFilter: 'blur(4px)' }} />
        <div className="relative z-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(36px,5vw,52px)', fontWeight: 700, color: '#ffc495', lineHeight: 1 }}>{value}</span>
                <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: '#dac2b1', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section className="py-12 md:py-24 px-4 md:px-16">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="mb-8 md:mb-16">
            <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: '#e2e2e5', margin: '0 0 8px' }}>
              <span className="md:hidden">The Vanguard</span>
              <span className="hidden md:block">Command Staff</span>
            </h2>
            <p style={{ color: '#dac2b1', fontSize: '15px', margin: 0 }}>The veterans orchestrating your ascent.</p>
          </div>

          {/* Mobile: stacked portrait cards */}
          <div className="flex flex-col gap-6 md:hidden">
            {[
              { name: 'Budi Santoso',  role: 'Chief Expedition Officer',  roleColor: '#ffc495', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoxwJrCejsVDrz8Il3A6Qnd-f_nFg7PHgvlTZ4HsCuIugFwbbSRkzc2kyTvB5iusq5_E1WYfbxJUe0CwUs8wA3HMR9RtlkU_OTpAEyGketngUktH-aDD4mWYMXiNMw02ojpsJ2RNCN81nUOjwrKAJ-Xij79MAyGgORiBSVVAdb4c5eoLXnAQIsW9sP3zvKHDUQLFa3MEKwRsYTN05RB7wpMGzhjhxErQVMuzjZ9Zv8Z2qf3vZ3z_0urg', desc: 'Former search & rescue specialist with unparalleled knowledge of Bromo\'s shifting terrain.' },
              { name: 'Siti Rahma',    role: 'Head of Logistics & Culture', roleColor: '#e7c433', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE7slc0BOGwjhvRdIZ3ndwHHDBIKh3dMh6-qPvZtzNZqi3-MYWhDtGQcePQEYBMtIvxvRILO0_sGlZX_U3u3qWKIrFbVK0H_BOlpLbqpO8So56MNl1nIZKobr0jvKosuBHM7vZ5jerJVx5cQuh98vDYXBbH2cHKR4jqVOxkJodu6j87gJfy3hfccEeUs3M-_OHTd4L1XOKRl2w7yg6GIRrfHcNcnFhF0jUqcXLe5QqZbX5ofABD9zmCA', desc: 'Ensuring every detail—transport, Tenggerese culture, and luxury—is flawless.' },
            ].map(({ name, role, roleColor, img, desc }) => (
              <div key={name} className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.55) 55%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: roleColor, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>{role}</span>
                  <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '24px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 4px' }}>{name}</h3>
                  <p style={{ fontSize: '13px', color: '#dac2b1', margin: 0, lineHeight: '20px' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {TEAM.map(({ name, role, roleColor, img }) => (
              <div key={name} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '3/4' }}>
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(18,20,22,0.75) 0%, transparent 55%)' }} />
                </div>
                <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '22px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 4px' }}>{name}</h3>
                <div style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: roleColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 md:px-16 py-16 flex flex-col items-center text-center gap-6 relative overflow-hidden"
        style={{ background: '#1a1c1e', borderRadius: '32px 32px 0 0' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,196,149,0.08) 0%, transparent 65%)' }} />
        <h2 className="relative z-10" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#e2e2e5', margin: 0 }}>
          Ready to Face the Fire?
        </h2>
        <p className="relative z-10" style={{ color: '#dac2b1', fontSize: '16px', maxWidth: '380px', margin: 0 }}>
          Join the select few who have truly experienced the heartbeat of Java.
        </p>
        <Link href="/tour-packages"
          className="relative z-10 px-8 py-4 rounded-full flex items-center gap-2 font-semibold transition-all hover:scale-105 active:scale-95 mt-2"
          style={{ background: '#ffc495', color: '#4d2700', fontFamily: 'Sora, sans-serif', fontSize: '16px', boxShadow: '0 0 28px rgba(255,196,149,0.28)', textDecoration: 'none' }}>
          View Expeditions
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
        </Link>
      </section>

    </main>
  );
}
