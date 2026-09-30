'use client';
import Link from 'next/link';
import { useState } from 'react';

const destinations = [
  {
    id: 'bromo',
    category: 'Volcano',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMgSxV6Vr--sFXZHztKgPlOWbTbUhIThRSqLJRMQOX_riIngyvlGq4tLSeNWTSOUMWTZRpAgImAWcYW2EpgufgRk2ZbKFAz2GD_noMM09X0oVLENBDx7QjHOe6e7qmS_Z311QODEJMl7swDbYQh1Ugqg5vn8fFF8KqleS1U3ymzQxVwbUCavfDP9tQmMtXJFyila9_gUcXMd7yq7s0FZyHOyRtjs3JvuTIv2DZZoplDOXG5rbN7xNHQw',
    alt:  'Mount Bromo sunrise – volcanic caldera with mist sea',
    badge: 'MOST POPULAR', badgeColor: '#e7c433', badgeBg: 'rgba(231,196,51,0.18)',
    tag: 'Active Volcano', tagColor: '#e7c433', tagBg: 'rgba(231,196,51,0.15)',
    title: 'Mount Bromo',
    desc:  'The iconic smoking caldera set within the vast Sea of Sand. A quintessential sunrise expedition requiring precision timing and specialized transport.',
    alt2:  '5°C – 15°C', altIcon: 'thermostat',
    stats: [{ label: 'ALTITUDE', value: '2,329m', color: '#e2e2e5' }, { label: 'INTENSITY', value: 'Med', color: '#e7c433' }],
  },
  {
    id: 'ijen',
    category: 'Volcano',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwsUaf78rl6WMNlH8Yz92DyxmzIduWh5qw1JjY9vdoPePEpa7WoLzK8d8DPMVrrKoyxOOy3d_JLsdXx_xzsHWrBN3b6NVgpKk5fKiqm-TrxnsRMMkvsKC3404y3eawI_OvH4TOoSPOD3nIifE5vmqKfqrdA4Zaj4Nm8qE3sUFSOwVtIlpC9CPi4hDvGE29uIcfAswsW2r7r92Ojrbk8jMvb2DGzRFALNoFuKbsfwaW8W5NcxBX5EbayA',
    alt:  'Ijen crater blue fire at night – electric sulfur flames',
    badge: 'HIGH INTENSITY', badgeColor: '#ffb4ab', badgeBg: 'rgba(147,0,10,0.35)',
    tag: 'Extreme Terrain', tagColor: '#ffb4ab', tagBg: 'rgba(147,0,10,0.25)',
    title: 'Ijen Crater',
    desc:  'Witness the rare blue fire phenomenon and the highly acidic turquoise crater lake. A demanding nocturnal trek requiring respirator gear.',
    alt2:  'Toxic Gas', altIcon: 'visibility',
    stats: [{ label: 'ALTITUDE', value: '2,799m', color: '#e2e2e5' }, { label: 'INTENSITY', value: 'High', color: '#ffb4ab' }],
  },
  {
    id: 'tumpak',
    category: 'Waterfall',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQjZFGtYIX8YgTx16ZaMg6MKMV1S6jAaJGXDS9Zf8vskVU1LRfaFvecvMQvvaz7PWv7tYVPRoo2LGxtX-yfZb3TozEsEBri3zSpQ2WAevYUYsSSl4lNAjduIVe7Gk509L22YOt59XdV2ehqbBhoA8mYTOLE95v6sb0avIdaUJrUvOSpQOrAd5BHg8MsF1qpqwN93m18TR8RDZ5hqrU4Y4TdbfOu0bUxwCoEBgips82Q1Wi2XNhp4GI6Q',
    alt:  'Tumpak Sewu waterfall – semicircular cascade in jungle canyon',
    badge: 'HIDDEN GEM', badgeColor: '#a9d293', badgeBg: 'rgba(169,210,147,0.15)',
    tag: 'Jungle Trek', tagColor: '#b3dc9c', tagBg: 'rgba(24,56,9,0.4)',
    title: 'Tumpak Sewu',
    desc:  "The 'Thousand Waterfalls'. A steep, wet, and thrilling descent into an ancient canyon surrounded by roaring curtains of water.",
    alt2:  'Jungle Trek', altIcon: 'forest',
    stats: [{ label: 'DURATION', value: '4 Hrs', color: '#e2e2e5' }, { label: 'INTENSITY', value: 'Med', color: '#e7c433' }],
  },
  {
    id: 'city-tour',
    category: 'Cultural',
    img: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    alt:  'City Tour Malang & Batu – Heritage and Cultural Landmarks',
    badge: 'CULTURAL TOUR', badgeColor: '#ffc495', badgeBg: 'rgba(255,196,149,0.15)',
    tag: 'Heritage & Leisure', tagColor: '#ffc495', tagBg: 'rgba(255,196,149,0.15)',
    title: 'City Tour',
    desc:  'Explore the colonial heritage, vibrant atmosphere, apple orchards, and culinary highlights of Malang & Batu City.',
    alt2:  'Full Day', altIcon: 'location_city',
    stats: [{ label: 'DURATION', value: '1 Day', color: '#e2e2e5' }, { label: 'INTENSITY', value: 'Easy', color: '#b3dc9c' }],
  },
];

const categories = ['All', 'Volcano', 'Waterfall', 'Cultural'];

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredDestinations = activeFilter === 'All'
    ? destinations
    : destinations.filter((d) => d.category === activeFilter);

  return (
    <main className="w-full pb-16 md:pb-0">

      {/* ── PAGE HEADER ── */}
      <section className="w-full px-4 md:px-16 pt-10 md:pt-16 pb-4 md:pb-0" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:pb-12">
          <div className="flex flex-col gap-3" style={{ maxWidth: '560px' }}>
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: '#e7c433', textTransform: 'uppercase' }}>
              Expedition Territories
            </span>
            <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#e2e2e5', margin: 0 }}>
              Explore the<br /><span style={{ background: 'linear-gradient(90deg,#ffc495,#ff9d42)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Volcanic Frontier</span>
            </h1>
            <p className="hidden md:block" style={{ color: '#dac2b1', fontSize: '18px', lineHeight: '28px', margin: 0 }}>
              Navigate through our curated selection of East Java's most formidable and breathtaking landscapes.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1">
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: '#dac2b1', opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Active Regions</span>
            <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '32px', fontWeight: 600, color: '#e2e2e5' }}>{filteredDestinations.length < 10 ? `0${filteredDestinations.length}` : filteredDestinations.length}</span>
          </div>
        </div>

        {/* Filter tabs (responsive: scrollable on mobile, flex on desktop) */}
        <div className="flex items-center gap-3 pb-8 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 flex-shrink-0 cursor-pointer"
                style={{
                  fontFamily: 'Geist, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: isActive ? '#ffc495' : 'rgba(30,32,34,0.85)',
                  color: isActive ? '#4d2700' : '#dac2b1',
                  border: isActive ? 'none' : '1px solid rgba(84,67,55,0.35)',
                  boxShadow: isActive ? '0 0 16px rgba(255,196,149,0.25)' : 'none',
                }}>
                {cat} {cat !== 'All' && `(${destinations.filter(d => d.category === cat).length})`}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── DESTINATION CARDS ── */}
      <section className="w-full px-4 md:px-16 pb-12 md:pb-16" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {filteredDestinations.length === 0 ? (
          <div className="py-16 text-center rounded-2xl" style={{ background: '#1e2022', border: '1px solid rgba(84,67,55,0.2)' }}>
            <span className="material-symbols-outlined text-4xl mb-2" style={{ color: '#dac2b1' }}>explore_off</span>
            <p style={{ color: '#e2e2e5', fontSize: '18px', fontWeight: 600 }}>No destinations found for "{activeFilter}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {filteredDestinations.map((dest) => {
              const waUrl = `https://wa.me/6282334843372?text=${encodeURIComponent(`Halo SambangBromo, saya berminat dengan destinasi: ${dest.title}. Bisakah diberikan info paket & jadwalnya?`)}`;
              return (
                <div key={dest.id}
                  className="group relative rounded-xl overflow-hidden shadow-xl card-hover cursor-pointer flex flex-col justify-end"
                  style={{ height: '450px', background: '#1e2022' }}>

                  {/* Background image */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${dest.img}')` }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #121416 0%, rgba(18,20,22,0.55) 55%, transparent 100%)' }} />

                  {/* Content */}
                  <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
                    {/* Top row: badge + condition tag */}
                    <div className="flex items-center justify-between w-full">
                      <span style={{
                        fontFamily: 'Geist, monospace', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                        background: dest.tagBg, color: dest.tagColor, border: `1px solid ${dest.tagColor}40`,
                        padding: '4px 10px', borderRadius: '4px',
                      }}>{dest.tag}</span>
                      <div className="flex items-center gap-1 px-3 py-1 rounded"
                        style={{ background: 'rgba(18,20,22,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(84,67,55,0.35)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '14px', color: '#dac2b1' }}>{dest.altIcon}</span>
                        <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: '#dac2b1', letterSpacing: '0.05em' }}>{dest.alt2}</span>
                      </div>
                    </div>

                    {/* Title & desc */}
                    <div className="flex flex-col gap-2">
                      <h2 className="transition-colors duration-300 group-hover:text-primary"
                        style={{ fontFamily: 'Sora, sans-serif', fontSize: '28px', fontWeight: 600, color: '#e2e2e5', margin: 0 }}>
                        {dest.title}
                      </h2>
                      <p style={{ fontSize: '14px', color: '#dac2b1', lineHeight: '22px', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {dest.desc}
                      </p>
                    </div>

                    {/* Stats + CTA */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex gap-6">
                        {dest.stats.map(({ label, value, color }) => (
                          <div key={label} className="flex flex-col">
                            <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', opacity: 0.6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
                            <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color, lineHeight: '28px' }}>{value}</span>
                          </div>
                        ))}
                      </div>
                      <a href={waUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all hover:scale-105"
                        style={{
                          fontFamily: 'Geist, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
                          background: '#ffc495',
                          color: '#4d2700',
                          boxShadow: '0 0 16px rgba(255,196,149,0.25)',
                          textDecoration: 'none',
                        }}>
                        <span>Book Tours</span>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── TACTICAL OVERVIEW (Interactive Map Section) ── */}
      <TacticalMap />

    </main>
  );
}

function TacticalMap() {
  const mapHotspots = [
    {
      id: 'bromo',
      title: 'Tengger Caldera',
      region: 'Mount Bromo',
      desc: 'Encompasses Mount Bromo, Batok, and the Sea of Sand.',
      x: 340,
      y: 190,
      color: '#ffc495',
      progress: 85,
      elevation: '2,329m',
      tag: 'Active Volcano',
      waText: 'Halo SambangBromo, saya berminat dengan paket ekspedisi Gunung Bromo.'
    },
    {
      id: 'ijen',
      title: 'Ijen Blue Fire Crater',
      region: 'Banyuwangi',
      desc: 'Electric blue sulfur flames and the largest acidic crater lake.',
      x: 620,
      y: 220,
      color: '#ffb4ab',
      progress: 70,
      elevation: '2,799m',
      tag: 'Extreme Terrain',
      waText: 'Halo SambangBromo, saya berminat dengan paket Ijen Blue Fire.'
    },
    {
      id: 'tumpak',
      title: 'Tumpak Sewu Canyon',
      region: 'Lumajang',
      desc: 'Deep jungle gorge surrounded by roaring thousand waterfalls.',
      x: 220,
      y: 310,
      color: '#b3dc9c',
      progress: 95,
      elevation: '500m',
      tag: 'Jungle Trek',
      waText: 'Halo SambangBromo, saya berminat dengan trekking Tumpak Sewu.'
    },
    {
      id: 'city',
      title: 'Malang & Batu Hub',
      region: 'Malang & Batu',
      desc: 'Colonial heritage, cool highlands, apple orchards, and local food.',
      x: 120,
      y: 160,
      color: '#e7c433',
      progress: 100,
      elevation: '444m',
      tag: 'Heritage & Leisure',
      waText: 'Halo SambangBromo, saya berminat dengan Malang & Batu City Tour.'
    },
  ];

  const [activePoint, setActivePoint] = useState(mapHotspots[0]);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.35, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(1, prev - 0.35));
  const handleRecenter = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setActivePoint(mapHotspots[0]);
  };

  const waBookingUrl = `https://wa.me/6282334843372?text=${encodeURIComponent(activePoint.waText)}`;

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden" style={{ background: '#1a1c1e' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,196,149,0.04) 0%, transparent 70%)' }} />
      <div className="px-4 md:px-16 relative z-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: '#e2e2e5', margin: '0 0 8px' }}>Tactical Overview</h3>
            <p style={{ color: '#dac2b1', fontSize: '16px', lineHeight: '24px', maxWidth: '500px', margin: 0 }}>
              Survey the terrain, click pins to inspect basecamps, and plan your expedition route across East Java.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: '#1e2022', border: '1px solid rgba(84,67,55,0.35)', whiteSpace: 'nowrap' }}>
            <span className="material-symbols-outlined" style={{ color: '#ffc495', fontSize: '18px' }}>touch_app</span>
            <span style={{ fontFamily: 'Geist, monospace', fontSize: '11px', color: '#dac2b1', letterSpacing: '0.08em' }}>Click Pin or Drag Map</span>
          </div>
        </div>

        {/* Interactive Map Frame */}
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl select-none"
          style={{
            height: '460px',
            border: '1px solid rgba(84,67,55,0.3)',
            cursor: isDragging ? 'grabbing' : 'grab',
            background: 'linear-gradient(135deg, #0c0e10 0%, #1a1c1e 50%, #121416 100%)',
          }}>

          {/* SVG Map Container (Scalable & Pannable) */}
          <div
            className="w-full h-full transition-transform duration-100 ease-out"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center center',
            }}>
            <svg className="w-full h-full" viewBox="0 0 800 460" preserveAspectRatio="xMidYMid slice">
              {/* Satellite / Topographic Map Background Image */}
              <image
                href="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
                x="0"
                y="0"
                width="800"
                height="460"
                preserveAspectRatio="xMidYMid slice"
                opacity="0.35"
                style={{ filter: 'grayscale(0.6) contrast(1.3) brightness(0.5)' }}
              />

              {/* Tactical Dark Overlay */}
              <rect x="0" y="0" width="800" height="460" fill="url(#mapGrad)" opacity="0.75" />

              <defs>
                <linearGradient id="mapGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0c0e10" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#1a1c1e" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#121416" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="460" stroke="#544337" strokeWidth="0.5" opacity="0.3" />
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 35} x2="800" y2={i * 35} stroke="#544337" strokeWidth="0.5" opacity="0.3" />
              ))}

              {/* Topographic Elevation Contour Lines */}
              <g stroke="#a28d7d" strokeWidth="0.7" fill="none" opacity="0.25">
                {/* Bromo Caldera Topography */}
                <path d="M 270 190 Q 340 130 410 190 Q 380 250 310 240 Z" />
                <path d="M 290 190 Q 340 150 390 190 Q 370 230 320 225 Z" />
                <path d="M 315 190 Q 340 165 365 190 Q 355 210 330 208 Z" />

                {/* Ijen Crater Topography */}
                <path d="M 550 220 Q 620 160 680 220 Q 650 280 580 270 Z" />
                <path d="M 570 220 Q 620 180 660 220 Q 640 260 595 255 Z" />

                {/* Tumpak Sewu Gorge Topography */}
                <path d="M 170 310 Q 220 260 270 310 Q 240 350 190 340 Z" />

                {/* Regional Ridge Lines */}
                <path d="M 40 120 Q 200 180 340 190 T 760 250" strokeWidth="1.2" opacity="0.35" />
                <path d="M 20 290 Q 220 320 420 300 T 780 330" strokeWidth="1" opacity="0.3" />
              </g>

              {/* Connecting Expedition Routes */}
              <path d="M 120 160 Q 220 310 340 190 T 620 220" stroke="#ffc495" strokeWidth="2" strokeDasharray="5 4" fill="none" opacity="0.7" />
              <path d="M 0 320 Q 200 240 400 260 Q 600 280 800 220" stroke="#e7c433" strokeWidth="1.2" strokeDasharray="3 3" fill="none" opacity="0.4" />

              {/* Location Pins */}
              {mapHotspots.map((spot) => {
                const isSelected = activePoint.id === spot.id;
                return (
                  <g
                    key={spot.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePoint(spot);
                    }}
                    className="cursor-pointer group">

                    {/* Outer pulse when selected */}
                    {isSelected && (
                      <circle cx={spot.x} cy={spot.y} r="22" fill={spot.color} opacity="0.2">
                        <animate attributeName="r" values="16;28;16" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.35;0.1;0.35" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}

                    {/* Outer circle */}
                    <circle
                      cx={spot.x}
                      cy={spot.y}
                      r={isSelected ? "12" : "8"}
                      fill={spot.color}
                      opacity={isSelected ? "0.9" : "0.5"}
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Inner core */}
                    <circle
                      cx={spot.x}
                      cy={spot.y}
                      r="4"
                      fill="#121416"
                    />

                    {/* Label */}
                    <text
                      x={spot.x}
                      y={spot.y + 24}
                      textAnchor="middle"
                      fill={isSelected ? spot.color : '#dac2b1'}
                      fontSize="11"
                      fontFamily="Geist, monospace"
                      fontWeight={isSelected ? "600" : "400"}
                      letterSpacing="0.05em">
                      {spot.title.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Interactive Info Card Overlay (Current Focus) */}
          <div
            className="absolute top-4 right-4 p-5 rounded-2xl shadow-2xl transition-all duration-300"
            style={{
              background: 'rgba(18,20,22,0.92)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(84,67,55,0.4)',
              width: 'min(300px, 85vw)',
              zIndex: 30,
            }}>
            <div className="flex items-center justify-between mb-2">
              <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: activePoint.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                {activePoint.tag}
              </span>
              <span style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1', opacity: 0.7 }}>
                ALT: {activePoint.elevation}
              </span>
            </div>

            <h4 style={{ fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, color: '#e2e2e5', margin: '0 0 6px' }}>
              {activePoint.title}
            </h4>

            <p style={{ fontSize: '13px', color: '#dac2b1', margin: '0 0 14px', lineHeight: '20px' }}>
              {activePoint.desc}
            </p>

            {/* Mapping progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1" style={{ fontFamily: 'Geist, monospace', fontSize: '10px', color: '#dac2b1' }}>
                <span>Route Readiness</span>
                <span style={{ color: activePoint.color, fontWeight: 600 }}>{activePoint.progress}%</span>
              </div>
              <div style={{ height: 5, background: '#333537', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${activePoint.progress}%`, background: activePoint.color, borderRadius: '4px', transition: 'width 0.5s ease' }} />
              </div>
            </div>

            {/* Direct WhatsApp CTA for this location */}
            <a
              href={waBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-xs transition-all hover:opacity-90 active:scale-95"
              style={{
                background: '#ffc495',
                color: '#4d2700',
                fontFamily: 'Geist, monospace',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 0 16px rgba(255,196,149,0.2)',
              }}>
              <span>Book Expedition</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </a>
          </div>

          {/* Interactive Controls (Zoom & Recenter) */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2" style={{ zIndex: 30 }}>
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
              style={{ background: '#1e2022', border: '1px solid rgba(84,67,55,0.4)', color: '#e2e2e5' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
            </button>

            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
              style={{ background: '#1e2022', border: '1px solid rgba(84,67,55,0.4)', color: '#e2e2e5' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>remove</span>
            </button>

            <button
              onClick={handleRecenter}
              className="h-11 px-5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: '#1e2022',
                border: '1px solid rgba(84,67,55,0.4)',
                color: '#e2e2e5',
                fontFamily: 'Geist, monospace',
                fontSize: '11px',
                letterSpacing: '0.08em',
              }}>
              Recenter
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
